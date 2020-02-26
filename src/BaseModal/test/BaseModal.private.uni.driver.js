import { baseModalDriverFactory as publicDriverFactory } from '../BaseModal.uni.driver';

export const baseModalPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
    hasClass: className => base.hasClass(className),
    childExists: selector => base.$(selector).exists(),
  };
};
