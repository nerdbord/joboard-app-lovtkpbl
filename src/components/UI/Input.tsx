import styles from './Input.module.scss';
import { IconType } from '../../enums';

// components
import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon';

interface InputProps {
   placeholder?: string;
   icon: IconType;
}

const Input: React.FC<InputProps> = (props) => {
   return (
      <div className={styles.wrapper}>
         <input
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            name={props.placeholder}
         />
         {props.icon === IconType.Search ? (
            <SearchIcon className={styles.icon} />
         ) : (
            <LocationIcon className={styles.icon} />
         )}
      </div>
   );
};

export default Input;
