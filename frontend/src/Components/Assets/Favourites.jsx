import React from "react";

const Favourites = ({ added, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      cursor="pointer"
    >
      <path
        fill={added ? "#000" : "#fff"}
        d="M20.381 6.068c-2.226-2.87-6.611-2.51-8.381.56-1.77-3.07-6.155-3.43-8.381-.56l-.31.398a5.953 5.953 0 0 0 .628 7.989l6.97 6.548c.104.098.218.204.326.287.123.095.296.205.526.25q.242.048.482 0c.23-.045.403-.155.526-.25.108-.082.222-.19.326-.287l6.97-6.548a5.953 5.953 0 0 0 .627-7.989z"
      ></path>
    </svg>
  );
};

export default Favourites;
