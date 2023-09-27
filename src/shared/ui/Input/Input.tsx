import React, { memo } from 'react'
import classNames from 'classnames'
import cls from './Input.module.scss'
import { VStack } from '../Stack'


interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  addonLeft?: React.ReactElement
  addonRight?: React.ReactElement 
  className?: string
  isError?: boolean
  ref?: React.Ref<HTMLInputElement>
}

export const Input = memo(React.forwardRef<HTMLInputElement, IInputProps>(({
    label,
    addonLeft,
    className,
    isError,
    disabled,
    addonRight,
    ...rest
}, ref) => {

    const mods: Mods = {
        [cls.danger]: isError,
    }

    const addonMods: Mods = {
        [cls.danger]: isError
    }

    const addon = addonLeft && (
        <div className={classNames(cls.addonLeft, addonMods)}>
            {addonLeft}
        </div>
    )

    const inputMods: Mods = {
        [cls.danger]: isError
    }

    const input = (
        <div className={classNames(cls.input_container, inputMods)}>
            {addon && <div className={cls.addonLeft}>
                {addon}
            </div>}
            <input className={classNames(cls.Input, mods)}
                ref={ref}
                disabled={disabled}
                {...rest}
            />
            {addonRight && <div className={cls.addonRight}>
                {addonRight}
            </div>}
        </div>
    )


    const labelMods: Mods = {
        [cls.danger]: isError
    }

    const labelComp = label && (
        <label className={classNames(cls.label, labelMods)}>{label}</label>
    )

    const stackMods: Mods = {
        [cls.disabled]: disabled
    }

    return (
        <VStack max gap="8" className={classNames(cls.container, stackMods, className)}>
            {labelComp}
            {input}
        </VStack>    
    )
}))

Input.displayName = 'Input'
