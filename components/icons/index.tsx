import { FC } from "react";

type Fill = 'red' | 'white' | 'blue' | 'black';

interface IconProps  {
    fill: Fill
}

const IconsMapper: Record<Fill, string> =  {
    red: "#ff4a57",
    white:"#fefefe",
    blue: "#23263a",
    black: "#1f2235"
}


export const HamburgerMenuIcon:FC<IconProps> = ({fill}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill={IconsMapper[fill]} viewBox="0 0 24 24" stroke={IconsMapper[fill]} >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
  </svg>
)