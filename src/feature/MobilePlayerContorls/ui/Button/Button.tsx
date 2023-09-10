'use client'
import * as React from 'react';

import classNames from 'classnames';
import cls from './Button.module.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement
  variant?: 'primary' | 'secondary'
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
    
  return (
    <button
        className={classNames(cls.button, cls[variant])}
        {...rest}
    >
      {children}
    </button>
  );
};