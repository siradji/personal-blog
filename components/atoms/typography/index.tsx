import { FC, ReactNode } from 'react';

export type color = 'primary' | 'secondary' | 'white' | 'dark';
export type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'paragraph';

export interface GenericTypographyProps {
  fontSize?: string;
  bold?: true;
  color?: color;
  paragraph?: boolean;
  variant: variant;
  children: ReactNode;
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

enum varaintTypes {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'paragagraph',
}

const getComponent = (variant, props, content) => {
  console.log(variant);
  switch (variant) {
    case 'h1':
      return <H1 props={props} content={content} />;
      break;
    case 'h2':
      return <H2 props={props} content={content} />;
      break;

    case 'h3':
      return <H3 props={props} content={content} />;
      break;

    case 'h4':
      return <H4 props={props} content={content} />;
      break;
    case 'h5':
      return <H5 props={props} content={content} />;
      break;
    case 'paragagraph':
      return <P props={props} content={content} />;
      break;
    default:
      return <P props={props} content={content} />;
      break;
  }
};

export const Typography: FC<GenericTypographyProps> = ({
  children,
  variant = 'h1',
  color = 'white',
}: GenericTypographyProps) => {
  console.log(
    getComponent(variant, [VariantMapper[variant], ColorMapper[color]], children),
  );
  return (
    <>
      {getComponent(variant, [VariantMapper[variant], ColorMapper[color]], children)}
    </>
  );
};

const H1 = ({ props, content }) => <h1 className={props.join(' ')}>{content} </h1>;

const H2 = ({ props, content }) => <h2 className={props.join(' ')}>{content} </h2>;

const H3 = ({ props, content }) => <h3 className={props.join(' ')}>{content} </h3>;

const H4 = ({ props, content }) => <h4 className={props.join(' ')}>{content} </h4>;

const H5 = ({ props, content }) => <h5 className={props.join(' ')}>{content} </h5>;

const P = ({ props, content }) => <p className={props.join(' ')}>{content} </p>;
