import styles from './JobOffersScreen.module.scss';
import { JobData } from '../../types';

// components
import JobOffersList from './JobOffersList';
import Input from '../UI/Input';

interface JobOffersProps {
   offers: JobData[];
}

const JobOffersScreen = (props: JobOffersProps) => {
   return (
      <section className={styles.screen}>
         <form className={styles.form}>
            <Input icon="search" placeholder="Search for" />
            <Input icon="location" placeholder="Search location" />
         </form>
         <JobOffersList offers={props.offers} />
      </section>
   );
};

export default JobOffersScreen;
