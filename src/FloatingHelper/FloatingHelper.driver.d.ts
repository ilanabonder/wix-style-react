import { ClosablePopoverDriver }  from './ClosablePopover/ClosablePopover.driver';
import { FloatingHelperContentDriver }  from './FloatingHelperContent/FloatingHelperContent';


export interface FloatingHelperDriver extends ClosablePopoverDriver {
  getHelperContentDriver: () => FloatingHelperContentDriver;
  hasCloseButton: () => boolean;
  clickCloseButton: () => void;
  getWidth: () => string;
}
