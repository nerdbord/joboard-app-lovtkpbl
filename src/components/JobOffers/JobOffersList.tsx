import styles from './JobOffersList.module.scss';
import { JobData } from '../../types';

// components
import JobOffer from './JobOffer';

interface JobOffersListProps {
   offers: JobData[];
}

const JobOffersList = (props: JobOffersListProps) => {
   return (
      <ul className={styles.jobList} role="list">
         {/* {props.offers.map((offer) => (
            <JobOffer key={offer._id} jobData={offer} />
         ))} */}
      </ul>
   );
};

export default JobOffersList;
