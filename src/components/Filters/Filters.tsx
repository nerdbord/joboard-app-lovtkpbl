import React, { useState } from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';
import Checkbox from './Checkbox';
import Slider from './Slider';
import Button from './Button';
import { ButtonType } from '../../enumFaces/enums';



interface FiltersProps {}


const Filters = (props: FiltersProps) => {


   const topBlock = classNames(styles.filtersBlock, styles.topBlock)   

   const sliderBlock = classNames(styles.filtersBlock, styles.sliderBlock)

   const handleClearFilters = () => {
      //TBI
   }

   return (
      <div className={styles.filtersTopWrap}>
         <div className={topBlock}>
            <div className={styles.filtersTitle}>Filter offers</div>
            <Button type={ButtonType.Text} onClick={handleClearFilters}>Clear filters</Button>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Job type</div>
            <div className={styles.blockGrid}>
               <Checkbox text="Full-time" />
               <Checkbox text="Part-time" />
               <Checkbox text="Contract" />
               <Checkbox text="Freelance" />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Seniority</div>
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
            <div className={styles.titleOfBlock}>Location</div>
            <div className={styles.blockGrid}>
               <Checkbox text="Remote" />
               <Checkbox text="Part-remote" />
               <Checkbox text="On-site" />
            </div>
         </div>
         <div className={sliderBlock}>
            <div className={styles.titleOfBlock}>Salary (min.)</div>
            <Slider min={10000} max={100000}/>
         </div>
      </div>
   );
};

export default Filters;
