import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageModal.st.css';
import BaseModal from '../BaseModal';

const themeMapping = {
  standard: {
    skin: 'standard',
  },
  premium: {
    skin: 'premium',
  },
  alert: {
    skin: 'destructive',
  },
};

/** MessageModal */
class MessageModal extends React.PureComponent {
  _renderIllustration() {
    const { illustration } = this.props;

    return (
      <div className={styles.illustrationContainer}>
        <div className={styles.imageWrapper}>
          {typeof illustration === 'string' ? (
            <img src={illustration} width="100%" />
          ) : (
            illustration
          )}
        </div>
      </div>
    );
  }

  render() {
    const {
      dataHook,
      theme,
      illustration,
      primaryButtonProps = {},
      secondaryButtonProps = {},
    } = this.props;

    const width = illustration ? '630px' : '510px';

    const skin = themeMapping[theme].skin;
    primaryButtonProps['skin'] = skin;
    secondaryButtonProps['skin'] = skin;

    return (
      <div
        {...styles('root', { theme }, this.props)}
        data-hook={dataHook}
        style={{ width }}
      >
        {illustration && this._renderIllustration()}
        <BaseModal
          {...this.props}
          secondaryButtonProps={secondaryButtonProps}
          primaryButtonProps={primaryButtonProps}
        ></BaseModal>
      </div>
    );
  }
}

MessageModal.displayName = 'MessageModal';

MessageModal.propTypes = {
  ...BaseModal.propTypes,

  /** Illustration URL or custom element. */
  illustration: PropTypes.node,
  /** Theme will affect the buttons skins and illustration bg color. */
  theme: PropTypes.oneOf(['standard', 'premium', 'alert']),
};

MessageModal.defaultProps = {
  ...BaseModal.defaultProps,
  theme: 'standard',
};

export default MessageModal;
