import { SupportedLocales } from '../intl/intlHelpers';

export type LocalStorageRecord = {
  '/appdrawer/open': boolean;
  '/localisation/locale': SupportedLocales;
};

export type LocalStorageKey = keyof LocalStorageRecord;