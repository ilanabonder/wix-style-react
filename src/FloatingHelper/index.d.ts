import * as React from 'react';
import { FloatingHelperContent } from './FloatingHelperContent/FloatingHelperContent';
import { OmitPolyfill } from '../common';

export type FloatingHelperProps = import('wix-ui-core/dist/src/createHOC').WixComponentProps &
  FloatingHelperPropsInner;

declare class FloatingHelper extends React.PureComponent<
  FloatingHelperProps
> {
  open: () => void;
  close: () => void;
  static Content: typeof FloatingHelperContent;
}

export type FloatingHelperAppearance = 'dark' | 'light';

interface FloatingHelperOwnProps {
  width?: string | number;
  target: React.ReactNode;
  content: React.ReactNode;
  onOpen?: Function;
  onClose?: Function;
  appearance?: FloatingHelperAppearance;
  opened?: boolean;
  initiallyOpened?: boolean;
}

type FloatingHelperPropsInner = FloatingHelperPopoverProps &
  FloatingHelperOwnProps;

type FloatingHelperPopoverProps = OmitPolyfill<
  import('wix-ui-core/dist/src/components/popover').PopoverProps,
  'shown' | 'onMouseEnter' | 'onMouseLeave' | 'showArrow' | 'width'
>;

export default FloatingHelper;
