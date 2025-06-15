import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

type Props = {
  title?: string;
  variant?: 'primary' | 'secondary' | 'bordered';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ title, variant = 'primary', ...rest }) => {
  return (
    <button className={clsx(css.button, css[variant], rest.className)} {...rest}>
      {title || rest.children}
    </button>
  );
};
