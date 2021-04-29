import clsx from 'clsx';
import { FC, memo } from 'react';

type inputType = 'text' | 'number' | 'email' | 'password';
type variant = 'primary' | 'secondary' | 'dark' | 'white';

export interface InputProps {
  onChange: (e: any) => void;
  onFocus?: (e: any) => void;
  value: string;
  placeholder?: string;
  type?: inputType;
  variant: variant;
  width?: string;
  name?: string;
}

const VariantMapper: Record<variant, string> = {
  primary: '',
  secondary: '',
  dark: '',
  white: '',
};

const widthMapper = {
  sm: 'w-10',
  md: 'w-16',
  lg: 'w-20',
};

const Component: FC<InputProps> = ({
  value,
  onChange,
  placeholder = 'Enter text',
  type = 'text',
  onFocus = null,
  variant = 'primary',
  width,
  name,
}) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name ?? 'field'}
    value={value}
    onChange={onChange}
    onFocus={onFocus ?? null}
    className={clsx(
      VariantMapper[variant],
      'outline-none focus:ring-2 focus:ring-ui-purple shadow-md rounded-md py-3 px-4 text-main-blue text-lg',
      width ? widthMapper[width] : 'w-full',
    )}
  />
);

export const InputComponent = memo(Component);
