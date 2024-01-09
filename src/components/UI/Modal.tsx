import ReactDOM from 'react-dom';
import { PropsWithChildren, ReactNode } from 'react';
import styles from './Modal.module.scss';

// components
import CloseIcon from '../icons/CloseIcon';

const Backdrop = (props: { onClose: () => void }) => {
   return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: PropsWithChildren) => {
   return <div className={styles.modal}>{props.children}</div>;
};

const Modal = (props: { onClose: () => void; children: ReactNode }) => {
   const portalElement = document.getElementById('overlays') as HTMLDivElement;
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
