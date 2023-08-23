'use client'
import * as React from 'react';

import cls from './Button.module.scss'
import classNames from 'classnames';

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