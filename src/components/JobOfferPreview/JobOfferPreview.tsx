import styles from './JobOfferPreview.module.scss';

// components
import Modal from '../UI/Modal';

interface JobOfferPreviewProps {
   onClose: () => void;
}

const JobOfferPreview = (props: JobOfferPreviewProps) => {
   return (
      <Modal onClose={props.onClose}>
         <section className={styles.header}>
            <div className={styles.imageContainer}>
               <img src="https://i.imgur.com/yaKYWeN.png" alt="jobtitle" />
            </div>
            <div className={styles.headerText}>
               <h4>Java Developer | Greenfield, Microservices</h4>
               <span>JAVASCRIPT・NEST・TYPESCRIPT・REACT</span>
            </div>
         </section>

         {/* <section>
            <section>
               <h5>Transportation System Support IT Specialist (Core IT Team)</h5>
               <article></article>
            </section>
            <section></section>
         </section> */}
      </Modal>
   );
};

export default JobOfferPreview;
