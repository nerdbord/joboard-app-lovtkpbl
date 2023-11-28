import styles from './JobOffersScreen.module.scss';
import { InputType } from '../../enums';
import useFindJobOffers from '../../data/job-offer/queries/useFindJobOffers';

// components
import JobOffersList from './JobOffersList';
import Input from '../UI/Input';
import Loader from '../UI/Loader';
import { useFilter } from '../Filters/FilterContext';

interface JobOffersProps {}

const JobOffersScreen = (props: JobOffersProps) => {
   const filterSettings = useFilter()
   const { data, error, isFetching, isPending } = useFindJobOffers();

   return (
      <section className={styles.screen}>
         <section>
            <form className={styles.form}>
               <Input type={InputType.Search} placeholder="Search for" offers={data || []} />
               <Input type={InputType.Location} placeholder="Search location" offers={data || []} />
            </form>
         </section>
         <section className={styles.text}>
            {`${data?.length ? data?.length : '0'} offers found`}
            {filterSettings.nameString.trim() && ` for "${filterSettings.nameString}"`}
            {filterSettings.locationString.trim() && ` in "${filterSettings.locationString}"`}
         </section>
         <section>
            {isPending ? (
               <Loader />
            ) : error ? (
               <span>Error: {error.message}</span>
            ) : (
               <>
                  {/* this is just for debugging i guess */}
                  {isFetching ? (
                     <span>Background Updating...</span>
                  ) : (
                     <JobOffersList offers={data || []} />
                  )}
               </>
            )}
         </section>
      </section>
   );
};

export default JobOffersScreen;
