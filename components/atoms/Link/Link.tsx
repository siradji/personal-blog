import NextLink from 'next/link';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

// types

type LinkVariant = 'primary' | 'secondary' | 'white' | 'dark';
type LinkSize = 'sm' | 'md' | 'lg';

// interfaces

export interface LinkProps {
  children: ReactNode;
  to: string;
  variant: LinkVariant;
  size?: LinkSize;
}

// mappers

const VariantMapper: Record<LinkVariant, string> = {
  primary: 'text-main-red',
  secondary: 'text-main-blue',
  white: 'text-main-white',
  dark: 'text-soft-blue',
};

const SizeMapper: Record<LinkSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const Link: FC<LinkProps> = ({
  children,
  to,
  variant,
  size = 'md',
}: LinkProps) => {
  const classes = [VariantMapper[variant], SizeMapper[size]];
  return (
    <NextLink href={to}>
      <a data-testid="main-link-cp" className={clsx([...classes], 'no-underline')}>
        {children}
      </a>
    </NextLink>
  );
};
