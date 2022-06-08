# remote-server

mSupply remote server is a component of the Open mSupply system:

- Hosts the remote server web interface and exposes RESTful and GraphQL APIs for mSupply data.
- Synchronises with central servers which implement `v5` of the mSupply sync API.
- Exposes a dynamic plugin system for customising and extending functionality.

## SSL/https

- To enable ssl place the `key.pem` and `cert.pem` files into the `certs` directory.
- Update the server.host variable in the configuration if needed
- In production (-release build) server must be running with ssl

### Use a self signed cert, e.g. for testing

```bash
# Ensure certs directory exits
mkdir -p certs
# Testing cert for CN=localhost
openssl req -x509 -newkey rsa:4096 -nodes -keyout certs/key.pem -out certs/cert.pem -days 365 -subj '/CN=localhost'
```

## Dependencies

When using Postgres, Postgres 12 or higher is required.

### Windows

- Install [rustup.exe](https://www.rust-lang.org/tools/install), following the instructions for installing Visual Studio C++ Build Tools if prompted.
- Install [PostgreSQL](enterprisedb.com/downloads/postgres-postgresql-downloads).
- Locate your `PostgresSQL` installation directory (e.g. `C:\Program Files\PostgreSQL\14\`).
- Update `Path` and `PQ_LIB_DIR` environment variables:

```
> $env:PQ_LIB_DIR='C:\Program Files\PostgreSQL\14\lib'
> $env:Path+='C:\Program Files\PostgreSQL\14\lib;C:\Program Files\PostgreSQL\14\bin'
```

- To persist `Path` and `PQ_LIB_DIR` for all future sessions, paste the following into a powershell terminal (requires administrator privileges):

```
# CAUTION: this is irreversable!
Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $env:Path
Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PQ_LIB_DIR -Value $env:PQ_LIB_DIR
```

### Windows Subsystem for Linux (WSL)

- Install [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) and [Ubuntu 20.04 LTS](https://www.microsoft.com/en-nz/p/ubuntu-2004-lts/9n6svws3rx71).
- Follow the [Rust installation guide](https://www.rust-lang.org/tools/install) for `Windows Subsystem for Linux` users.
- Follow the [Docker Desktop installation guide](https://docs.docker.com/docker-for-windows/wsl) for WLS2.

### MacOS

- Follow the [Rust installation guide](https://www.rust-lang.org/tools/install).
- Follow the [Docker Desktop installation guide](https://docs.docker.com/docker-for-mac/install/) for Mac.

#### M1 Arm

`brew install libpq` and add the following to `~/.cargo/config.toml`

```
[env]
MACOSX_DEPLOYMENT_TARGET = "10.7"

[target.aarch64-apple-darwin]
rustflags = "-L /opt/homebrew/opt/libpq/lib"
```

### Ubuntu

- Follow the [Rust installation guide](https://www.rust-lang.org/tools/install).
- Follow the [Docker Desktop installation guide](https://docs.docker.com/engine/install/) for Linux.
- Install pkg-config `sudo apt install pkg-config` (needed to install/compile sqlx-cli)
- Install Postgres dev libs: `sudo apt install postgresql-server-dev-13`

### Optional

- Install [pgAdmin](https://www.pgadmin.org/download/) (see [deployment instructions](https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html) if using the Docker image)

## Getting started

- Install [diesel_cli](https://crates.io/crates/diesel_cli):

```bash
cargo install diesel_cli --no-default-features --features "sqlite-bundled postgres"
```

- Pull the latest [Postgres]() image and initialise the Docker container:

```bash
./scripts/init_db.sh
```

- Migrate database tables:

```bash
# postgres
diesel migration run --database-url="postgres://[user]:[password]@[localhost]:[port]/[database]" --migration-dir ./repository/migrations/postgres

# sqlite
diesel migration run --database-url [database file] --migration-dir ./repository/migrations/sqlite

# examples
diesel migration run --database-url="postgres://postgres:password@localhost:5432/omsupply-database" --migration-dir ./repository/migrations/postgres

diesel migration run --database-url ./omsupply-database.sqlite --migration-dir ./repository/migrations/sqlite
```

- Build and start the remote server:

```bash
# Use sqlite (sqlite is default feature)
cargo run
# Use postgres:
cargo run --features postgres
# optionally specify APP_ENVIRONMENT=production, defaults to local if not specified
APP_ENVIRONMENT=production cargo run --features sqlite
```

The default port used to run the server is : 8000

To check you can view the graphql interface here  :http://localhost:8000/graphql

## Tests

`important` graphql test require latest export of graphql schema, need to run `cargo run --bin export_graphql --features sqlite` when making changes to graphql schema (changes that may affect tests). Make sure to `commit` schema.graphql for CI tests to work.

- To run all tests:

```bash
# Use sqlite (sqlite is default feature)
cargo test
# Use postgres
cargo test --features postgres
```

## Building docs

Docs are built via github action, but can build local version with docker: [how to build docs locally](docker/zola_docs/README.md)

## Development Mode

In production certificates are needed to start the server.
Furthermore, the central server must be running.
For convenience these requirements are disabled in development mode.
To enable development mode the `develop` flag must be set to `true` in the settings (`true` on default when using local.yaml):

```yaml
server:
  develop: true
```

## CORS settings

By default remote-server limits Cross-Origin Resource Sharing to the origins configured in the server section of the configuration yaml.
This is a security mechanism to reduce the risk of a malicious site accessing an authenticated connection with mSupply.
Rust enforces the allowed origins in requests, even if the browser doesn't, by returning a 400 error when the Origin isn't specified in a request, or if doesn't match one of origins configured in cors_origins.

Set the cors_origins section of the yaml to include any URLs you want to access omSupply's GraphQL API from this includes the url for the omsupply-client you are using.
e.g. local.yaml
```
server:
  port: 8000
  cors_origins: [http://localhost:3003, https://youwebserver:yourport]
````

In development mode (if not built with --release) cors is set to permissive (server will return allow origin = requesting origin)

```
server:
  port: 8000
  cors_origins: [http://localhost:3003, https://youwebserver:yourport]
```

## Serving front end

Server will server front end files from (client/packages/host/dist), if the client was not build and the folder is empty, server will return an error message: Cannot find index.html. See https://github.com/openmsupply/open-msupply#serving-front-end.

You can build front end by running `yarn build` from `client` directory in the root of the project. After that if you run the server you can navigate to `http://localhost:port` to see this feature in action.

When app is built in production mode (with build --release) static files will be embeded in the binary. There is `yarn build` command at the root of repository.

TODO build instructions

## Cli

* `remote_server_cli` -> provides general commands, for help run: `cargo run --bin remote_server_cli -- --help`
* `demo_cli` -> provides command specific to demo purposes, i.e. refresh-dates will move forward all dates, for help run: `cargo run --bin demo_cli -- --help`