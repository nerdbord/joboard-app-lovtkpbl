import { QueryKey } from '@tanstack/query-core';
import { JobData } from './types';

export async function fetchJobOffers({ queryKey }: { queryKey: QueryKey }) {
   const API_ENDPOINT = `https://training.nerdbord.io/api/v1/joboard${queryKey[0]}`;

   try {
      const response = await fetch(API_ENDPOINT, {
         headers: {
            'Content-Type': 'application/json',
         },
      });

      if (!response.ok) {
         throw new Error('Failed to fetch job offers');
      }

      const data = await response.json();

      const APIoffers = data.map((APIoffer: JobData) => {
         return {
            _id: APIoffer._id,
            title: APIoffer.title,
            companyName: APIoffer.companyName,
            city: APIoffer.city,
            country: APIoffer.country,
            workLocation: APIoffer.workLocation,
            jobType: APIoffer.jobType,
            seniority: APIoffer.seniority,
            salaryFrom: APIoffer.salaryFrom,
            salaryTo: APIoffer.salaryTo,
            currency: APIoffer.currency,
            technologies: APIoffer.technologies,
            description: APIoffer.description,
            offerUrl: APIoffer.offerUrl,
            createdAt: APIoffer.createdAt,
            updatedAt: APIoffer.updatedAt,
            image: APIoffer.image,
         };
      });
      return APIoffers;
   } catch (error) {
      if (error instanceof Error) {
         throw new Error('Error fetching job offers: ' + error.message);
      } else {
         throw new Error('Unknown error fetching job offers');
      }
   }
}

export default fetchJobOffers;
