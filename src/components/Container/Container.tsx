import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
   children: ReactNode;
}

const Container = (props: ContainerProps) => (
   <div className={styles.container}>{props.children}</div>
);

export default Container;
