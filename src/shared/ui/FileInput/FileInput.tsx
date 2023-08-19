'use client'
import { forwardRef, useRef, useState } from 'react';
import cls from './FileInput.module.scss'
import classNames from 'classnames';
import { VStack } from '../Stack';

interface IInputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: any) => void
    label?: string
    addonLeft?: React.ReactElement
    className?: string
    errorMessage?: string
    ref?: React.Ref<HTMLInputElement>

}
export const FileInput: React.FunctionComponent<IInputFileProps>  = forwardRef(({
  label,
  addonLeft,
  placeholder,
  onChange,
  className,
  errorMessage = '',
  ...rest
}, ref) => {

    const [ fileName, setFileName]  = useState<string | undefined>()

  const handlePictureChange = () => {
    if (clickRef?.current?.files){
      setFileName(clickRef.current.files[0]?.name || '')
    } else {
      setFileName(undefined)
    }
  }

  const clickRef = useRef<HTMLInputElement>()

  const refCb = (e: HTMLInputElement) => {
    clickRef.current = e;
    if (typeof ref === 'function') {
      ref(e);
    } else if (ref) {
      ref.current = e;
    }
  }

  const handleChange = (e: any) => {
    onChange(e); 
    handlePictureChange()
  }

  const error = errorMessage && (
    <div className={cls.error}>{errorMessage}</div>
  )

  const labelMods: Mods = {
    [cls.danger]: Boolean(errorMessage)
  }

  const labelComp = label && (
    <label className={classNames(cls.label, labelMods)}>{label}</label>
  )

  const invisibleInput = (
    <input className={classNames(cls.invisible_input)}
    {...rest}
    type={'file'} 
    ref={refCb} 
    onChange={handleChange}
  />
  )

  const fileButtonTextMods: Mods = {
    [cls.secondary]: !fileName,
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

  const fileButtonMods = {
    [cls.withAddonLeft]: Boolean(addonLeft),
  }

  const fileButton = (
    <button className={classNames(cls.file_button, fileButtonMods)}
        onClick={() => clickRef?.current?.click()}
    >
        {addon}
        <div className={classNames(cls.file_button_text, fileButtonTextMods)}>
            {fileName || placeholder}
        </div>
    </button>
  )

  return (
    <VStack max gap="8">
        {invisibleInput}
        {labelComp}
        {fileButton}
        {error}
    </VStack>
  );
})

FileInput.displayName = 'FileInput'