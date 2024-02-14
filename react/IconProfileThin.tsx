import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconProfileThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 2.6001C8.90711 2.6001 6.3999 5.1073 6.3999 8.2001C6.3999 11.2929 8.90711 13.8001 11.9999 13.8001C15.0927 13.8001 17.5999 11.2929 17.5999 8.2001C17.5999 5.1073 15.0927 2.6001 11.9999 2.6001ZM7.5999 8.2001C7.5999 5.77004 9.56985 3.8001 11.9999 3.8001C14.43 3.8001 16.3999 5.77004 16.3999 8.2001C16.3999 10.6301 14.43 12.6001 11.9999 12.6001C9.56985 12.6001 7.5999 10.6301 7.5999 8.2001Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9999 14.6001C6.80842 14.6001 3.3999 17.4293 3.3999 21.2001C3.3999 21.5315 3.66853 21.8001 3.9999 21.8001H19.9999C20.3313 21.8001 20.5999 21.5315 20.5999 21.2001C20.5999 17.4293 17.1914 14.6001 11.9999 14.6001ZM11.9999 15.8001C16.469 15.8001 19.023 17.9948 19.3613 20.6001H4.63852C4.97684 17.9948 7.53085 15.8001 11.9999 15.8001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconProfileThin);
export default ForwardRef;