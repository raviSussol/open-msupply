import React from 'react';
import {
  Box,
  Stack,
  Typography,
  useTranslation,
} from '@openmsupply-client/common';
import { LoginIcon } from './LoginIcon';
import { Theme } from '@common/styles';

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

type LoginLayoutProps = {
  ServerInfo: React.ReactNode;
  UsernameInput: React.ReactNode;
  PasswordInput: React.ReactNode;
  LoginButton: React.ReactNode;
  ErrorMessage: React.ReactNode;
  sponsors: Sponsor[];
  onLogin: () => Promise<void>;
};

const Sponsor = ({ name, logo, url }: Sponsor) => (
  <Box>
    <a href={url} title={name}>
      <img src={logo} height={30} />
    </a>
  </Box>
);

export const LoginLayout = ({
  ServerInfo,
  UsernameInput,
  PasswordInput,
  LoginButton,
  ErrorMessage,
  sponsors,
  onLogin,
}: LoginLayoutProps) => {
  const t = useTranslation('app');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      onLogin();
    }
  };

  return (
    <Box display="flex" style={{ width: '100%' }}>
      <Box
        flex="1 0 50%"
        sx={{
          backgroundImage: (theme: Theme) => theme.mixins.gradient.primary,
          padding: '0 80px 7% 80px',
        }}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        flexDirection="column"
      >
        <Box>
          <Typography
            sx={{
              color: (theme: Theme) => theme.typography.login.color,
              fontSize: {
                xs: '38px',
                sm: '38px',
                md: '48px',
                lg: '64px',
                xl: '64px',
              },
              fontWeight: 'bold',
              lineHeight: 'normal',
              whiteSpace: 'pre-line',
            }}
          >
            {t('login.heading')}
          </Typography>
        </Box>
        <Box style={{ marginTop: 45 }}>
          <Typography
            sx={{
              fontSize: {
                xs: '12px',
                sm: '14px',
                md: '16px',
                lg: '20px',
                xl: '20px',
              },
              color: (theme: Theme) => theme.typography.login.color,
              fontWeight: 600,
            }}
          >
            {t('login.body')}
          </Typography>
        </Box>
      </Box>
      <Box
        flex="1 0 50%"
        flexDirection="column"
        alignItems="center"
        display="flex"
        sx={{
          backgroundColor: 'background.login',
          overflowY: 'scroll',
        }}
      >
        <Box
          display="flex"
          flexGrow="1"
          sx={{
            alignItems: 'center',
          }}
        >
          <Box style={{ width: 285 }}>
            <form onSubmit={onLogin} onKeyDown={handleKeyDown}>
              <Stack spacing={5}>
                <Box display="flex" justifyContent="center">
                  <LoginIcon />
                </Box>
                {UsernameInput}
                {PasswordInput}
                {ErrorMessage}
                <Box display="flex" justifyContent="flex-end">
                  {LoginButton}
                </Box>
              </Stack>
            </form>
          </Box>
        </Box>
        {sponsors ? (
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            flexDirection="column"
            padding={3}
          >
            <Box>
              <Typography>{t('login.support-of')}</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              {sponsors.map(sponsor => (
                <Sponsor key={sponsor.name} {...sponsor} />
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
      <Typography
        component="div"
        sx={{
          fontSize: {
            xs: '12px',
            sm: '12px',
            md: '12px',
            lg: '14px',
            xl: '14px',
          },
          color: 'gray.main',
          position: 'absolute',
          bottom: '10px',
          right: '30px',
        }}
      >
        {ServerInfo}
      </Typography>
    </Box>
  );
};
