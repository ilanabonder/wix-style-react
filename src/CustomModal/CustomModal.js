import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomModal.st.css';
import BaseModal from '../BaseModal';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    /** additional css classes */
    className: PropTypes.string,
    /** data hook for testing */
    dataHook: PropTypes.string,
    /** The modal's title */
    title: PropTypes.node,
    /** The modal's subtitle */
    subtitle: PropTypes.string,
    /** When not provided, the primary action button will not be rendered */
    primaryButtonText: PropTypes.string,
    /** Passed to the primary button as props without any filter / mutation */
    primaryButtonProps: PropTypes.object,
    /** callback for when the primary button is clicked */
    primaryButtonOnClick: PropTypes.func,
    /** When not provided, the secondary action button will not be rendered */
    secondaryButtonText: PropTypes.string,
    /** Passed to the secondary button as props without any filter / mutation */
    secondaryButtonProps: PropTypes.object,
    /** callback for when the secondary button is clicked */
    secondaryButtonOnClick: PropTypes.func,
    /** callback for when the close button is clicked */
    onCloseButtonClick: PropTypes.func,
    /** When set to true, there will be no content padding */
    removeContentPadding: PropTypes.bool,
    /** a footnote node, to be rendered at the very bottom of the modal */
    footnote: PropTypes.node,
    /** side actions node, to be rendered as the first element on the same row as the action buttons */
    sideActions: PropTypes.node,
    /** Specify the exact width of the modal */
    width: PropTypes.string,
    /** the children / content of the modal */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    primaryButtonText: '',
    secondaryButtonText: '',
    title: '',
    subtitle: '',
    removeContentPadding: false,
  };

  render() {
    const { width, dataHook } = this.props;
    return (
      <div
        {...styles('root', {}, this.props)}
        data-hook={dataHook}
        style={{ width }}
      >
        <BaseModal {...this.props}></BaseModal>
      </div>
    );
  }
}

export default CustomModal;
