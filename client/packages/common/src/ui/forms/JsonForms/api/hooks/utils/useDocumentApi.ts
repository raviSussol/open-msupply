import { useGql, useAuthContext } from '@openmsupply-client/common';
import { getDocumentQueries } from '../../api';
import { getSdk } from '../../operations.generated';

export const usePatientDocumentApi = () => {
  const { storeId } = useAuthContext();
  const keys = {
    base: () => ['patient'] as const,
    detail: (name: string) => [...keys.base(), storeId, name] as const,
    encounterExtractFields: (fields: string[]) =>
      [...keys.base(), storeId, ...fields] as const,
  };
  const { client } = useGql();
  const queries = getDocumentQueries(getSdk(client), storeId);

  return { ...queries, storeId, keys };
};
