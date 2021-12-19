/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import {
  ButtonColor, ButtonType, IconName,
  IconSize
} from 'common/enums/enums';
import { useMemo } from 'hooks/hooks';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import { checkIsValidBtnType } from './helpers/helpers';
import styles from './styles.module.scss';

const Button = ({
  onClick,
  className,
  type,
  color,
  iconName,
  iconSize,
  isBasic,
  isFluid,
  isLoading,
  isPrimary,
  isDisabled,
  children
}) => {
  const hasIcon = Boolean(iconName);
  const btnType = useMemo(() => (checkIsValidBtnType(type) ? type : ButtonType.BUTTON), [type]);

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={clsx(
        styles.btn,
        isLoading && styles.loading,
        isFluid && styles.fluid,
        isBasic && styles.basic,
        isPrimary && styles.primary,
        color && styles[`btn__${color}`],
        className
      )}
      type={btnType}
    >
      {hasIcon && <Icon name={iconName} size={iconSize} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.values(ButtonType)),
  color: PropTypes.oneOf(Object.values(ButtonColor)),
  className: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconName)),
  iconSize: PropTypes.oneOf(Object.values(IconSize)),
  isBasic: PropTypes.bool,
  isFluid: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  onClick: null,
  children: null,
  color: null,
  className: null,
  iconSize: null,
  iconName: null,
  isBasic: false,
  isFluid: false,
  isLoading: false,
  isPrimary: false,
  isDisabled: false
};

export default Button;
