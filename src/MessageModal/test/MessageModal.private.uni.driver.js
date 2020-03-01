import { messageModalDriverFactory as publicDriverFactory } from '../MessageModal.uni.driver';
import { baseModalPrivateDriverFactory } from '../../BaseModal/test/BaseModal.private.uni.driver';

export const messageModalPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...baseModalPrivateDriverFactory(base),
  };
};
