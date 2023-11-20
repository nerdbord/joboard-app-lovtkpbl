import React, { useState } from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '../icons/Checkmark';
import classNames from 'classnames';
import { FilterTypes } from '../../enumFaces/enums';
import { FilterSettings } from '../../enumFaces/interfaces';

interface CheckboxProps {
   settingsObject: FilterSettings,
   option: FilterTypes
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
      setChecked(prevChecked => !prevChecked);
      const key = Object.keys(FilterTypes).find((k) => FilterTypes[k] as FilterTypes === props.option);
      props.settingsObject[key] = checked;
      console.log(key, checked);
      
   };
   return (
      <div className={styles.checkboxTopWrap} onClick={handleCheck}>
         <input type="checkbox" hidden={true} onChange={() => {}} />
         <div className={rectangleStyle}>{checked && <Checkmark />}</div>
         <div className={textStyle}>{props.option}</div>
      </div>
   );
};

export default Checkbox;
