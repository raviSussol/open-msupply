import React, { FC } from 'react';
import { Navigate, useMatch } from 'react-router-dom';
import { RouteBuilder } from '@openmsupply-client/common';
import { AppRoute } from '@openmsupply-client/config';

const ItemService = React.lazy(
  () => import('@openmsupply-client/system/src/Item/Service/Service')
);

const fullItemPath = RouteBuilder.create(AppRoute.Catalogue)
  .addPart(AppRoute.Items)
  .addWildCard()
  .build();

const CatalogueContainer: FC = () => {
  if (useMatch(fullItemPath)) {
    return <ItemService />;
  }

  if (!useMatch(AppRoute.Catalogue)) {
    const notFoundRoute = RouteBuilder.create(AppRoute.PageNotFound).build();
    return <Navigate to={notFoundRoute} />;
  }

  return <></>;
};

export default CatalogueContainer;