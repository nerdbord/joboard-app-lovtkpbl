import { FilterSettings } from '../interfaces';

export function areAllBooleanFieldsFalse(filterSettings: FilterSettings): boolean {
   for (const filterType in filterSettings) {
      if (typeof filterSettings[filterType] === 'boolean' && filterSettings[filterType] === true) {
         return false;
      }
   }
   return true;
}
