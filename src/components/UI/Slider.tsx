import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { useFilter, useFilterUpdate } from '../../providers/Filters/FilterContext';
import { FilterTypes } from '../../enums';

interface SliderProps {
   sliderVal: number;
   max: number;
   sliderOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = (props: SliderProps) => {
   return (
      <div className={styles.sliderTop}>
         <div
            className={styles.thumbFollower}
            style={{ left: `${(props.sliderVal / props.max) * 100}%` }}
         >
            {props.sliderVal}
         </div>
         <input
            type="range"
            className={styles.sliderMain}
            onChange={props.sliderOnChange}
            value={props.sliderVal}
            min={0}
            max={props.max}
         />
      </div>
   );
};

export default Slider;
