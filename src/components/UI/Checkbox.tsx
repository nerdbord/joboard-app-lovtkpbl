import React, { useContext, useState } from 'react';
import styles from './Checkbox.module.scss';
import Checkmark from '../icons/Checkmark';
import classNames from 'classnames';
import { FilterTypes } from '../../enumFaces/enums';
import { FilterContext } from '../Filters/FilterContext';
import { getFilterText } from '../../helpers/getFilterText';

interface CheckboxProps {
   option: FilterTypes;
}

const Checkbox = (props: CheckboxProps) => {
   const { filterSettings, setFilterSettings } = useContext(FilterContext);
   const checkValue = filterSettings[props.option];
   const [refresher, useRefresh] = useState(false)

   const rectangleStyle = classNames(
      styles.checkboxRectangle,
      checkValue ? styles.checkboxChecked : '',
   );
   const textStyle = classNames(
      styles.mainTextStyle,
      checkValue ? styles.checkedText : styles.uncheckedText,
   );

   const handleCheck = () => {
      console.log(filterSettings[props.option]);
      setFilterSettings((prevState) => ({
         ...prevState,
         [props.option]: !prevState[props.option],
      }));
      useRefresh(prev => !prev)
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
