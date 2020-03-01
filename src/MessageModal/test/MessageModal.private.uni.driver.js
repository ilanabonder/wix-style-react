import { messageModalDriverFactory as publicDriverFactory } from '../MessageModal.uni.driver';
import { baseModalLayoutPrivateDriverFactory } from '../../BaseModalLayout/test/BaseModalLayout.private.uni.driver';

export const messageModalPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
    ...baseModalLayoutPrivateDriverFactory(base),
  };
};
