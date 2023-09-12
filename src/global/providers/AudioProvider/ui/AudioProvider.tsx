'use client'
import { memo, FunctionComponent, useState, useEffect } from 'react';
import { AudioContext } from '../config/AudioContext';



interface Props {
    children?: React.ReactNode
}


export const AudioProvider: FunctionComponent<Props> = memo(({
    children
}) => {

    const [audio, setAudio] = useState<HTMLAudioElement>()

    useEffect(() => {
        const audio = new Audio()
        audio.crossOrigin  = 'anonymous'
        setAudio(audio)
    }, [])

    if (!audio) return null

    return <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>;
})

AudioProvider.displayName = 'AudioProvider'