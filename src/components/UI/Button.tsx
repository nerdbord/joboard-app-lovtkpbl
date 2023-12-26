import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonType } from '../../enums';

interface ButtonProps {
   type: ButtonType;
   children: React.ReactNode;
   className?: string;
   onClick: () => void;
}

const Button = (props: ButtonProps) => {
   const buttonStyle = classNames(
      props.className ? props.className : '',
      styles.buttonStyle,
      props.type === ButtonType.Primary && styles.buttonPrimary,
      props.type === ButtonType.Text && styles.buttonText,
      props.type === ButtonType.Filters && styles.buttonFilters,
      props.type === ButtonType.FiltersActive && styles.buttonFiltersActive,
   );

   const handleClick = () => {
      props.onClick();
   };

   return (
      <button className={buttonStyle} onClick={handleClick}>
         {props.children}
      </button>
   );
};

export default Button;
