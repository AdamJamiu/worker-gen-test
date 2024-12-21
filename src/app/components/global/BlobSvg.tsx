const BlobSvg = ({ color, styles }: { color: string; styles?: string }) => {
  return (
    <svg
      fill={color || "#5EB237"}
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 265.34"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M.17,10.74C43.4,20,87.41,29.54,125.87,51.36c49.88,28.29,86.24,81.56,141.49,99.85a115.56,115.56,0,0,0,71,.33c20.72-6.65,39.05-19,57.45-30.63,34.42-21.75,71.93-40,112.69-45.4,83.85-11.09,164.77,46.12,248.13,17.9,44.46-15,78-52.21,120.65-71.76A236.83,236.83,0,0,1,1000,1.25l-1.71,264.09H.2C.2,180.48-.23,95.6.17,10.74Z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default BlobSvg;
