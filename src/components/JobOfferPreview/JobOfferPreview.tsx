import styles from './JobOfferPreview.module.scss';
import classNames from 'classnames';
import { ButtonType } from '../../enums';
import { JobData } from '../../types';
import useFindJobOfferDetails from '../../data/job-offer/queries/useFindJobOfferDetails';
import { formatTimeDifference } from '../../helpers/formatTimeDifference';

// components
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import Loader from '../UI/Loader';

interface JobOfferPreviewProps {
   onClose: () => void;
   offerId: JobData['_id'];
}

const JobOfferPreview = (props: JobOfferPreviewProps) => {
   const { data, error, isPending } = useFindJobOfferDetails(props.offerId);

   const salaryFromFormatted =
      data && data.salaryFrom.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ');

   const salaryToFormatted =
      data && data.salaryTo.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, ' ');

   return (
      <Modal onClose={props.onClose}>
         {isPending ? (
            <Loader />
         ) : error ? (
            <span>Error: {error.message}</span>
         ) : (
            data && (
               <>
                  {/* <Loader /> */}
                  <section className={styles.headerSection}>
                     <div className={styles.imageContainer}>
                        <img src={data.image} alt={data.title} />
                     </div>
                     <div className={styles.headerText}>
                        <h4>{data.title}</h4>
                        <span>{data.technologies.join('・')}</span>
                     </div>
                  </section>

                  <section className={styles.detailsSection}>
                     <div className={styles.descriptionBox}>
                        <section
                           className={classNames(styles.sectionBg, styles.descriptionSection)}
                        >
                           <h5>{data.title}</h5>
                           <article className={styles.jobDescription}>{data.description}</article>
                        </section>
                     </div>
                     <section className={styles.infoSection}>
                        <section className={classNames(styles.sectionBg, styles.btnSection)}>
                           <Button
                              type={ButtonType.Primary}
                              className={styles.button}
                              onClick={() => {
                                 window.location.href = data.offerUrl;
                              }}
                           >
                              Visit offer ➔
                           </Button>
                        </section>
                        <ul className={classNames(styles.sectionBg, styles.infoList)}>
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Added</h6>
                              <span className={styles.infoItemValue}>
                                 {formatTimeDifference(data.createdAt)}
                              </span>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Company</h6>
                              <span className={styles.infoItemValue}>{data.companyName}</span>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Seniority</h6>
                              <span className={styles.infoItemValue}>{data.seniority}</span>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Location</h6>
                              <div>
                                 <p className={styles.infoItemValue}>{data.city},</p>
                                 <p className={styles.infoItemValue}>{data.country}</p>
                              </div>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Job type</h6>
                              <span className={styles.infoItemValue}>{data.workLocation}</span>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Contract</h6>
                              <span className={styles.infoItemValue}>{data.jobType}</span>
                           </li>
                           <hr />
                           <li className={styles.infoItem}>
                              <h6 className={styles.infoItemTitle}>Salary</h6>
                              <span className={styles.infoItemValue}>
                                 {' '}
                                 {`${salaryFromFormatted} - ${salaryToFormatted} ${data.currency} net`}
                              </span>
                           </li>
                        </ul>
                     </section>
                  </section>
               </>
            )
         )}
      </Modal>
   );
};

export default JobOfferPreview;
