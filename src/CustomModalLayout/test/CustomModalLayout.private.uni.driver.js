import { customModalLayoutDriverFactory as publicDriverFactory } from '../CustomModalLayout.uni.driver';
import { baseModalPrivateDriverFactory } from '../../BaseModal/test/BaseModal.private.uni.driver';

export const customModalLayoutPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
    ...baseModalPrivateDriverFactory(base),
  };
};
