import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { SyntheticEventData } from 'react-dom/test-utils';
import { FocusOptionsPolyfill } from '../common';
import { InputTheme, InputSize, InputStatus } from './index';

export interface InputDriver extends BaseDriver {
  trigger: (trigger: string, event: SyntheticEventData) => void;
  focus: (options?: FocusOptionsPolyfill) => FocusOptionsPolyfill;
  blur: () => void;
  getName: () => string | null;
  getMaxLength: () => string | null;
  getType: () => string | null;
  keyDown: (key: SyntheticEventData['key']) => void;
  click: () => void;
  clickSuffix: () => void;
  clickUnit: () => void;
  clickMagnifyingGlass: () => void;
  clickCustomAffix: () => void;
  clickClear: () => void;
  clickIconAffix: () => void;
  clickMenuArrow: () => void;
  mouseOver: () => void;
  mouseOut: () => void;
  clearText: () => void;
  enterText: (text: string) => void;
  getValue: () => string;
  getText: () => string;
  getPlaceholder: () => string;
  getDefaultValue: () => string;
  getTabIndex: () => number;
  getReadOnly: () => boolean;
  getDisabled: () => boolean;
  getTextOverflow: () => string;
  getAriaLabel: () => string | null;
  getAriaControls: () => string | null;
  getAriaDescribedby: () => string | null;
  getAutocomplete: () => string | null;
  getRequired: () => boolean;
  hasPrefix: () => boolean;
  hasPrefixClass: () => boolean;
  hasSuffix: () => boolean;
  hasSuffixClass: () => boolean;
  hasSuffixesClass: () => boolean;
  prefixComponentExists: (style: string) => boolean;
  suffixComponentExists: (style: string) => boolean;
  isMenuArrowLast: () => boolean;
  getTooltipElement: () => HTMLElement;
  getTooltipDataHook: () => 'input-tooltip';
  getDataHook: () => string | null;
  getUnit: () => string;
  getCustomAffix: () => string;
  hasMagnifyingGlass: () => boolean;
  hasMenuArrow: () => boolean;
  hasClearButton: () => boolean;
  isRTL: () => boolean;
  isFocusedStyle: () => boolean;
  isHoveredStyle: () => boolean;
  isDisabled: () => boolean;
  isOfSize: (size: InputSize) => boolean;
  getSize: () => string | null;
  isFocus: () => boolean;
  startComposing: () => void;
  endComposing: () => void;
  getCursorLocation: () => number;
  getRootElementClasses: () => string;
  getInputElementClasses: () => string;
  hasRightBorderRadius: () => boolean;
  hasLeftBorderRadius: () => boolean;
  isCustomInput: () => boolean;

  // Status
  hasStatus: () => boolean;
  getStatus: () => InputStatus;
  hasStatusMessage: () => boolean;
  getStatusMessage: () => string;
}
