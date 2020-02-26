import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import BaseModal from '../BaseModal';
import { baseModalPrivateDriverFactory } from './BaseModal.private.uni.driver';

import Checkbox from '../../Checkbox';
import { dataHooks } from '../constants';

describe('BaseModal', () => {
  const render = createRendererWithUniDriver(baseModalPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <BaseModal
        dataHook={dataHooks.baseModal}
        primaryButtonText={'Confirm'}
        primaryButtonProps={{ dataHook: dataHooks.primaryButton }}
        secondaryButtonText={'Cancel'}
        secondaryButtonProps={{ dataHook: dataHooks.secondaryButton }}
      >
        Content
      </BaseModal>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getPrimaryButtonText()).toEqual('Confirm');
    expect(await driver.getSecondaryButtonText()).toEqual('Cancel');
  });
  it('should render children', async () => {
    const children = <div data-hook="child">Child div</div>;
    const { driver } = render(<BaseModal>{children}</BaseModal>);

    expect(await driver.childExists('[data-hook=child]')).toBe(true);
  });

  it('should receive class name', async () => {
    const expectedClass = 'classy';
    const { driver } = render(
      <BaseModal className={expectedClass}>Content</BaseModal>,
    );

    expect(await driver.hasClass(expectedClass)).toBe(true);
  });

  it('should render with the given width', async () => {
    const width = '600px';
    const { driver } = render(<BaseModal width={width}>Content</BaseModal>);

    expect(await driver.getModalWidth()).toEqual(width);
  });

  it('should render title', async () => {
    const title = 'Modal Title';
    const { driver } = render(<BaseModal title={title}>Content</BaseModal>);

    expect(await driver.getTitleText()).toEqual(title);
  });

  it('should render title node', async () => {
    const titleText = 'Modal Title';
    const titleNode = <div data-hook="baseModal-title">{titleText}</div>;
    const { driver } = render(<BaseModal title={titleNode}>Content</BaseModal>);

    expect(await driver.getTitleText()).toEqual(titleText);
  });

  it('should render subtitle', async () => {
    const subtitle = 'Subtitle here';
    const title = 'Modal Title';
    const { driver } = render(
      <BaseModal title={title} subtitle={subtitle}>
        Content
      </BaseModal>,
    );

    expect(await driver.getSubtitleText()).toEqual(subtitle);
  });

  it('should click on the primary action button', async () => {
    const props = {
      primaryButtonText: 'Confirm',
      primaryButtonOnClick: jest.fn(),
      primaryButtonProps: { dataHook: dataHooks.primaryButton },
    };
    const { driver } = render(<BaseModal {...props}>Content</BaseModal>);
    await driver.clickPrimaryButton();
    expect(props.primaryButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the secondary action button', async () => {
    const props = {
      secondaryButtonText: 'Cancel',
      secondaryButtonOnClick: jest.fn(),
      secondaryButtonProps: { dataHook: dataHooks.secondaryButton },
    };
    const { driver } = render(<BaseModal {...props}>Content</BaseModal>);
    await driver.clickSecondaryButton();
    expect(props.secondaryButtonOnClick).toHaveBeenCalledTimes(1);
  });
  it('should click on the close button', async () => {
    const props = {
      onCloseButtonClick: jest.fn(),
    };
    const { driver } = render(<BaseModal {...props}>Content</BaseModal>);

    await driver.clickCloseButton();

    expect(props.onCloseButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should allow changing the primary button text', async () => {
    const { driver } = render(
      <BaseModal
        primaryButtonText="Press me"
        primaryButtonProps={{ dataHook: dataHooks.primaryButton }}
      >
        Content
      </BaseModal>,
    );
    expect(await driver.getPrimaryButtonText()).toEqual('Press me');
  });

  it('should allow changing the secondary button text', async () => {
    const { driver } = render(
      <BaseModal
        secondaryButtonText="Don't press me"
        secondaryButtonProps={{ dataHook: dataHooks.secondaryButton }}
      >
        Content
      </BaseModal>,
    );
    expect(await driver.getSecondaryButtonText()).toEqual("Don't press me");
  });

  it(`should render 'sideActions'`, async () => {
    const dataHook = 'sideActions';
    const selector = '[data-hook="' + dataHook + '"]';
    const sideActions = (
      <div data-hook={dataHook}>
        <Checkbox>Check this</Checkbox>
      </div>
    );
    const { driver } = render(
      <BaseModal sideActions={sideActions}>Content</BaseModal>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });

  it(`should render 'footnote'`, async () => {
    const dataHook = 'footnote';
    const selector = '[data-hook="' + dataHook + '"]';
    const footnote = <div data-hook={dataHook}>Footnote here</div>;
    const { driver } = render(
      <BaseModal footnote={footnote}>Content</BaseModal>,
    );

    expect(await driver.childExists(selector)).toBe(true);
  });
});
