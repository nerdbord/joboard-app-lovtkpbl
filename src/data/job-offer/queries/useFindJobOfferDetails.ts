import { useQuery } from '@tanstack/react-query';
import { JobData } from '../../../types';

const useFindJobOfferDetails = (id: JobData['_id']) => {
   const queryKey = [`/offers/${id}`];
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData>({
      queryKey,
   });

   return { data, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOfferDetails;
