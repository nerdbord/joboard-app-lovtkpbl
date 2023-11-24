import styles from './Filters.module.scss';
import classNames from 'classnames';
import { useFilter, useFilterReset } from './FilterContext';
import { ButtonType, FilterTypes } from '../../enums';

// components
import Checkbox from '../UI/Checkbox';
import Slider from '../UI/Slider';
import Button from '../UI/Button';
import useFindJobOffers from '../../data/job-offer/queries/useFindJobOffers';
import { useState } from 'react';

interface FiltersProps {}

const Filters = (props: FiltersProps) => {
   //this line below contains a filter resetting hook
   const resetFilterSettings = useFilterReset();
   const currentSalary = useFilter().salary;
   const [maxSalary, setMaxSalary] = useState(0);

   const { data } = useFindJobOffers();

   data?.forEach((offer) => {
      if (offer.salaryTo > maxSalary) setMaxSalary(offer.salaryTo);
   });

   const topBlock = classNames(styles.filtersBlock, styles.topBlock);

   const sliderBlock = classNames(styles.filtersBlock, styles.sliderBlock);

   return (
      <div className={styles.filtersTopWrap}>
         <div className={topBlock}>
            <div className={styles.filtersTitle}>Filter offers</div>
            <Button type={ButtonType.Text} onClick={resetFilterSettings}>
               Clear filters
            </Button>
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
            <Slider currentValue={currentSalary} max={maxSalary} />
         </div>
      </div>
   );
};

export default Filters;
