import React, { useContext, useState } from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '../icons/Checkmark';
import classNames from 'classnames';
import { FilterTypes } from '../../enumFaces/enums';
import { getFilterText } from '../../helpers/getFilterText';
import { useFilter, useFilterUpdate } from '../Filters/FilterContext';

interface CheckboxProps {
   option: FilterTypes;
}

const Checkbox = (props: CheckboxProps) => {
   const filterSettings = useFilter()
   const filterUpdate = useFilterUpdate()
   const checkValue = filterSettings[props.option]

   const rectangleStyle = classNames(
      styles.checkboxRectangle,
      checkValue ? styles.checkboxChecked : '',
   );
   const textStyle = classNames(
      styles.mainTextStyle,
      checkValue ? styles.checkedText : styles.uncheckedText,
   );

   const handleCheck = () => {
      filterUpdate(props.option)
   };
   return (
      <div className={styles.checkboxTopWrap} onClick={handleCheck}>
         <input type="checkbox" hidden={true} onChange={() => {}} />
         <div className={rectangleStyle}>{checkValue && <Checkmark />}</div>
         <div className={textStyle}>{getFilterText(props.option)}</div>
      </div>
   );
};

export default Checkbox;
