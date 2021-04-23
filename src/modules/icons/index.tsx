import { FC } from 'react';

type Fill = 'red' | 'white' | 'blue' | 'black';

interface IconProps {
  fill: Fill;
  width: number;
  height: number;
}

const IconsMapper: Record<Fill, string> = {
  red: '#ff4a57',
  white: '#fefefe',
  blue: '#23263a',
  black: '#1f2235',
};

export const HamburgerMenuIcon: FC<IconProps> = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${height} w-${width}`}
    fill={IconsMapper[fill]}
    viewBox="0 0 24 24"
    stroke={IconsMapper[fill]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);

export const CloseIcon: FC<IconProps> = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-${height} w-${width}`}
    fill={IconsMapper[fill]}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
