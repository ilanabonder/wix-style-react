import * as React from 'react';

export type ActionButtonTheme = 'standard' | 'white' | 'premium' | 'lightPrimary';
export type Appearance = 'dark' | 'light';

export interface FloatingHelperContentProps {
  /** Adds text as the title */
  title?: string;
  /** Adds text as the body */
  body: string;
  /** Sets the text of the action button. Needs to be a non-empty string (and onActionClick prop has to be passed) in order for the action button to appear */
  actionText?: string;
  /** Sets the theme of the action button */
  actionTheme?: ActionButtonTheme;
  /** Custom footer node */
  footer?: React.ReactNode;
  /** When both onActionClick & actionText are provided, will make an action button appear and invoke onActionClick() upon click */
  onActionClick?: () => void;
  /** Adds an image */
  image?: React.ReactNode;
  /** Appearance : `dark` or `light`. */
  appearance?: Appearance;
}

declare const FloatingHelperContent: React.ComponentClass<FloatingHelperContentProps>;
