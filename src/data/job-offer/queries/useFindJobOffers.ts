import { useQuery } from '@tanstack/react-query';
import { Filter, JobData } from '../../../types';

const useFindJobOffers = (filterOptions: Filter) => {
   const queryKey = ['/offers', filterOptions];
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData[]>({
      queryKey,
   });

   // use filter options here to return the exact data you want

   return { data, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOffers;
