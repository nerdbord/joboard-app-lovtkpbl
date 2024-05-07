import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { useFilter, useFilterUpdate } from '../../providers/Filters/FilterContext';
import { FilterTypes } from '../../enums';
import classNames from 'classnames';

interface SliderProps {
   sliderVal: number;
   max: number;
   sliderOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = (props: SliderProps) => {

   const [isTouchActive, setIsTouchActive] = useState(false)   
   const thumbFollowerStyle = classNames(styles.thumbFollower, isTouchActive ? styles.thumbFollowerSmall : "")

   //getting actual value straight from context
   const sliderVal = useFilter().salary;
   const setSliderVal = useFilterUpdate();

   //local percentage value, because we're getting maximum salary value from a different place than filter context
   const [percentVal, setpercentVal] = useState((sliderVal / props.max) * 100);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const currVal = parseInt(event.target.value);

      //this if line fixes the "flickering" of displayValue if the user chooses to keep dragging the slider to the left
      if (currVal == 0 && sliderVal == 0) return;

      //we're updating the value directly in context
      setSliderVal(FilterTypes.salary, currVal);
      setpercentVal((currVal / props.max) * 100);
   };

   //there were some issues with displaying at/near value of 0, and these three lines fix them
   const fixedPercentVal = sliderVal <= 1 ? '0' : percentVal;
   const fixedDisplayVal = sliderVal <= 1 ? '0' : sliderVal;
   const fixedSliderVal = sliderVal <= 1 ? '1' : sliderVal;

   return (
      <div className={styles.sliderTop}>
         <div
            className={thumbFollowerStyle}
            style={{ left: `${fixedPercentVal}%` }}
         >
            {props.sliderVal}
         </div>
         <input
            type="range"
            className={styles.sliderMain}
            onChange={handleChange}
            onTouchStart={() => {setIsTouchActive(true)}}
            onTouchEnd={() => setIsTouchActive(false)}
            value={fixedSliderVal}
            min={0}
            max={props.max}
            data-testid={"slider"}
         />
      </div>
   );
};

export default Slider;
