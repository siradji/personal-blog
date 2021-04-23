import { FC, ReactNode } from 'react';

export type color = 'primary' | 'secondary' | 'white' | 'dark';
export type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'paragraph';

export interface GenericTypographyProps {
  fontSize?: string;
  bold?: true;
  color?: color;
  centered?: boolean;
  variant: variant;
  children: ReactNode;
  customColor?: string;
}

const ColorMapper: Record<color, string> = {
  primary: 'text-main-red ',
  secondary: 'text-main-blue ',
  white: 'text-main-white ',
  dark: 'text-soft-blue ',
};

const VariantMapper: Record<variant, string> = {
  h1: 'text-3xl',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  paragraph: 'text-base',
};

const getComponent = (variant: variant, props: Array<string>, content: any) => {
  const classNames: string = props.join(' ');
  switch (variant) {
    case 'h1':
      return <H1 props={classNames} content={content} />;
      break;
    case 'h2':
      return <H2 props={classNames} content={content} />;
      break;

    case 'h3':
      return <H3 props={classNames} content={content} />;
      break;

    case 'h4':
      return <H4 props={classNames} content={content} />;
      break;
    case 'h5':
      return <H5 props={classNames} content={content} />;
      break;
    case 'paragraph':
      return <P props={classNames} content={content} />;
      break;
    default:
      return <P props={classNames} content={content} />;
      break;
  }
};

export const Typography: FC<GenericTypographyProps> = ({
  children,
  variant = 'h1',
  color = 'white',
  centered = false,
  customColor,
}: GenericTypographyProps) => (
  <>
    {getComponent(
      variant,
      [
        VariantMapper[variant],
        customColor ? customColor : ColorMapper[color],
        centered ? 'text-center' : '',
      ],
      children,
    )}
  </>
);

const H1 = ({ props, content }) => (
  <h1 data-testid="main-typo-cp" className={props}>
    {content}
  </h1>
);

const H2 = ({ props, content }) => (
  <h2 data-testid="main-typo-cp" className={props}>
    {content}
  </h2>
);

const H3 = ({ props, content }) => (
  <h3 data-testid="main-typo-cp" className={props}>
    {content}
  </h3>
);

const H4 = ({ props, content }) => (
  <h4 data-testid="main-typo-cp" className={props}>
    {content}
  </h4>
);

const H5 = ({ props, content }) => (
  <h5 data-testid="main-typo-cp" className={props}>
    {content}
  </h5>
);

const P = ({ props, content }) => (
  <p data-testid="main-typo-cp" className={props}>
    {content}
  </p>
);
