import styles from './JobOffersScreen.module.scss';
import { IconType } from '../../enums';
import useFindJobOffers from '../../data/job-offer/queries/useFindJobOffers';
import { Filter } from '../../types';

// components
import JobOffersList from './JobOffersList';
import Input from '../UI/Input';
import Loader from '../UI/Loader';

const initialFilterSettings: Filter = {
   fullTime: false,
   partTime: false,
   contract: false,
   freelance: false,
   lead: false,
   expert: false,
   senior: false,
   midRegular: false,
   junior: true,
   intern: false,
   remote: false,
   partRemote: false,
   onSite: false,
   salary: 0,
};

interface JobOffersProps {}

const JobOffersScreen = (props: JobOffersProps) => {
   const { data, error, isFetching, isPending } = useFindJobOffers(initialFilterSettings);

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
               <Loader />
            ) : error ? (
               <span>Error: {error.message}</span>
            ) : (
               <>
                  {/* this is just for debugging i guess */}
                  {isFetching && <span>Background Updating...</span>}

                  <JobOffersList offers={data || []} />
               </>
            )}
         </section>
      </section>
   );
};

export default JobOffersScreen;
