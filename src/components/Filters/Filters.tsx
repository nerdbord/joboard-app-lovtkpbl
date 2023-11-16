import React, { useState } from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



interface FiltersProps {}


const Filters = (props: FiltersProps) => {

   

   return (
      <div className={styles.filtersTopWrap}>
         <div className={styles.filtersBlock}>
            <div className={styles.filtersTitle}>Filter offers</div>
            <button>clear filters placeholder</button>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.blockTitle}>Job type</div>
            <div className={styles.blockGrid}>
               <Checkbox text="Full-time" />
               <Checkbox text="Part-time" />
               <Checkbox text="Contract" />
               <Checkbox text="Freelance" />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.blockTitle}>Seniority</div>
            <div className={styles.blockGrid}>
               <Checkbox text="Lead" />
               <Checkbox text="Expert" />
               <Checkbox text="Senior" />
               <Checkbox text="Mid/Regular" />
               <Checkbox text="Junior" />
               <Checkbox text="Intern" />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.blockTitle}>Location</div>
            <div className={styles.blockGrid}>
               <Checkbox text="Remote" />
               <Checkbox text="Part-remote" />
               <Checkbox text="On-site" />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.blockTitle}>Salary (min.)</div>
            <Slider />
         </div>
      </div>
   );
};

export default Filters;
