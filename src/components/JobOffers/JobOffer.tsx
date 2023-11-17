import styles from './JobOffer.module.scss';

// helpers
import { formatTimeDifference } from '../../helpers/formatTimeDifference';

interface JobOfferProps {
   jobData: {
      _id: string;
      title: string;
      companyName: string;
      city: string;
      country: string;
      workLocation: string;
      jobType: string;
      seniority: string;
      salaryFrom: number;
      salaryTo: number;
      currency: string;
      technologies: string[];
      description: string;
      offerUrl: string;
      __v: number;
      createdAt: string;
      updatedAt: string;
      image: string;
   };
}

const JobOffer = (props: JobOfferProps) => {
   const salaryFromFormatted = props.jobData.salaryFrom
      .toLocaleString('en-US', { useGrouping: true })
      .replace(/,/g, ' ');

   const salaryToFormatted = props.jobData.salaryTo
      .toLocaleString('en-US', { useGrouping: true })
      .replace(/,/g, ' ');

   const createdAtFormatted = formatTimeDifference(props.jobData.createdAt);
   return (
      <li className={styles.jobItem}>
         <div className={styles.jobContent}>
            <div className={styles.imageContainer}>
               <img src={props.jobData.image} />
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
   );
};

export default JobOffer;
