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
   handleClickAutocomplete: (searchString: string, inputType: InputType) => void;
}

const Input: React.FC<InputProps> = (props) => {
   const filterSettings = props.filterSettings;
   const inputValue =
      props.inputType === InputType.Search
         ? filterSettings.nameString
         : filterSettings.locationString;

   const [isFocused, setIsFocused] = useState(false);

   //this function creates the highlight effect on the autocomplete string
   const renderHighlightedResult = (result: string): React.ReactNode => {
      const trimmedInput = inputValue.trim();
      if (!trimmedInput) {
         return result;
      }

      //leading/trailing whitespaces apparently are lost in basic HTML, so we have to replace them with a different character
      const inputRegex = new RegExp(`(${trimmedInput.replaceAll(' ', '\u00A0')})`, 'ig');
      const titleParts = result.replaceAll(' ', '\u00A0').split(inputRegex);

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

   function internalInputHandler(event: React.ChangeEvent<HTMLInputElement>) {      
      props.handleInput(event);
   }

   function keyPressHandler(event: React.KeyboardEvent<HTMLInputElement>){
      if (event.key == "Enter" || event.key == "Excape") {
         setIsFocused(false)
      }
   }

   function onClickHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
      setIsFocused(true)
   }

   function internalClickAutocompleteHandler(searchString: string, inputType: InputType) {
      props.handleClickAutocomplete(searchString, inputType);
   }

   function handleMouseEnterAutocomplete(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target instanceof HTMLElement &&
         (event.target.style.backgroundColor = 'var(--color-gray-lightest)');
   }

   function handleMouseLeaveAutocomplete(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
      event.target instanceof HTMLElement &&
         (event.target.style.backgroundColor = 'var(--color-white)');
   }

   return (
      <div className={styles.wrapper}>
         <input
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            name={props.inputType}
            onInput={internalInputHandler}
            value={inputValue}
            autoComplete="off"
            onKeyDown={keyPressHandler}
            onClick={onClickHandler}
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
            props.offers.map((offer, offerIndex) => {
               const displayString =
                  props.inputType === InputType.Search
                     ? offer.title
                     : `${offer.city}, ${offer.country}`;
               return (
                  <div
                     className={styles.searchResult}
                     style={{ top: `${offerIndex * 50 + 52}px` }}
                     key={offerIndex}
                     onMouseDown={() =>
                        internalClickAutocompleteHandler(displayString, props.inputType)
                     }
                     onMouseEnter={handleMouseEnterAutocomplete}
                     onMouseLeave={handleMouseLeaveAutocomplete}
                  >
                     {renderHighlightedResult(displayString)}
                     <div className={styles.companyStyle}>{offer.companyName}</div>
                  </div>
               );
            })}
      </div>
   );
};

export default Input;
