import { FilterSettings } from '../interfaces';
import { JobData } from '../types';
import { getFilterGroup } from './getFilterGroup';
import { getFilterText } from './getFilterText';

export function getFilteredOffers(offers: JobData[] | undefined, filterSettings: FilterSettings) {
   const filteredOffers = offers?.filter((offer) => {

      let filterToggle = true;
      //i mean filterToggle could be a useState() but this is just callback function in a filter method so everything should be fine maybe?

      if (filterSettings.salary! > offer.salaryTo) {
         filterToggle = false;
      }

      for (const filterType in filterSettings) {
         const filterTypeName = getFilterText(filterType);
         const filterGroupKey = getFilterGroup(filterType);
         const filterTypeValue = filterSettings[filterType];

         if (!filterTypeValue && offer[filterGroupKey] == filterTypeName) {
            filterToggle = false;
         }
      }

      return filterToggle;
   });

   return filteredOffers;
}
