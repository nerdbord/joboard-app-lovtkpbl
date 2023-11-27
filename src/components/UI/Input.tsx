import styles from './Input.module.scss';
import { FilterTypes, IconType } from '../../enums';

// components
import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon';
import { JobData } from '../../types';
import { useState } from 'react';
import { useFilter, useFilterUpdate } from '../Filters/FilterContext';

interface InputProps {
   placeholder?: string;
   icon: IconType;
   offers: JobData[];
}

const Input: React.FC<InputProps> = (props) => {
   const inputValue = useFilter().nameString
   const updateFilter = useFilterUpdate()
   const [dataArray, setDataArray] = useState<JobData[]>(props.offers);
   const [isFocused, setIsFocused] = useState(false);

   const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      /**
       *    Curious behaviour is happening here. After clicking the desired search tooltip
       *    the input value changes properly but the inputRegex value stays as it was,
       *    prompting the user their last search in the input if they click on it again.
       * 
       *    I think this behaviour should be kept.
       */
      const eventValue = event.target.value;
      updateFilter(FilterTypes.nameString, eventValue);
      const inputRegex = new RegExp(eventValue.trim(), 'i');

      const filteredData = props.offers.filter((offer) => inputRegex.test(offer.title));
      setDataArray(filteredData);
   };


   //this function creates the highlight effect on the job title string
   const renderHighlightedTitle = (title: string): React.ReactNode => {
      const trimmedInput = inputValue.trim();
      if (!trimmedInput) {
         return title;
      }

      //leading/trailing whitespaces apparently are lost in basic HTML, so we have to replace them with a different character
      const inputRegex = new RegExp(`(${trimmedInput.replaceAll(' ', '\u00A0')})`, 'ig');
      const titleParts = title.replaceAll(' ', '\u00A0').split(inputRegex);

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

   function handleClick(jobTitle: string) {
      updateFilter(FilterTypes.nameString, jobTitle);
      setIsFocused(false)
   }

   function handleMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target.style.backgroundColor = "var(--color-gray-lightest)"
   }

   function handleMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target.style.backgroundColor = "var(--color-white)"
   }

   return (
      <div className={styles.wrapper}>
         <input
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            name={props.placeholder}
            onInput={handleInput}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(true)}
         />
         {props.icon === IconType.Search ? (
            <SearchIcon className={styles.icon} />
         ) : (
            <LocationIcon className={styles.icon} />
         )}
         {isFocused &&
            inputValue &&
            inputValue != ' ' &&
            dataArray.map((offer, offerIndex) => (
               <div
                  className={styles.searchResult}
                  style={{ top: `${offerIndex * 50 + 52}px` }}
                  key={offerIndex}
                  onClick={() => handleClick(offer.title)}
                  onMouseEnter={(event) => handleMouseEnter(event)}
                  onMouseLeave={(event) => handleMouseLeave(event)}
               >
                  {renderHighlightedTitle(offer.title)}
                  <div className={styles.companyStyle}>{offer.companyName}</div>
               </div>
            ))}
      </div>
   );
};

export default Input;
