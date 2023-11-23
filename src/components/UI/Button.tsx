import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { ButtonType } from '../../enums';

interface ButtonProps {
   type: ButtonType;
   children: React.ReactNode;
   onClick: () => void;
}

const Button = (props: ButtonProps) => {
   const buttonStyle = classNames(
      styles.buttonStyle,
      props.type == ButtonType.Primary ? styles.buttonPrimary : styles.buttonText,
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
