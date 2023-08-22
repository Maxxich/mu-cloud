'use client'
import { useRef, useState, LegacyRef, memo, forwardRef} from 'react';
import cls from './FileInput.module.scss'
import classNames from 'classnames';
import { VStack } from '../Stack';

interface IInputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChangeFileSuccess: (file: File) => void
    onChangeFileUndefined: () => void
    label?: string
    addonLeft?: React.ReactElement
    className?: string
    errorMessage?: string
}

export const FileInput: React.FunctionComponent<IInputFileProps>  = memo(forwardRef(({
  label,
  addonLeft,
  placeholder,
  onChangeFileSuccess,
  onChangeFileUndefined,
  className,
  errorMessage = '',
  ...rest
}, ref) => {

    const [ fileName, setFileName]  = useState<string | undefined>()

  const inputRef = useRef<HTMLInputElement>()

  const refCb = (e: HTMLInputElement) => {
    inputRef.current = e;
    if (typeof ref === 'function') {
      ref(e);
    } else if (ref) {
      ref.current = e;
    }
  }

  const handleChange = () => {
    const file = inputRef?.current?.files?.[0]
    if (file?.name) {
        setFileName(file.name)
        onChangeFileSuccess(file)
    } else {
        setFileName(undefined)
        onChangeFileUndefined()
    }

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
        onClick={() => inputRef?.current?.click()}
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
}))

FileInput.displayName = 'FileInput'