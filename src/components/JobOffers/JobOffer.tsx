import styles from './JobOffer.module.scss';
import { useState } from 'react';
import { JobData } from '../../types';

// helpers
import { formatTimeDifference } from '../../helpers/formatTimeDifference';

// components
import JobOfferPreview from '../JobOfferPreview/JobOfferPreview';

interface JobOfferProps {
   jobData: JobData;
}

const JobOffer = (props: JobOfferProps) => {
   const [JobOfferPreviewIsShown, setJobOfferPreviewIsShown] = useState(false);

   const salaryFromFormatted = props.jobData.salaryFrom
      .toLocaleString('en-US', { useGrouping: true })
      .replace(/,/g, ' ');

   const salaryToFormatted = props.jobData.salaryTo
      .toLocaleString('en-US', { useGrouping: true })
      .replace(/,/g, ' ');

   const createdAtFormatted = formatTimeDifference(props.jobData.createdAt);

   const showJobOfferPreviewHandler = () => {
      setJobOfferPreviewIsShown(true);
   };

   const hideJobOfferPreviewHandler = () => {
      setJobOfferPreviewIsShown(false);
   };
   return (
      <>
         {JobOfferPreviewIsShown && (
            <JobOfferPreview offerId={props.jobData._id} onClose={hideJobOfferPreviewHandler} />
         )}

         <li className={styles.jobItem} onClick={showJobOfferPreviewHandler}>
            <div className={styles.jobContent}>
               <div className={styles.imageContainer}>
                  <img src={props.jobData.image} alt={props.jobData.companyName} />
               </div>
               <div>
                  <h3 className={styles.jobTitle}>{props.jobData.title}</h3>
                  <div className={styles.jobDetails}>
                     <span className={styles.jobDetail}>{props.jobData.companyName}</span>
                     <span
                        className={styles.jobDetail}
                     >{`${props.jobData.city}, ${props.jobData.country}`}</span>
                     <span className={styles.jobDetail}>{props.jobData.workLocation}</span>
                     <span className={styles.jobDetail}>{props.jobData.seniority}</span>
                     <span className={`${styles.jobDetail} ${styles.jobSalary}`}>
                        {`${salaryFromFormatted} - ${salaryToFormatted} ${props.jobData.currency} net`}
                     </span>
                  </div>
               </div>
            </div>
            <span>{createdAtFormatted}</span>
         </li>
      </>
   );
};

export default JobOffer;
