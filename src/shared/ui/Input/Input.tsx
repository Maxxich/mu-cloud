import React from 'react'
import classNames from 'classnames'
import cls from './Input.module.scss'
import { VStack } from '../Stack'


interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
  addonLeft?: React.ReactElement
  className?: string
  errorMessage?: string
  ref?: React.Ref<HTMLInputElement>
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(({
  label,
  addonLeft,
  className,
  errorMessage = '',
  ...rest
}, ref) => {

  const mods: Mods = {
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.danger]: Boolean(errorMessage)
  }

  const addon = addonLeft && (
    <div className={cls.addonLeft}>
      {addonLeft}
    </div>
  )

  const input = (
    <div className={cls.input_container}>
      {addon}
      <input className={classNames(cls.Input, mods, className)}
        ref={ref}
        {...rest}
      ></input>
    </div>
  )

  const error = errorMessage && (
    <div className={cls.error}>{errorMessage}</div>
  )

  const labelMods: Mods = {
    [cls.danger]: Boolean(errorMessage)
  }

  const labelComp = (
    <label className={classNames(cls.label, labelMods)}>{label}</label>
  )

  return (
    <VStack max gap="8">
      {labelComp}
      {input}
      {error}
    </VStack>    
  )
})

Input.displayName = 'Input'
