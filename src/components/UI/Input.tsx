import styles from './Input.module.scss';

interface InputProps {
   placeholder?: string;
   icon: 'search' | 'location';
}

const Input: React.FC<InputProps> = (props) => {
   return (
      <div>
         <input type="text" className={styles.input} placeholder={props.placeholder} />
      </div>
   );
};

export default Input;
