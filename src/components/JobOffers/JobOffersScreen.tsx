import styles from './JobOffersScreen.module.scss';
import { JobData } from '../../types';
import { IconType } from '../../enums';

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
            <Input icon={IconType.Search} placeholder="Search for" />
            <Input icon={IconType.Location} placeholder="Search location" />
         </form>
         <JobOffersList offers={props.offers} />
      </section>
   );
};

export default JobOffersScreen;
