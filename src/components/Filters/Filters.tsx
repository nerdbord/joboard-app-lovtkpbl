import React, { useState } from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';
import Checkbox from './Checkbox';

interface FiltersProps {
   
}

const Filters = (props: FiltersProps) => {
   
   return (
      <div className={styles.filtersTopWrap}>
         <Checkbox text={'Temporary text'} />
         <Checkbox text={'Temporary text2'} />
      </div>
   );
};

export default Filters;
