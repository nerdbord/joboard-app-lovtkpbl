import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
   children: ReactNode;
}

export const Container: React.FC<ContainerProps> = (props) => (
   <div className={styles.container}>{props.children}</div>
);
