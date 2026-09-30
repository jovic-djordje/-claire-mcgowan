const TwoColumnIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="17"
      height="17"
      viewBox="0 0 17 17"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 0.609 0.579 L 7.809 0.579 L 7.809 16.579 L 0.609 16.579 Z M 9.109 0.579 L 16.309 0.579 L 16.309 16.579 L 9.109 16.579 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TwoColumnIcon;
