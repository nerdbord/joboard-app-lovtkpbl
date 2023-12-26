import ReactDOM from 'react-dom';
import { PropsWithChildren, ReactNode } from 'react';
import styles from './Modal.module.scss';

// components
import CloseIcon from '../icons/CloseIcon';
import useIsSmallScreen from '../../hooks/useSmallScreen';

const Backdrop = (props: { onClose: () => void }) => {
   return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: PropsWithChildren) => {
   const isSmallScreen = useIsSmallScreen(768)
   return <div className={isSmallScreen ? styles.modalSmall : styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById('overlays') as HTMLDivElement;

const Modal = (props: { onClose: () => void; children: ReactNode }) => {
   return (
      <>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
         {ReactDOM.createPortal(
            <ModalOverlay>
               <CloseIcon className={styles.closeIcon} onClick={props.onClose} />
               {props.children}
            </ModalOverlay>,
            portalElement,
         )}
      </>
   );
};

export default Modal;
