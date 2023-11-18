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
            {props.offers.map((offer) => (
               <JobOffer key={offer._id} jobData={offer} />
            ))}
         </ul>
      </>
   );
};

export default JobOffersList;