import React, { useContext, useState } from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';
import Checkbox from '../UI/Checkbox';
import Slider from '../UI/Slider';
import Button from '../UI/Button';
import { ButtonType, FilterTypes } from '../../enumFaces/enums';
import { FilterSettings } from '../../enumFaces/interfaces';
import { initialFilterSettings, useFilter, useFilterReset, useFilterUpdate } from './FilterContext';




interface FiltersProps {

}


const Filters = (props: FiltersProps) => {
   const resetFilterSettings = useFilterReset()
   
   const topBlock = classNames(styles.filtersBlock, styles.topBlock)   

   const sliderBlock = classNames(styles.filtersBlock, styles.sliderBlock)



   return (
      <div className={styles.filtersTopWrap}>
         <div className={topBlock}>
            <div className={styles.filtersTitle}>Filter offers</div>
            <Button type={ButtonType.Text} onClick={resetFilterSettings}>Clear filters</Button>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Job type</div>
            <div className={styles.blockGrid}>
               <Checkbox option={FilterTypes.fullTime} />
               <Checkbox option={FilterTypes.partTime} />
               <Checkbox option={FilterTypes.contract} />
               <Checkbox option={FilterTypes.freelance} />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Seniority</div>
            <div className={styles.blockGrid}>
            <Checkbox option={FilterTypes.lead} />
            <Checkbox option={FilterTypes.expert} />
            <Checkbox option={FilterTypes.senior} />
            <Checkbox option={FilterTypes.midRegular} />
            <Checkbox option={FilterTypes.junior} />
            <Checkbox option={FilterTypes.intern} />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Location</div>
            <div className={styles.blockGrid}>
            <Checkbox option={FilterTypes.remote} />
            <Checkbox option={FilterTypes.partRemote} />
            <Checkbox option={FilterTypes.onSite} />
            </div>
         </div>
         <div className={sliderBlock}>
            <div className={styles.titleOfBlock}>Salary (min.)</div>
            <Slider min={10000} max={100000} />
         </div>
      </div>
   );
};

export default Filters;
