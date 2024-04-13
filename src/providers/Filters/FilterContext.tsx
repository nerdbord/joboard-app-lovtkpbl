import { createContext, useContext, useState } from 'react';
import { FilterSettings } from '../../interfaces';
import { FilterTypes } from '../../enums';

export const initialFilterSettings: FilterSettings = {
   fullTime: false,
   partTime: false,
   contract: false,
   freelance: false,
   lead: false,
   expert: false,
   senior: false,
   midRegular: false,
   junior: false,
   intern: false,
   remote: false,
   partRemote: false,
   onSite: false,
   nameString: '',
   locationString: '',
   salary: 0,
};

const FilterContext = createContext<FilterSettings>(initialFilterSettings);
const FilterUpdateContext = createContext(
   (option: FilterTypes, value?: number | string | undefined) => {},
);
const FilterResetContext = createContext(() => {});

export function useFilter() {
   return useContext(FilterContext);
}

export function useFilterUpdate() {
   return useContext(FilterUpdateContext);
}

export function useFilterReset() {
   return useContext(FilterResetContext);
}

export function FiltersProvider({ children }: { children: React.ReactNode }) {
   const [filterSettings, setFilterSettings] = useState<FilterSettings>(initialFilterSettings);

   function updateFilterSettings(
      field: FilterTypes,
      value?: number | string | boolean | undefined,
   ) {
      setFilterSettings((prevState: FilterSettings) => {
         if (value === undefined && typeof prevState[field] === 'boolean') {
            // Toggle boolean values
            return { ...prevState, [field]: !prevState[field] };
         } else if (field === FilterTypes.salary && typeof value === 'number') {
            // Update salary if the field is salary and the value is a number
            return { ...prevState, salary: value };
         } else if (
            (field === FilterTypes.nameString || field === FilterTypes.locationString) &&
            typeof value === 'string'
         ) {
            // Update nameString or locationString if the field is one of them and the value is a string
            return { ...prevState, [field]: value };
         } else {
            // Do nothing if none of the conditions are met
            return prevState;
         }
      });
   }

   function resetSettings() {
      setFilterSettings(initialFilterSettings);
   }

   return (
      <FilterContext.Provider value={filterSettings}>
         <FilterUpdateContext.Provider value={updateFilterSettings}>
            <FilterResetContext.Provider value={resetSettings}>
               {children}
            </FilterResetContext.Provider>
         </FilterUpdateContext.Provider>
      </FilterContext.Provider>
   );
}
