import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BaseModalUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}
