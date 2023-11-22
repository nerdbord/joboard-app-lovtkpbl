import { useQuery } from '@tanstack/react-query';
import { Filter, JobData } from '../../../types';

const useFindJobOffers = (filterOptions: Filter) => {
   const queryKey = ['/offers', filterOptions];
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData[]>({
      queryKey,
   });

   // use filter options here to return the exact data you want
   const filteredData = data?.filter((offer) => {
      return (
         (filterOptions.fullTime && offer.jobType === 'Full-time') ||
         (filterOptions.partTime && offer.jobType === 'Part Time') ||
         (filterOptions.contract && offer.jobType === 'Contract') ||
         (filterOptions.remote && offer.workLocation === 'Remote') ||
         (filterOptions.junior && offer.seniority === 'Junior')
         //  todo rest of filters
      );
   });

   return { data: filteredData, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOffers;
