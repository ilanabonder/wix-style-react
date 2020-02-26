import * as React from 'react';

export interface BaseModalProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class BaseModal extends React.PureComponent<BaseModalProps>{}
