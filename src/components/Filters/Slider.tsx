import React, { ChangeEvent, useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames';

interface SliderProps {}

const Slider = (props: SliderProps) => {
    const [sliderVal, setSliderVal] = useState(0)

    const handleChange = (event: ChangeEvent) => {
        setSliderVal(event.target.value)
    }
   return (
      <div className={styles.sliderTop}>
        {sliderVal}
         <input type="range" className={styles.sliderMain} onChange={handleChange}></input>
      </div>
   );
};

export default Slider;
