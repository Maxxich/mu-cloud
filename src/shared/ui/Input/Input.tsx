import React, { memo } from 'react'
import classNames from 'classnames'
import cls from './Input.module.scss'
import { VStack } from '../Stack'


interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  addonLeft?: React.ReactElement
  className?: string
  isError?: boolean
  ref?: React.Ref<HTMLInputElement>
}

export const Input = memo(React.forwardRef<HTMLInputElement, IInputProps>(({
    label,
    addonLeft,
    className,
    isError,
    ...rest
}, ref) => {

    const mods: Mods = {
        [cls.danger]: isError
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
                {...rest}
            />
        </div>
    )


    const labelMods: Mods = {
        [cls.danger]: isError
    }

    const labelComp = label && (
        <label className={classNames(cls.label, labelMods)}>{label}</label>
    )

    return (
        <VStack max gap="8" className={className}>
            {labelComp}
            {input}
        </VStack>    
    )
}))

Input.displayName = 'Input'
