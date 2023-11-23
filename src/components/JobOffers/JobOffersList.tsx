import styles from './JobOffersList.module.scss';
import { JobData } from '../../types';

// components
import JobOffer from './JobOffer';
import { getFilteredOffers } from '../../helpers/getFilteredOffers';
import { useFilter } from '../Filters/FilterContext';


interface JobOffersListProps {
   offers: JobData[];
}

const JobOffersList = (props: JobOffersListProps) => {

   const filterSettings = useFilter()
   const filteredOffers = getFilteredOffers(props.offers, filterSettings)

   return (
      <>
         <p className={styles.text}>{`${filteredOffers.length} offers found`}</p>
         <ul className={styles.jobList} role="list">
            {filteredOffers.map((offer) => (
               <JobOffer key={offer._id} jobData={offer} />
            ))}
         </ul>
      </>
   );
};

export default JobOffersList;
