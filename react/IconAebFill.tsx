import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconAebFill = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.6"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M9.25143 1.48412C8.86608 1.1946 8.31899 1.27228 8.02946 1.65763C7.73994 2.04299 7.81763 2.59008 8.20298 2.8796C9.26066 3.67425 10.5768 4.1455 12.0005 4.1455C13.4241 4.1455 14.7403 3.67425 15.7979 2.8796C16.1833 2.59008 16.261 2.04299 15.9715 1.65763C15.6819 1.27228 15.1348 1.1946 14.7495 1.48412C13.9837 2.05945 13.0331 2.40004 12.0005 2.40004C10.9678 2.40004 10.0172 2.05945 9.25143 1.48412Z"
          fill="currentColor"
        />
        <path
          d="M7.0397 4.18937C6.64246 3.91638 6.09914 4.01711 5.82615 4.41435C5.55317 4.81159 5.6539 5.35491 6.05113 5.62789C7.7432 6.79069 9.79341 7.47131 12 7.47131C14.2065 7.47131 16.2567 6.79069 17.9488 5.62789C18.346 5.35491 18.4468 4.81159 18.1738 4.41435C17.9008 4.01711 17.3575 3.91638 16.9602 4.18937C15.5498 5.15865 13.8424 5.72586 12 5.72586C10.1575 5.72586 8.45016 5.15865 7.0397 4.18937Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.01012 22.04C5.01012 22.4 4.72012 22.69 4.36012 22.69C4.00012 22.69 3.71012 22.4 3.71012 22.04L3.71012 16.92C3.41548 17.0658 3.093 17.191 2.78008 17.2301C2.47008 17.2701 2.05008 17.2501 1.74008 16.9401C1.64008 16.8401 1.58008 16.7001 1.58008 16.5501C1.58008 16.1401 1.86008 15.8601 2.07008 15.7001V15.7101C2.30008 15.5301 2.59008 15.3901 2.89008 15.2801C3.14388 15.1905 3.42555 15.1121 3.71012 15.0531V14.4C3.71012 11.02 6.45012 8.29004 9.82012 8.29004H14.1801C17.5601 8.29004 20.2901 11.03 20.2901 14.4V15.0531C20.5747 15.1121 20.8563 15.1905 21.1101 15.2801C21.4101 15.3901 21.7001 15.5301 21.9301 15.7101V15.7001C22.1401 15.8601 22.4201 16.1401 22.4201 16.5501C22.4201 16.7001 22.3601 16.8401 22.2601 16.9401C21.9501 17.2501 21.5301 17.2701 21.2201 17.2301C20.9072 17.191 20.5847 17.0658 20.2901 16.9201V22.04C20.2901 22.4 20.0001 22.69 19.6401 22.69C19.2801 22.69 18.9801 22.4 18.9801 22.04V16.62C18.2501 17.17 17.7801 17.9 17.4801 18.58C17.2801 19.04 17.1601 19.47 17.0901 19.78C17.0501 19.93 17.0301 20.06 17.0201 20.14C17.0101 20.18 17.0101 20.23 17.0101 20.23V22.04C17.0101 22.4 16.7201 22.69 16.3601 22.69L7.63012 22.69C7.27012 22.69 6.98012 22.4 6.98012 22.04V20.22C6.97012 20.2 6.97012 20.17 6.97012 20.13C6.96431 20.0835 6.95174 20.0235 6.93635 19.95C6.92525 19.8971 6.91268 19.837 6.90012 19.77C6.83012 19.46 6.71012 19.03 6.51012 18.57C6.21012 17.89 5.74012 17.16 5.01012 16.61L5.01012 22.04ZM5.72013 14.6L5.71012 14.6L4.86012 14.91L6.14012 15.54L6.98012 15.34C7.29012 15.27 7.61012 15.21 7.93012 15.15L8.05012 15.13C9.31012 14.92 10.6101 14.79 11.9901 14.79C13.3701 14.79 14.7201 14.91 16.0001 15.13L16.1501 15.16C16.4601 15.21 16.7801 15.27 17.0901 15.34L17.9301 15.55L19.1201 14.86L18.1801 14.54L17.6701 14.39C15.8901 13.96 13.9101 13.73 11.9901 13.73C10.0701 13.73 8.28012 13.95 6.59012 14.34C6.30013 14.4 6.01012 14.5 5.72013 14.6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconAebFill);
export default ForwardRef;
