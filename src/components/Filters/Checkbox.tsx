import React, { useState } from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '../icons/Checkmark';
import classNames from 'classnames';

interface CheckboxProps {
   text: string;
}

const Checkbox = (props: CheckboxProps) => {
   const [checked, setChecked] = useState(true);

   const rectangleStyle = classNames(
      styles.checkboxRectangle,
      checked ? styles.checkboxChecked : '',
   );
   const textStyle = classNames(
      styles.mainTextStyle,
      checked ? styles.checkedText : styles.uncheckedText,
   );

   const handleCheck = () => {
      setChecked(!checked);
   };
   return (
      <div className={styles.checkboxTopWrap} onClick={handleCheck}>
         <input type="checkbox" hidden={true} onChange={() => {}} />
         <div className={rectangleStyle}>{checked && <Checkmark />}</div>
         <div className={textStyle}>{props.text}</div>
      </div>
   );
};

export default Checkbox;
