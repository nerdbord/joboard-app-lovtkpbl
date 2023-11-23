interface LocationIconProps {
   className: string;
}

const LocationIcon = (props: LocationIconProps) => {
   return (
      <svg
         className={props.className}
         width="30"
         height="30"
         viewBox="0 0 30 30"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g id="Icon=Place">
            <path
               id="Oval 2"
               fillRule="evenodd"
               clipRule="evenodd"
               d="M15 23C15 23 21 17.05 21 11.6667C21 8.53705 18.3137 6 15 6C11.6863 6 9 8.53705 9 11.6667C9 17.05 15 23 15 23Z"
               stroke="#545454"
            />
            <path
               id="Oval 3"
               fillRule="evenodd"
               clipRule="evenodd"
               d="M15 13.5C15.6904 13.5 16.25 12.9404 16.25 12.25C16.25 11.5596 15.6904 11 15 11C14.3096 11 13.75 11.5596 13.75 12.25C13.75 12.9404 14.3096 13.5 15 13.5Z"
               fill="#545454"
               stroke="#545454"
            />
         </g>
      </svg>
   );
};

export default LocationIcon;
