import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconChartFill = (
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
          d="M3 10C3 9.44772 3.44772 9 4 9H7C7.55228 9 8 9.44772 8 10V20C8 20.5523 7.55228 21 7 21H4C3.44772 21 3 20.5523 3 20V10Z"
          fill="currentColor"
        />
        <path
          d="M10 3C10 2.44771 10.4477 2 11 2H14C14.5523 2 15 2.44772 15 3V20C15 20.5523 14.5523 21 14 21H11C10.4477 21 10 20.5523 10 20V3Z"
          fill="currentColor"
        />
        <path
          d="M17 6C17 5.44772 17.4477 5 18 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H18C17.4477 21 17 20.5523 17 20V6Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconChartFill);
export default ForwardRef;
