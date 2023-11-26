import styles from './Input.module.scss';
import { IconType } from '../../enums';

// components
import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon';
import { JobData } from '../../types';
import { useState } from 'react';

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

   const renderHighlightedTitle = (title: string): React.ReactNode => {
      const trimmedInput = inputValue.trim();
      if (!trimmedInput) {
         return title;
      }

      const inputRegex = new RegExp(`(${trimmedInput})`, 'ig');
      //leading/trailing whitespaces apparently are lost in basic HTML, so we have to replace them with a different character
      const titleParts = title.replaceAll(" ", '\u00A0').split(inputRegex);

      return (
         <div className={styles.titleStyle}>
            {titleParts.map((part, index) => (
               <div key={index}>
                  {inputRegex.test(part) ? (
                     <div className={styles.titleStyleStrong}>{part}</div>
                  ) : (
                     part
                  )}
               </div>
            ))}
         </div>
      );
   };

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
         {inputValue &&
            inputValue != ' ' &&
            dataArray.map((offer, offerIndex) => (
               <div
                  className={styles.searchResult}
                  style={{ top: `${offerIndex * 50 + 52}px` }}
                  key={offerIndex}
               >
                  {renderHighlightedTitle(offer.title)}
                  <div className={styles.companyStyle}>{offer.companyName}</div>
               </div>
            ))}
      </div>
   );
};

export default Input;
