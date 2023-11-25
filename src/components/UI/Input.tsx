import styles from './Input.module.scss';
import { IconType } from '../../enums';

// components
import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon';
import { JobData } from '../../types';
import { useState } from 'react';
import Checkbox from './Checkbox';

interface InputProps {
   placeholder?: string;
   icon: IconType;
   offers: JobData[];
}

const Input: React.FC<InputProps> = (props) => {
   const [dataArray, setDataArray] = useState<JobData[]>(props.offers);
   const [inputValue, setInputValue] = useState('');

   const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const eventValue = event.target.value;
      const inputRegex = new RegExp(eventValue, 'i');
      setInputValue(eventValue);
      const filteredData = props.offers.filter((offer) => inputRegex.test(offer.title));
      setDataArray(filteredData);
   };

   console.log(dataArray);

   return (
      <div className={styles.wrapper}>
         <input
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            name={props.placeholder}
            onInput={handleInput}
            value={inputValue}
         />
         {props.icon === IconType.Search ? (
            <SearchIcon className={styles.icon} />
         ) : (
            <LocationIcon className={styles.icon} />
         )}
         {inputValue.length > 0 &&
            dataArray.map((offer, offerIndex) => (
               <div className={styles.searchResult} style={{ top: `${offerIndex*50+52}px` }}>
                  <div className={styles.titleStyle}>{offer.title}</div>
                  <div className={styles.companyStyle}>{offer.companyName}</div>
               </div>
            ))}
      </div>
   );
};

export default Input;
