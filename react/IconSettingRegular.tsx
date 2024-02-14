import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSettingRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.9046 3.22876C9.02055 2.66511 9.50696 2.19995 10.151 2.19995H13.8537C14.4847 2.19995 14.976 2.65017 15.0978 3.20277C15.1021 3.22245 15.1057 3.24229 15.1085 3.26224L15.3187 4.73906C15.3553 4.99603 15.5475 5.27308 15.8855 5.46809C16.1956 5.64698 16.5051 5.67192 16.7421 5.57911L18.2212 5.00001C18.2309 4.99622 18.2406 4.99262 18.2505 4.98922C18.8025 4.79751 19.4292 4.99002 19.7597 5.5121L19.7708 5.53025L21.618 8.62822C21.9745 9.20442 21.775 9.89813 21.3251 10.256L21.3103 10.2675L20.0583 11.2164C19.8643 11.3634 19.7294 11.6358 19.7294 12C19.7294 12.3508 19.8642 12.6214 20.0468 12.7598L21.3103 13.7174C21.3263 13.7295 21.3418 13.7422 21.3569 13.7555C21.7515 14.1044 21.986 14.7626 21.6179 15.3568L19.7708 18.4546L19.7597 18.4728C19.4292 18.9949 18.8025 19.1874 18.2505 18.9957C18.2406 18.9923 18.2309 18.9887 18.2212 18.9849L16.7464 18.4075C16.5078 18.314 16.1895 18.3398 15.8728 18.5209C15.5446 18.7085 15.3565 18.9803 15.3194 19.2408L15.1085 20.7227C15.1062 20.7389 15.1034 20.7551 15.1001 20.7711C14.9842 21.3348 14.4978 21.7999 13.8537 21.7999H10.151C9.52 21.7999 9.02873 21.3497 8.90694 20.7971C8.9026 20.7775 8.89901 20.7576 8.89617 20.7377L8.68601 19.2608C8.64943 19.0039 8.45717 18.7268 8.11917 18.5318C7.80911 18.3529 7.49965 18.328 7.26261 18.4208L5.7835 18.9999C5.77382 19.0037 5.76408 19.0073 5.75426 19.0107C5.20218 19.2024 4.57547 19.0099 4.24504 18.4878L4.23388 18.4696L2.38677 15.3717C2.04353 14.8174 2.19841 14.1542 2.63243 13.7705C2.64748 13.7572 2.66302 13.7445 2.67902 13.7324L3.93098 12.7835C4.125 12.6365 4.25986 12.3641 4.25986 12C4.25986 11.6227 4.12611 11.3526 3.94507 11.2154L2.69445 10.2675C2.67845 10.2554 2.66291 10.2427 2.64786 10.2294C2.25322 9.88055 2.0187 9.22233 2.38679 8.62814L4.23388 5.53025L4.24504 5.5121C4.57548 4.99002 5.20218 4.79751 5.75426 4.98922C5.76408 4.99262 5.77382 4.99622 5.7835 5.00001L7.25369 5.57562C7.49236 5.66907 7.81263 5.64411 8.14391 5.46139C8.46402 5.28484 8.6481 5.02041 8.68363 4.77076L8.89617 3.27724C8.89848 3.261 8.90129 3.24483 8.9046 3.22876ZM10.4379 3.79995L10.2677 4.99618C10.1461 5.85029 9.57277 6.50055 8.91664 6.86243C8.28174 7.2126 7.45915 7.37432 6.67037 7.0655L5.46314 6.59284L3.91679 9.18633L4.91152 9.94025C5.6037 10.4649 5.85986 11.2816 5.85986 12C5.85986 12.738 5.58185 13.5399 4.89743 14.0586L3.91199 14.8055L5.46314 17.4071L6.6793 16.9309C7.46107 16.6248 8.28113 16.778 8.91877 17.1459C9.56309 17.5177 10.1468 18.1696 10.27 19.0354L10.4358 20.2H13.5668L13.7354 19.0153C13.8575 18.1576 14.4266 17.5046 15.0788 17.1318C15.7171 16.767 16.5442 16.6101 17.3297 16.9176L18.5416 17.3921L20.0879 14.7986L19.0803 14.0349C18.4066 13.5243 18.1294 12.7235 18.1294 12C18.1294 11.2619 18.4074 10.46 19.0919 9.94126L20.0879 9.18633L18.5416 6.59284L17.3254 7.06899C16.5436 7.37507 15.7236 7.22186 15.0859 6.85396C14.4416 6.48221 13.8579 5.8303 13.7347 4.96448L13.5689 3.79995H10.4379ZM20.2591 9.4728C20.2572 9.46984 20.2554 9.46688 20.2536 9.46391L20.2591 9.4728ZM20.2591 14.5121L20.2539 14.5205C20.2556 14.5177 20.2573 14.5149 20.2591 14.5121ZM3.74566 14.5271C3.74722 14.5296 3.74874 14.5321 3.75024 14.5346L3.74566 14.5271ZM3.74566 9.4728L3.75082 9.4644C3.74914 9.46722 3.74742 9.47002 3.74566 9.4728ZM8.15583 12C8.15583 9.8769 9.8769 8.15583 12 8.15583C14.123 8.15583 15.8441 9.8769 15.8441 12C15.8441 14.123 14.123 15.8441 12 15.8441C9.8769 15.8441 8.15583 14.123 8.15583 12ZM12 9.75583C10.7606 9.75583 9.75583 10.7606 9.75583 12C9.75583 13.2393 10.7606 14.2441 12 14.2441C13.2393 14.2441 14.2441 13.2393 14.2441 12C14.2441 10.7606 13.2393 9.75583 12 9.75583Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconSettingRegular);
export default ForwardRef;