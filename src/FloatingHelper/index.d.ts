import * as React from 'react';
import { FloatingHelperContent } from './FloatingHelperContent/FloatingHelperContent';
import { OmitPolyfill } from '../common';

export type FloatingHelperProps = import('wix-ui-core/dist/src/createHOC').WixComponentProps &
  FloatingHelperPropsInner;

export default class FloatingHelper extends React.PureComponent<
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

type FloatingHelperPropsInner = FloatingHelperPopoverProps & FloatingHelperOwnProps;

type PopoverProps = import('wix-ui-core/dist/src/components/popover').PopoverProps;

type FloatingHelperPopoverProps = OmitPolyfill<
  PopoverProps,
  | 'shown'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'showArrow'
  | 'width'
>;
