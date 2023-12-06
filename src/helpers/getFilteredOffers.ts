import { useState } from 'react';
import { FilterSettings } from '../interfaces';
import { JobData } from '../types';
import { getFilterGroup } from './getFilterGroup';
import { getFilterText } from './getFilterText';

export function getFilteredOffers(offers: JobData[] | undefined, filterSettings: FilterSettings) {
   const filteredOffers = offers?.filter((offer) => {
      const nameRegex = new RegExp(filterSettings.nameString.trim(), 'i');
      const locationRegex = new RegExp(filterSettings.locationString.trim(), 'i');

      let filterToggle = true;
      /**
       *  i tried using a useState instead of a let variable here, but it crashed the app...
       * 
       *  Michal came up with an idea to use a reducer method instead of a filter in this,
       *  but after some attemts all i managed to get was a couple of type errors :) 
       * 
       *    I'm still not fully convinced that using a 'let' here is any problem though,
       *    and I'm kinda proud of this helper function anyway, because it was a nice puzzle to solve.
       */

      if (filterSettings.salary! > offer.salaryTo) {
         filterToggle = false;
      }

      if (!nameRegex.test(offer.title)) {
         filterToggle = false;
      }

      if (!locationRegex.test(`${offer.city}, ${offer.country}`)) {
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
