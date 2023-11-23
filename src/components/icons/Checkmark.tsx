import React from 'react';

interface CheckmarkProps {}

const Checkmark = (props: CheckmarkProps) => {
   return (
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M1 4L4.5 7.5L11 1"
            stroke="#9564D4"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default Checkmark;
