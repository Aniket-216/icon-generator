import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarEpbRegular = (
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
          d="M5.0561 5.98597C5.34945 5.60353 5.27723 5.05569 4.89479 4.76233C4.51235 4.46898 3.96451 4.5412 3.67116 4.92364C2.18971 6.85498 1.30908 9.32644 1.30908 12.0003C1.30908 14.6741 2.18971 17.1455 3.67116 19.0769C3.96451 19.4593 4.51235 19.5315 4.89479 19.2382C5.27723 18.9448 5.34945 18.397 5.0561 18.0145C3.8081 16.3876 3.05454 14.2894 3.05454 12.0003C3.05454 9.71114 3.8081 7.61296 5.0561 5.98597Z"
          fill="currentColor"
        />
        <path
          d="M19.1061 4.76166C19.4889 4.46879 20.0367 4.5417 20.3295 4.92452C21.8078 6.85678 22.6909 9.39567 22.6909 12.1421C22.6909 14.7507 21.9002 17.1603 20.5603 19.0504C20.2815 19.4436 19.7368 19.5364 19.3436 19.2577C18.9504 18.9789 18.8576 18.4342 19.1363 18.041C20.2608 16.4548 20.9455 14.4002 20.9455 12.1421C20.9455 9.76551 20.1805 7.60229 18.9433 5.98509C18.6504 5.60228 18.7233 5.05453 19.1061 4.76166Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0364 9.27294C10.0364 8.79095 10.4271 8.40021 10.9091 8.40021H12.5454C13.9312 8.40021 15.0545 9.52357 15.0545 10.9093C15.0545 12.295 13.9312 13.4184 12.5454 13.4184H11.7818V14.7275C11.7818 15.2095 11.3911 15.6002 10.9091 15.6002C10.4271 15.6002 10.0364 15.2095 10.0364 14.7275V9.27294ZM11.7818 10.1457V11.6729H12.5454C12.9672 11.6729 13.3091 11.331 13.3091 10.9093C13.3091 10.4876 12.9672 10.1457 12.5454 10.1457H11.7818Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.58181 12.0002C4.58181 7.90326 7.90304 4.58203 12 4.58203C16.0969 4.58203 19.4182 7.90326 19.4182 12.0002C19.4182 16.0972 16.0969 19.4184 12 19.4184C7.90304 19.4184 4.58181 16.0972 4.58181 12.0002ZM12 6.32749C8.86703 6.32749 6.32726 8.86725 6.32726 12.0002C6.32726 15.1332 8.86703 17.6729 12 17.6729C15.133 17.6729 17.6727 15.1332 17.6727 12.0002C17.6727 8.86725 15.133 6.32749 12 6.32749Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarEpbRegular);
export default ForwardRef;
