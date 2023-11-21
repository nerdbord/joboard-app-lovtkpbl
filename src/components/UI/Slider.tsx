import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames';

interface SliderProps {
   min: number;
   max: number;
}

const Slider = (props: SliderProps) => {
   const [sliderVal, setSliderVal] = useState(props.min);
   const [percentVal, setpercentVal] = useState(0);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const currVal = parseInt(event.target.value);
      setSliderVal(currVal);
      const currPercentVal = ((currVal - props.min) / (props.max - props.min)) * 100;
      const thumbOffset = 6; // these lines below exist due to padding used for thumb border effect
      const minPercentVal = (thumbOffset / (event.target.clientWidth - thumbOffset)) * 100;
      const maxPercentVal = 100 - (thumbOffset / (event.target.clientWidth - thumbOffset)) * 100;
      const adjustedPercentVal = (currPercentVal * (maxPercentVal - minPercentVal)) / 100 + minPercentVal;
      setpercentVal(adjustedPercentVal);
   };

   return (
      <div className={styles.sliderTop}>
         <div className={styles.thumbFollower} style={{ left: `${percentVal}%` }}>
            {sliderVal}
         </div>
         <input
            type="range"
            className={styles.sliderMain}
            onChange={handleChange}
            min={props.min}
            max={props.max}
         />
      </div>
   );
};

export default Slider;
