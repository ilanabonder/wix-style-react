import * as React from 'react';
import IconButton from '../../src/IconButton';
import { iconButtonTestkitFactory } from '../../dist/testkit';
import { iconButtonTestkitFactory as iconButtonEnzymeTestkitFactory } from '../../dist/testkit/enzyme';
import { iconButtonTestkitFactory as iconButtonPuppeteerTestkitFactory } from '../../dist/testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function IconButtonWithMandatoryProps() {
  return <IconButton />;
}

function IconButtonWithAllProps() {
  return (
    <IconButton
      as="a"
      className="cls"
      dataHook="hook"
      disabled
      onClick={_ev => {}}
      priority="primary"
      size="large"
      skin="inverted"
    />
  );
}

async function testkits() {
  const testkit = iconButtonTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = iconButtonEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await iconButtonPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}
