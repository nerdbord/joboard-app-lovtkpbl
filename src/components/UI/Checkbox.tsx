import styles from './Checkbox.module.scss';
import classNames from 'classnames';
import { FilterTypes } from '../../enums';
import { getFilterText } from '../../helpers/getFilterText';

// compopnents
import Checkmark from '../icons/Checkmark';

interface CheckboxProps {
   option: FilterTypes;
   value: boolean;
   onChange: (option: FilterTypes) => void;
}

const Checkbox = (props: CheckboxProps) => {

   const rectangleStyle = classNames(
      styles.checkboxRectangle,
      props.value ? styles.checkboxChecked : '',
   );
   const textStyle = classNames(
      styles.mainTextStyle,
      props.value ? styles.checkedText : styles.uncheckedText,
   );

   return (
      <div className={styles.checkboxTopWrap} onClick={() => {props.onChange(props.option)}}>
         <input type="checkbox" hidden={true} onChange={() => {}} />
         <div className={rectangleStyle}>{props.value && <Checkmark />}</div>
         <div className={textStyle}>{getFilterText(props.option)}</div>
      </div>
   );
};

export default Checkbox;
