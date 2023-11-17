// date ISO String example: '2023-06-15T20:55:57.198Z'
export function formatTimeDifference(createdAt: string) {
   const createdDate = new Date(createdAt);
   const currentDate = new Date();

   // Calculate the difference in milliseconds
   const timeDifference = currentDate.getTime() - createdDate.getTime();

   // Convert the difference to days
   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

   if (daysDifference === 0) {
      return 'today';
   } else if (daysDifference === 1) {
      return 'yesterday';
   } else {
      return `${daysDifference} days ago`;
   }
}
