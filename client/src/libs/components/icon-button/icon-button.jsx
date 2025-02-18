import { IconName } from 'libs/enums/enums';
import PropTypes from 'prop-types';

import { Icon } from '../icon/icon';
import styles from './styles.module.scss';

const IconButton = ({ iconName, label, onClick }) => (
  <button className={styles.iconButton} type="button" onClick={onClick}>
    <Icon name={iconName} />
    {label}
  </button>
);

IconButton.propTypes = {
  iconName: PropTypes.oneOf(Object.values(IconName)).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired
};

IconButton.defaultProps = {
  label: ''
};

export { IconButton };
