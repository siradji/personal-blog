import clsx from 'clsx';
import { FC, ReactChild } from 'react';

type ButtonVariant =
  | 'fill-primary'
  | 'outlined-primary'
  | 'fill-secondary'
  | 'outlined-secondary'
  | 'fill-accent'
  | 'outlined-accent';

export interface ButtonProps {
  onClick: (e: any) => void;
  children: ReactChild;
  variant: ButtonVariant;
  rounded?: boolean;
}

const ButtonMapper: Record<ButtonVariant, string> = {
  'fill-primary':
    'text-main-white bg-ui-purple  hover:bg-transparent  border border-2 border-ui-purple  hover:text-ui-purple',
  'outlined-primary':
    'text-ui-purple bg-transparent  hover:bg-ui-purple border border-2 border-ui-purple hover:text-main-white  ',
  'fill-secondary':
    'text-main-white bg-main-red  hover:bg-transparent border border-2 border-main-red  hover:text-main-red',
  'outlined-secondary':
    'text-main-red bg-transparent  hover:bg-main-red  border-2 border-main-red hover:text-main-white ',
  'fill-accent':
    'text-main-white bg-main-blue hover:bg-transparent border border-2 border-main-blue  hover:text-main-blue',
  'outlined-accent':
    'text-main-blue bg-transparent  hover:bg-main-blue border border-2 border-main-blue hover:text-main-white ',
};

export const Button: FC<ButtonProps> = ({
  onClick,
  variant,
  children,
  rounded = false,
}) => (
  <button
    data-testid="main-button-cp"
    onClick={(e: any) => onClick(e)}
    className={clsx(
      'outline-none text-lg transition duration-500  ease-in-out py-2 px-5 hover:border-opacity-100 ',
      ButtonMapper[variant],
      rounded ? 'rounded-lg' : 'rounded-md',
    )}
  >
    {children}
  </button>
);
