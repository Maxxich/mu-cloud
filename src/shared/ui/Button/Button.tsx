import classNames from 'classnames'
import { MutableRefObject, forwardRef, memo } from 'react'
import cls from './Button.module.scss'

type ButtonVariant = 'default' | 'danger' | 'green'

interface IButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    fullwidth?:boolean
    variant?: ButtonVariant
    addonRight?: React.ReactElement
    addonLeft?: React.ReactElement
    size?:  'm' | 'l' | 'xl', 
    ref?: MutableRefObject<HTMLElement>
    className?: string,
}

export const Button: React.FunctionComponent<IButtonSubmitProps> = memo(forwardRef(({
    children,
    fullwidth,
    variant = 'default',
    className,
    addonLeft,
    addonRight,
    size = 'm',
    ...rest
}, ref) => {

    const mods: Mods = {
        [cls.fullwidth]: fullwidth,
    }

    return (
        <button
            className={classNames(cls.Button, mods, cls[size], cls[variant], className)}
            {...rest}
            ref={ref as any}
        >
            <div className={cls.addon}>{addonLeft}</div>
            {children}
            <div className={cls.addon}>{addonRight}</div>
        </button>
    )
}))

Button.displayName = 'Button'