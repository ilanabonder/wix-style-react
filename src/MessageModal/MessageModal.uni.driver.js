import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { baseModalDriverFactory } from '../BaseModal/BaseModal.uni.driver';

import { dataHooks } from './constants';

export const messageModalDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
    ...baseModalDriverFactory(base),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.messageModalCount}"]`).text(),

    /** Click the button */
    clickButton: async () =>
      base.$(`[data-hook="${dataHooks.messageModalButton}"]`).click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$(`[data-hook="${dataHooks.messageModalButton}"]`).text(),
  };
};
