'use client'
import { memo, FunctionComponent } from 'react';
import { AudioContext } from '../config/AudioContext';


const audio = new Audio()
audio.crossOrigin = 'anonymous'

interface Props {
    children?: React.ReactNode
}


export const AudioProvider: FunctionComponent<Props> = memo(({
    children
}) => {

    return <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>;
})

AudioProvider.displayName = 'AudioProvider'