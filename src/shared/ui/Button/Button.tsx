import classNames from 'classnames'
import { memo } from 'react'
import cls from './Button.module.scss'


type ButtonVariant = 'default' | 'danger' | 'green'

interface IButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string,
  fullwidth?:boolean
  variant?: ButtonVariant
  className?: string,
  addonRight?: React.ReactElement
  addonLeft?: React.ReactElement
  size?:  'm' | 'l' | 'xl', 
}

export const Button: React.FunctionComponent<IButtonSubmitProps> = memo(({
    children,
    fullwidth,
    variant = 'default',
    className,
    addonLeft,
    addonRight,
    size = 'm',
    ...rest
}) => {

    const mods: Mods = {
        [cls.fullwidth]: fullwidth,
    }

    return (
        <button
            className={classNames(cls.Button, mods, cls[size], cls[variant], className)}
            {...rest}
        >
            <div className={cls.addon}>{addonLeft}</div>
            {children}
            <div className={cls.addon}>{addonRight}</div>
        </button>
    )
})

Button.displayName = 'Button'