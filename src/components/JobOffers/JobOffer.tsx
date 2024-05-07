import styles from './JobOffer.module.scss';
import { useState } from 'react';
import { JobData } from '../../types';

// helpers
import { formatTimeDifference } from '../../helpers/formatTimeDifference';

// components
import JobOfferPreview from '../JobOfferPreview/JobOfferPreview';
import classNames from 'classnames';
import useIsSmallScreen from '../../hooks/useSmallScreen';

interface JobOfferProps {
   jobData: JobData;
}

const JobOffer = (props: JobOfferProps) => {
   const isSmallScreen = useIsSmallScreen(768); // this should be changed with breakpoint in css
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

         {!isSmallScreen && (
            <li className={styles.jobItem} onClick={showJobOfferPreviewHandler}>
               <div className={styles.jobContent} data-testid={`jobOffer-${props.jobData._id}`}>
                  <div className={styles.imageContainer}>
                     <img src={props.jobData.image} alt={props.jobData.companyName} />
                  </div>
                  <div>
                     <h3 className={styles.jobTitle}>{props.jobData.title}</h3>
                     <div className={styles.jobDetails}>
                        <div className={styles.topDetails}>
                           <span
                              className={classNames(
                                 styles.jobDetail,
                                 styles.jobDetailFirst,
                                 styles.darkColor,
                              )}
                           >
                              {props.jobData.companyName}
                           </span>
                           <span
                              className={styles.jobDetail}
                           >{`${props.jobData.city}, ${props.jobData.country}`}</span>
                        </div>
                        <div className={styles.middleDetails}>
                           <span className={styles.jobDetail}>{props.jobData.workLocation}</span>
                           <span className={styles.jobDetail}>{props.jobData.seniority}</span>
                        </div>
                        <div className={styles.bottomDetails}>
                           <span className={`${styles.jobDetail} ${styles.jobSalary}`}>
                              {`${salaryFromFormatted} - ${salaryToFormatted} ${props.jobData.currency} net`}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <span className={styles.alignRight}>{createdAtFormatted}</span>
            </li>
         )}

         {isSmallScreen && (
            <li className={styles.jobItem} onClick={showJobOfferPreviewHandler}>
               <h3 className={styles.jobTitle}>{props.jobData.title}</h3>
               <div className={styles.jobContent}>
                  <div className={styles.imageContainer}>
                     <img src={props.jobData.image} alt={props.jobData.companyName} />
                  </div>
                  <div className={styles.jobDetails}>
                     <div className={styles.jobDetailsMobile}>
                        <span className={classNames(styles.jobDetail, styles.darkColor)}>
                           {props.jobData.companyName}
                        </span>
                        <span
                           className={styles.jobDetail}
                        >{`${props.jobData.city}, ${props.jobData.country}`}</span>
                     </div>
                     <div className={styles.jobDetailsMobile}>
                        <span className={styles.jobDetail}>{props.jobData.seniority}</span>
                        <span className={styles.jobDetail}>{props.jobData.workLocation}</span>
                     </div>
                  </div>
               </div>
               <div className={styles.bottomWrapperMobile}>
                  <span className={styles.jobSalary}>
                     {`${salaryFromFormatted} - ${salaryToFormatted} ${props.jobData.currency} net`}
                  </span>
                  <span className={styles.alignRight}>{createdAtFormatted}</span>
               </div>
            </li>
         )}
      </>
   );
};

export default JobOffer;
