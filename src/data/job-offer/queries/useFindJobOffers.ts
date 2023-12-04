import { useQuery } from '@tanstack/react-query';
import { JobData } from '../../../types';
import { useFilter } from '../../../providers/Filters/FilterContext';
import { getFilteredOffers } from '../../../helpers/getFilteredOffers';

const useFindJobOffers = () => {
   const filterSettings = useFilter();
   const queryKey = ['/offers'];
   const { data, error, isFetching, isPending, isError, refetch } = useQuery<JobData[]>({
      queryKey,
   });

   // use filter options here to return the exact data you want
   const filteredData = getFilteredOffers(data, filterSettings);
   // useFilterUpdate(FilterTypes.salary, );

   return { data: filteredData, error, isFetching, isPending, isError, refetch };
};

export default useFindJobOffers;
