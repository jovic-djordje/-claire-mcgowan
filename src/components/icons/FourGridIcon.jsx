const FourGridIcon = ({ className = "" }) => {
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
        d="
          M 0.609 0.579
          L 8 0.579
          L 8 7.97
          L 0.609 7.97
          Z

          M 9.465 0.579
          L 16.856 0.579
          L 16.856 7.97
          L 9.465 7.97
          Z

          M 9.465 9.141
          L 16.856 9.141
          L 16.856 16.532
          L 9.465 16.532
          Z

          M 0.609 9.141
          L 8 9.141
          L 8 16.532
          L 0.609 16.532
          Z
        "
        fill="currentColor"
      />
    </svg>
  );
};

export default FourGridIcon;
