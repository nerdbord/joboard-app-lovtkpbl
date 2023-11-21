import { QueryKey, useQuery } from '@tanstack/react-query';
import { JobData } from '../../../types';

export const jobOffersQueryKey = ['/offers'];

const useFindJobOffers = (queryKey: QueryKey) => {
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData[]>({
      queryKey: queryKey,
   });
   return { data, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOffers;
