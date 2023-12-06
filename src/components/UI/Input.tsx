import styles from './Input.module.scss';
import { InputType } from '../../enums';

// components
import LocationIcon from '../icons/LocationIcon';
import SearchIcon from '../icons/SearchIcon';
import { JobData } from '../../types';
import { useState } from 'react';
import { FilterSettings } from '../../interfaces';

interface InputProps {
   placeholder?: string;
   inputType: InputType;
   offers: JobData[];
   filterSettings: FilterSettings;
   handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
   const filterSettings = props.filterSettings;
   const inputValue =
      props.inputType === InputType.Search ? filterSettings.nameString : filterSettings.locationString;

   const [isFocused, setIsFocused] = useState(false);

   //this is the function where we'd add arrow control for the tooltip, but that's not a part of task at hand
   const handleKeyPress = (event: React.KeyboardEventHandler<HTMLInputElement> | undefined) => {
      if (event?.key === 'Enter' || event?.key === 'Escape') {
         setIsFocused(false);
      }
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
      setIsFocused(false);
   }

   function handleMouseEnter(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target.style.backgroundColor = 'var(--color-gray-lightest)';
   }

   function handleMouseLeave(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target.style.backgroundColor = 'var(--color-white)';
   }

   return (
      <div className={styles.wrapper}>
         <input
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            name={props.inputType}
            onInput={props.handleInput}
            value={inputValue}
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
         />
         {props.inputType === InputType.Search ? (
            <SearchIcon className={styles.icon} />
         ) : (
            <LocationIcon className={styles.icon} />
         )}
         {isFocused &&
            inputValue.trim() &&
            props.offers.map((offer, offerIndex) => (
               <div
                  className={styles.searchResult}
                  style={{ top: `${offerIndex * 50 + 52}px` }}
                  key={offerIndex}
                  onMouseDown={() => handleClick(offer.title)}
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
