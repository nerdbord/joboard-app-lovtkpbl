import styles from './Filters.module.scss';
import classNames from 'classnames';
import { useFilter, useFilterReset, useFilterUpdate } from '../../providers/Filters/FilterContext';
import { ButtonType, FilterTypes } from '../../enums';

// components
import Checkbox from '../UI/Checkbox';
import Slider from '../UI/Slider';
import Button from '../UI/Button';
import useFindJobOffers from '../../data/job-offer/queries/useFindJobOffers';
import { useState } from 'react';
import useIsSmallScreen from '../../hooks/useSmallScreen';

interface FiltersProps {
}

const Filters = (props: FiltersProps) => {
   const resetFilterSettings = useFilterReset();
   const filterUpdate = useFilterUpdate();
   const filterSettings = useFilter();
   const [maxSalary, setMaxSalary] = useState(0);

   const isSmallScreen = useIsSmallScreen(768);

   const { data } = useFindJobOffers();

   data?.forEach((offer) => {
      if (offer.salaryTo > maxSalary) setMaxSalary(offer.salaryTo);
   });

   const jobTypesArray = [
      FilterTypes.fullTime,
      FilterTypes.partTime,
      FilterTypes.contract,
      FilterTypes.freelance,
   ];
   const seniorityArray = [
      FilterTypes.lead,
      FilterTypes.expert,
      FilterTypes.senior,
      FilterTypes.midRegular,
      FilterTypes.junior,
      FilterTypes.intern,
   ];

   const locationArray = [FilterTypes.remote, FilterTypes.partRemote, FilterTypes.onSite];

   const topWrapStyle = classNames(styles.filtersTopWrap, isSmallScreen ? styles.filtersTopWrapSmall : "")

   const blockGridStyle = classNames(styles.blockGrid, isSmallScreen ? styles.blockGridMobile : "")

   const topBlock = classNames(styles.filtersBlock, styles.topBlock);

   const sliderBlock = classNames(styles.filtersBlock, styles.sliderBlock);

   const handleCheckboxChange = (option: FilterTypes) => {
      filterUpdate(option);
   };

   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const currVal = parseInt(event.target.value);
      filterUpdate(FilterTypes.salary, currVal);
   };

   return (
      <div className={topWrapStyle}>
         <div className={topBlock}>
            <div className={styles.filtersTitle}>Filter offers</div>
            <Button type={ButtonType.Text} onClick={resetFilterSettings}>
               Clear filters
            </Button>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Job type</div>
            <div className={blockGridStyle}>
               {jobTypesArray.map((jobType, index) => (
                  <Checkbox
                     option={jobType}
                     key={index}
                     value={filterSettings[jobType] as boolean}
                     onChange={handleCheckboxChange}
                  />
               ))}
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Seniority</div>
            <div className={blockGridStyle}>
               {seniorityArray.map((seniority, index) => (
                  <Checkbox
                     option={seniority}
                     key={index}
                     value={filterSettings[seniority] as boolean}
                     onChange={handleCheckboxChange}
                  />
               ))}
            </div>
         </div>
         <div className={styles.filtersBlock}>
            <div className={styles.titleOfBlock}>Location</div>
            <div className={blockGridStyle}>
               {locationArray.map((location, index) => (
                  <Checkbox
                     option={location}
                     key={index}
                     value={filterSettings[location] as boolean}
                     onChange={handleCheckboxChange}
                  />
               ))}
            </div>
         </div>
         <div className={sliderBlock}>
            <div className={styles.titleOfBlock}>Salary (min.)</div>
            <Slider
               max={maxSalary}
               sliderVal={filterSettings.salary}
               sliderOnChange={handleSliderChange}
            />
         </div>
      </div>
   );
};

export default Filters;
