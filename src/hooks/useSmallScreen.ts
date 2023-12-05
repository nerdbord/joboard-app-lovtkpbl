import { useEffect, useState } from 'react';

const useIsSmallScreen = (screenWidth: number) => {
   const [isSmallScreen, setIsSmallScreen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         setIsSmallScreen(window.innerWidth < screenWidth);
      };

      // Initial setup
      handleResize();

      // Event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);
   return isSmallScreen;
};

export default useIsSmallScreen;
