import NextLink from 'next/link';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

// types

export type LinkVariant = 'primary' | 'secondary' | 'white' | 'dark' | 'purple';
export type LinkSize = 'sm' | 'md' | 'lg';

// interfaces

export interface LinkProps {
  children: ReactNode;
  to: string;
  variant: LinkVariant;
  size?: LinkSize;
  underlined?: boolean;
  ext?: boolean;
}

// mappers
const VariantMapper: Record<LinkVariant, string> = {
  primary: 'text-main-red hover:text-main-white',
  secondary: 'text-main-blue hover:text-main-white',
  white: 'text-main-white hover:text-main-red',
  dark: 'text-soft-blue hover:text-main-white',
  purple: 'text-ui-purple hover:text-main-blue',
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
  underlined = false,
  ext = false,
}: LinkProps) => {
  const classes = [VariantMapper[variant], SizeMapper[size]];
  return (
    <>
      {ext ? (
        <a
          href={to}
          data-testid="main-link-cp"
          className={clsx([...classes], underlined ? 'underline' : 'no-underline')}
        >
          {children}
        </a>
      ) : (
        <NextLink href={to}>
          <a
            data-testid="main-link-cp"
            className={clsx([...classes], underlined ? 'underline' : 'no-underline')}
          >
            {children}
          </a>
        </NextLink>
      )}
    </>
  );
};
