import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomModal.st.css';
import BaseModal from '../BaseModal';

/** CustomModal */
class CustomModal extends React.PureComponent {
  static displayName = 'CustomModal';

  static propTypes = {
    ...BaseModal.propTypes,
    /** additional css classes */
    className: PropTypes.string,
    /** data hook for testing */
    dataHook: PropTypes.string,
    /** When set to true, there will be no content padding */
    removeContentPadding: PropTypes.bool,
    /** a footnote node, to be rendered at the very bottom of the modal */
    width: PropTypes.string,
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
