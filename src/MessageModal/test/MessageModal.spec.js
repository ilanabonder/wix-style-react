import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MessageModal from '../MessageModal';
import { messageModalPrivateDriverFactory } from './MessageModal.private.uni.driver';
import { dataHooks } from '../constants';
import { dataHooks as baseDataHooks } from '../../BaseModal/constants';

describe('MessageModal', () => {
  const render = createRendererWithUniDriver(messageModalPrivateDriverFactory);
  const commonProps = {
    dataHook: dataHooks.messageModal,
    primaryButtonText: 'Confirm',
    primaryButtonProps: { dataHook: baseDataHooks.primaryButton },
    secondaryButtonText: 'Cancel',
    secondaryButtonProps: { dataHook: baseDataHooks.secondaryButton },
  };

  afterEach(() => {
    cleanup();
  });

  describe('Render', () => {
    it('should render', async () => {
      const { driver } = render(
        <MessageModal {...commonProps}>Content</MessageModal>,
      );

      expect(await driver.exists()).toBe(true);
      expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
      expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
    });

    it('should render children', async () => {
      const children = <div data-hook="child">Child div</div>;
      const { driver } = render(<MessageModal>{children}</MessageModal>);

      expect(await driver.childExists('[data-hook=child]')).toBe(true);
    });
  });

  describe('Illustration', () => {
    it('Illustration provided - should render with width of 630px', async () => {
      const { driver } = render(
        <MessageModal illustration={'illustration.png'}>Content</MessageModal>,
      );

      expect(await driver.getModalWidth()).toEqual('630px');
    });
    it('No Illustration provided - should render with width of 510px', async () => {
      const { driver } = render(<MessageModal>Content</MessageModal>);

      expect(await driver.getModalWidth()).toEqual('510px');
    });
  });
  describe('Theme', () => {
    it('Default - Standard theme', async () => {
      const { driver } = render(
        <MessageModal {...commonProps}>Content</MessageModal>,
      );

      expect(await driver.primaryButtonHasSkin('standard')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('standard')).toBe(true);
    });
    it('Alert theme', async () => {
      const { driver } = render(
        <MessageModal {...commonProps} theme="alert">
          Content
        </MessageModal>,
      );

      expect(await driver.primaryButtonHasSkin('destructive')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('destructive')).toBe(true);
    });
    it('Premium theme', async () => {
      const { driver } = render(
        <MessageModal {...commonProps} theme="premium">
          Content
        </MessageModal>,
      );

      expect(await driver.primaryButtonHasSkin('premium')).toBe(true);
      expect(await driver.secondaryButtonHasSkin('premium')).toBe(true);
    });
  });
});
