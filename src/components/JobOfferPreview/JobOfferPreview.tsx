import styles from './JobOfferPreview.module.scss';

// components
import Modal from '../UI/Modal';

interface JobOfferPreviewProps {
   onClose: () => void;
}

const JobOfferPreview = (props: JobOfferPreviewProps) => {
   return <Modal onClose={props.onClose}>JobOfferPreview</Modal>;
};

export default JobOfferPreview;
