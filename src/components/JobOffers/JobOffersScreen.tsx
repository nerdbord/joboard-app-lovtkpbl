import styles from './JobOffersScreen.module.scss';
import { IconType } from '../../enums';
import { useQuery } from '@tanstack/react-query';
import fetchJobOffers from '../../helpers/api';

// components
import JobOffersList from './JobOffersList';
import Input from '../UI/Input';

interface JobOffersProps {}

const JobOffersScreen = (props: JobOffersProps) => {
   const { data, error, isFetching, isPending, isError } = useQuery({
      queryKey: ['jobOffers'],
      queryFn: fetchJobOffers,
   });
   return (
      <section className={styles.screen}>
         <section>
            <form className={styles.form}>
               <Input icon={IconType.Search} placeholder="Search for" />
               <Input icon={IconType.Location} placeholder="Search location" />
            </form>
         </section>
         <section>
            {isPending ? (
               'Loading...'
            ) : isError ? (
               <span>Error: {error.message}</span>
            ) : (
               <>
                  {/* this is just for debugging i guess */}
                  <div>{isFetching ? 'Background Updating...' : ' '}</div>

                  <JobOffersList offers={data} />
               </>
            )}
         </section>
      </section>
   );
};

export default JobOffersScreen;
