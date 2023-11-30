interface CloseIconProps {
   className: string;
   onClick: () => void;
}

const CloseIcon = (props: CloseIconProps) => {
   return (
      <svg
         className={props.className}
         onClick={props.onClick}
         xmlns="http://www.w3.org/2000/svg"
         width="40"
         height="40"
         viewBox="0 0 40 40"
         fill="none"
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7927 19.5002L12.4292 25.8637L13.1363 26.5708L19.4998 20.2074L25.8637 26.5713L26.5708 25.8642L20.2069 19.5002L26.5714 13.1358L25.8643 12.4287L19.4998 18.7931L13.1358 12.4291L12.4287 13.1362L18.7927 19.5002Z"
            fill="#545454"
         />
      </svg>
   );
};

export default CloseIcon;
