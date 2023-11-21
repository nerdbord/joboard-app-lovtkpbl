import { createContext } from 'react';
import { FilterSettings } from '../../enumFaces/interfaces';

interface FilterContextType {
   filterSettings: FilterSettings;
   setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>;
}

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
   salary: 0,
};

export const FilterContext = createContext<FilterContextType>({
   filterSettings: initialFilterSettings,
   setFilterSettings: () => {},
});
