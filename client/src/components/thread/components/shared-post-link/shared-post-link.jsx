import { useState, useRef } from 'hooks/hooks';
import PropTypes from 'prop-types';
import { IconName, IconColor } from 'common/enums/enums';
import { Icon, Modal, Input } from 'components/common/common';

import styles from './styles.module.scss';

const SharedPostLink = ({ postId, close }) => {
  const [isCopied, setIsCopied] = useState(false);
  let input = useRef();

  const copyToClipboard = ({ target }) => {
    input.select();
    document.execCommand('copy');
    target.focus();
    setIsCopied(true);
  };

  return (
    <Modal isOpen centered onClose={close}>
      <>
        <header className={styles.header}>
          <span>Share Post</span>
          {isCopied && (
            <span>
              <Icon name={IconName.COPY} color={IconColor.GREEN} />
              Copied
            </span>
          )}
        </header>
        <section>
          <Input
            fluid
            action={{
              color: 'teal',
              labelPosition: 'right',
              icon: 'copy',
              content: 'Copy',
              onClick: copyToClipboard
            }}
            value={`${window.location.origin}/share/${postId}`}
            ref={ref => {
              input = ref;
            }}
          />
        </section>
      </>
    </Modal>
  );
};

SharedPostLink.propTypes = {
  postId: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default SharedPostLink;
