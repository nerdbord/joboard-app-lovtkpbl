import React, { useState } from 'react';
import styles from './Filters.module.scss';
import classNames from 'classnames';
import Checkbox from '../UI/Checkbox';
import Slider from '../UI/Slider';
import Button from '../UI/Button';
import { ButtonType, FilterTypes } from '../../enumFaces/enums';
import { FilterSettings } from '../../enumFaces/interfaces';



interface FiltersProps {
   settings: FilterSettings
}


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
               <Checkbox option={FilterTypes.fullTime} settingsObject={props.settings} />
               <Checkbox option={FilterTypes.partTime} settingsObject={props.settings} />
               <Checkbox option={FilterTypes.contract} settingsObject={props.settings} />
               <Checkbox option={FilterTypes.freelance} settingsObject={props.settings} />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Seniority</div>
            <div className={styles.blockGrid}>
            <Checkbox option={FilterTypes.lead} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.expert} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.senior} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.midRegular} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.junior} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.intern} settingsObject={props.settings} />
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Location</div>
            <div className={styles.blockGrid}>
            <Checkbox option={FilterTypes.remote} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.partRemote} settingsObject={props.settings} />
            <Checkbox option={FilterTypes.onSite} settingsObject={props.settings} />
            </div>
         </div>
         <div className={sliderBlock}>
            <div className={styles.titleOfBlock}>Salary (min.)</div>
            <Slider min={10000} max={100000} settingsObject={props.settings}/>
         </div>
      </div>
   );
};

export default Filters;
