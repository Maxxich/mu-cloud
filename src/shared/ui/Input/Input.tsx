import React, { memo } from 'react'
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

export const Input = memo(React.forwardRef<HTMLInputElement, IInputProps>(({
  label,
  addonLeft,
  className,
  errorMessage = '',
  ...rest
}, ref) => {

  const mods: Mods = {
    [cls.danger]: Boolean(errorMessage)
  }

  const addonMods: Mods = {
    [cls.danger]: Boolean(errorMessage)
  }

  const addon = addonLeft && (
    <div className={classNames(cls.addonLeft, addonMods)}>
      {addonLeft}
    </div>
  )

  const input = (
    <div className={cls.input_container}>
      {addon && <div className={cls.addonLeft}>
        {addon}
      </div>}
      <input className={classNames(cls.Input, mods, className)}
        ref={ref}
        {...rest}
      />
    </div>
  )


  const labelMods: Mods = {
    [cls.danger]: Boolean(errorMessage)
  }

  const labelComp = label && (
    <label className={classNames(cls.label, labelMods)}>{label}</label>
  )

  return (
    <VStack max gap="8">
      {labelComp}
      {input}
    </VStack>    
  )
}))

Input.displayName = 'Input'
