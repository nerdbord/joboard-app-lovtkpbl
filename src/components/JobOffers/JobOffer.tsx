import styles from './JobOffer.module.scss';
import jobImage from '../../../public/jobavatar.png';

interface JobOfferProps {}

const JobOffer = (props: JobOfferProps) => {
   return (
      <li className={styles.jobItem}>
         <div className={styles.jobContent}>
            <div className={styles.imageContainer}>
               <img src={jobImage} />
            </div>
            <div>
               <h3 className={styles.jobTitle}>Infrastructure Architect</h3>
               <div className={styles.jobDetails}>
                  <span className={styles.jobDetail}>GOPro</span>
                  <span className={styles.jobDetail}>Barcelona, Spain</span>
                  <span className={styles.jobDetail}>Fully Remote</span>
                  <span className={styles.jobDetail}>Senior</span>
                  <span className={`${styles.jobDetail} ${styles.jobSalary}`}>
                     10 000 - 18 000 PLN net
                  </span>
               </div>
            </div>
         </div>
         <span>4 days ago</span>
      </li>
   );
};

export default JobOffer;
