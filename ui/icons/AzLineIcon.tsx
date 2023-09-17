import type {SVGProps} from 'react';

export const AzLineIcon = (props: SVGProps<any>) => {
  return (
    <svg viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_1314_1210" maskUnits="userSpaceOnUse" x="0" y="0">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.285156H20.3185V30.0769H0V0.285156Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1314_1210)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 30.0769H7.83978L20.3185 0.285156H12.4787L0 30.0769Z"
          fill="#01D662"
        />
      </g>
    </svg>
  );
};
