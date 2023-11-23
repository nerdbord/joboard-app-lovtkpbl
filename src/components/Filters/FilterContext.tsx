import { createContext, useContext, useState } from 'react';
import { FilterSettings } from '../../enumFaces/interfaces';
import { FilterTypes } from '../../enumFaces/enums';

export const initialFilterSettings: FilterSettings = {
   fullTime: true,
   partTime: true,
   contract: true,
   freelance: true,
   lead: true,
   expert: true,
   senior: true,
   midRegular: true,
   junior: true,
   intern: true,
   remote: true,
   partRemote: true,
   onSite: true,
   salary: 10000,
};

const FilterContext = createContext<FilterSettings>(initialFilterSettings);
const FilterUpdateContext = createContext((option: FilterTypes, value?: number | undefined) => {});
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

   function updateSettings(option: FilterTypes, value?: number) {
      if (value && option === FilterTypes.salary) {
         setFilterSettings((prevState) => ({
            ...prevState,
            [option]: value,
         }));
      } else {
         setFilterSettings((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
         }));
      }
   }

   function resetSettings() {
      setFilterSettings(initialFilterSettings)
   }

   return (
      <FilterContext.Provider value={filterSettings}>
         <FilterUpdateContext.Provider value={updateSettings}>
            <FilterResetContext.Provider value={resetSettings}>
               {children}
            </FilterResetContext.Provider>
         </FilterUpdateContext.Provider>
      </FilterContext.Provider>
   );
}
