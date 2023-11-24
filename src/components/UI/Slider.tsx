import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { useFilter, useFilterUpdate } from '../Filters/FilterContext';
import { FilterTypes } from '../../enums';

interface SliderProps {
   currentValue: number;
   max: number;
}

const Slider = (props: SliderProps) => {
   const sliderVal = useFilter().salary
   const setSliderVal = useFilterUpdate();
   const [percentVal, setpercentVal] = useState((sliderVal/props.max)*100);

   setTimeout(() => {
      setpercentVal((sliderVal/props.max)*100)
   },1)


   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const currVal = parseInt(event.target.value);
      setSliderVal(FilterTypes.salary, currVal);
      const currPercentVal = (currVal / props.max) * 100;
      const thumbOffset = 6; // these lines below exist due to padding used for thumb border effect
      const minPercentVal = (thumbOffset / (event.target.clientWidth - thumbOffset)) * 100;
      const maxPercentVal = 100 - (thumbOffset / (event.target.clientWidth - thumbOffset)) * 100;
      const adjustedPercentVal =
         (currPercentVal * (maxPercentVal - minPercentVal)) / 100 + minPercentVal;
      setpercentVal(adjustedPercentVal);
   };

   return (
      <div className={styles.sliderTop}>
         <div className={styles.thumbFollower} style={{ left: `${percentVal}%` }}>
            {sliderVal == 0 ? "0" : sliderVal}
         </div>
         <input
            type="range"
            className={styles.sliderMain}
            onChange={handleChange}
            value={sliderVal}
            min={0}
            max={props.max}
         />
      </div>
   );
};

export default Slider;
