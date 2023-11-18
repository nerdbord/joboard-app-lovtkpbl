import styles from './JobOffersList.module.scss';
import { JobData } from '../../types';

// components
import JobOffer from './JobOffer';

interface JobOffersListProps {
   offers: JobData[];
}

const JobOffersList = (props: JobOffersListProps) => {
   return (
      <>
         <p className={styles.text}>{`${props.offers.length} offers found`}</p>
         <ul className={styles.jobList}>
            <JobOffer jobData={props.offers[0]} />
            <JobOffer jobData={props.offers[1]} />
         </ul>
      </>
   );
};

export default JobOffersList;
