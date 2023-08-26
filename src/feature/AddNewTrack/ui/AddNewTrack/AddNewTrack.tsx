'use client'

import classNames from 'classnames'
import cls from './AddNewTrack.module.scss'
import { memo } from 'react'
import { Form } from '@/shared/ui/Form/Form';
import { NameInput } from './NameInput/NameInput';
import { NameSecondaryInput } from './NameSecondaryInput/NameSecondaryInput';
import { AudioInput } from './AudioInput/AudioInput';
import { ImageInput } from './ImageInput/ImageInput';
import {useState} from 'react'
import { FilesProvider } from '../../model/filesStorage/FilesProvider/FilesProvider';
import { getValidationError } from '../../model/selectors/getValidationError';
import { useSelector } from 'react-redux';
import { Submit } from './Submit/Submit';

interface AddNewTrackProps {
    className?: string;
}

export const AddNewTrack = memo((props: AddNewTrackProps) => {
    const { className } = props
    const classes = classNames(cls.Header, {}, className)

    const [mounted, setMounted] = useState<boolean>(true)
    const error = useSelector(getValidationError)
    
    
    
    return (
        <FilesProvider>
            <button onClick={() => setMounted(prev => !prev)}>Toggle</button>
            {mounted && <div className={classes}>
            <Form>
                    <NameInput/>
                    <NameSecondaryInput/>
                    <AudioInput/>
                    <ImageInput className={cls.last_input}/>
                    <Submit/>
                    <div>{error && error}</div>
            </Form>
            </div>}
        </FilesProvider>
    )
})

AddNewTrack.displayName = 'AddNewTrack'
