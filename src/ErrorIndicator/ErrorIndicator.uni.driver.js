import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';

export const errorIndicatorDriverFactory = (base, body) => {
  const tooltipTestkit = tooltipDriverFactory(base, body);

  return {
    ...baseUniDriverFactory(base, body),
    isShown: async () => tooltipTestkit.tooltipExists(),
    mouseEnter: () => tooltipTestkit.mouseEnter(),
    getErrorMessage: async () => tooltipTestkit.getTooltipText(),
  };
};
