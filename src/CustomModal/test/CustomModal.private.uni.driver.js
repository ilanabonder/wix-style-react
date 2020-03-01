import { customModalDriverFactory as publicDriverFactory } from '../CustomModal.uni.driver';
import { baseModalPrivateDriverFactory } from '../../BaseModal/test/BaseModal.private.uni.driver';

export const customModalPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    ...baseModalPrivateDriverFactory(base),
  };
};
