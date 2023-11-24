import { FilterSettings } from '../interfaces';
import { JobData } from '../types';
import { getFilterText } from './getFilterText';
import { getGroupedFilters } from './getGroupedFilters';

export function getFilteredOffers(offers: JobData[] | undefined, filterSettings: FilterSettings) {
   const filteredOffers = offers?.filter((offer, i, a) => {
      const groupedFilters = getGroupedFilters(filterSettings);
      const filterSalary = filterSettings.salary;

      let filterToggle = false;

      if (filterSalary <= offer.salaryTo) {
         filterToggle = true;
      }

      for (const seniority in groupedFilters.seniority) {
         const stringName = getFilterText(seniority);
         //this line is giving me a type error, but im sure i can fix it
         const filterTypeValue = groupedFilters.seniority[seniority];

         if (!filterTypeValue && offer.seniority == stringName) {
            filterToggle = false;
         }
      }

      for (const jobType in groupedFilters.jobType) {
         const stringName = getFilterText(jobType);
         const filterTypeValue = groupedFilters.jobType[jobType];

         if (!filterTypeValue && offer.jobType == stringName) {
            filterToggle = false;
         }
      }

      for (const location in groupedFilters.location) {
         const stringName = getFilterText(location);
         const filterTypeValue = groupedFilters.location[location];

         if (!filterTypeValue && offer.workLocation == stringName) {
            filterToggle = false;
         }
      }

      return filterToggle;
   });

   return filteredOffers;
}
