import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { baseModalDriverFactory } from '../BaseModal/BaseModal.uni.driver';

export const customModalDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
    ...baseModalDriverFactory(base),
  };
};
