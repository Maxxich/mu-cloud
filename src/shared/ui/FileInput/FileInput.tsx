'use client'
import { useRef, useState, SyntheticEvent, memo, forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import cls from './FileInput.module.scss'
import { VStack } from '../Stack';

interface IInputFileProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onChangeFileSuccess: (file: File) => void
    onChangeFileUndefined: () => void
    label?: string
    addonLeft?: React.ReactElement
    isError?: boolean
    initialFileName?: string
    inputTestId?: string
    className?: string
}

export const FileInput: React.FunctionComponent<IInputFileProps>  = memo(forwardRef(({
    label,
    addonLeft,
    placeholder,
    onChangeFileSuccess,
    onChangeFileUndefined,
    className,
    isError = '',
    initialFileName,
    inputTestId,
    ...rest
}, ref) => {

    const [ fileName, setFileName]  = useState<string | undefined>(initialFileName)

    const inputRef = useRef<HTMLInputElement>()


    useEffect(() => {
        setFileName(initialFileName)
    }, [initialFileName])

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

    const onClick = (e: SyntheticEvent) => {
        e.preventDefault()
        inputRef?.current?.click()
    }

    const labelMods: Mods = {
        [cls.danger]: isError
    }

    const labelComp = label && (
        <label className={classNames(cls.label, labelMods)}>{label}</label>
    )

    const invisibleInput = (
        <input className={classNames(cls.invisible_input)}
            type={'file'} 
            ref={refCb} 
            onChange={handleChange}
            data-testid={inputTestId}
        />
    )

    const fileButtonTextMods: Mods = {
        [cls.secondary]: !fileName,
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

    const fileButtonMods = {
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.danger]: isError
    }

    const fileButton = (
        <button className={classNames(cls.file_button, fileButtonMods)}
            onClick={onClick}
            {...rest}
        >
            {addon}
            <div className={classNames(cls.file_button_text, fileButtonTextMods)}>
                {fileName || placeholder}
            </div>
        </button>
    )

    const stackMods: Mods = {
        [cls.disabled]: rest.disabled
    }

    return (
        <VStack max gap="8" className={classNames(cls.margin, stackMods,  className)}>
            {invisibleInput}
            {labelComp}
            {fileButton}
        </VStack>
    );
}))

FileInput.displayName = 'FileInput'