import styles from './Input.module.scss';

// components
import LocationIcon from '../../icons/LocationIcon';
import SearchIcon from '../../icons/SearchIcon';

interface InputProps {
   placeholder?: string;
   icon: 'search' | 'location';
}

const Input: React.FC<InputProps> = (props) => {
   return (
      <div className={styles.wrapper}>
         <input type="text" className={styles.input} placeholder={props.placeholder} />
         {props.icon === 'search' ? (
            <SearchIcon className={styles.icon} />
         ) : (
            <LocationIcon className={styles.icon} />
         )}
      </div>
   );
};

export default Input;
