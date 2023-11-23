import { useQuery } from '@tanstack/react-query';
import { Filter, JobData } from '../../../types';

const useFindJobOffers = () => {
   const queryKey = ['/offers'];
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData[]>({
      queryKey,
   });

   // use filter options here to return the exact data you want
   const filteredData = data?.filter((offer) => {
      //  TODO filtering
      return true;
   });

   return { data: filteredData, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOffers;
