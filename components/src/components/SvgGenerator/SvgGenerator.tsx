import React from 'react';

export const SvgGenerator = ({ id }: { id: string }) => {
  switch (id) {
    case 'search':
      return (
        <svg
          fill="#4D4AE8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
        >
          <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
        </svg>
      );

    case 'avatar':
      return (
        <svg
          width="80px"
          height="80px"
          viewBox="-26.5 0 312 312"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="paper" transform="translate(-483.982 -1807.416)">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M713.681,1807.416H513.49a29.225,29.225,0,0,0-29.508,29.156v253.495a29.387,29.387,0,0,0,29.508,29.349H631.152a12.023,12.023,0,0,0,8.566-3.456l99.832-99.9a11.9,11.9,0,0,0,3.432-8.52V1836.572A29.048,29.048,0,0,0,713.681,1807.416Zm-205.7,282.651V1836.572a5.363,5.363,0,0,1,5.508-5.156H713.681a5.182,5.182,0,0,1,5.3,5.156v152.844H642.513a29.524,29.524,0,0,0-29.531,29.485v76.515H513.49A5.526,5.526,0,0,1,507.982,2090.067Zm129-5.771V2018.9a5.665,5.665,0,0,1,5.531-5.485h65.4Z"
              fill="#4D4AE8"
            />
          </g>
        </svg>
      );
    case 'btn':
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z"
            fill="#4D4AE8"
          />
        </svg>
      );
    default:
      return <svg />;
  }
};
