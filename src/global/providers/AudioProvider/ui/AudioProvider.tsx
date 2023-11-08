'use client'
import { memo, FunctionComponent, useState, useEffect } from 'react';
import { playerActions } from '@/entity/player';
import { useAppDispatch } from '../../StoreProvider/config/store';
import { AudioContext } from '../config/AudioContext';



interface Props {
    children?: React.ReactNode
}


export const AudioProvider: FunctionComponent<Props> = memo(({
    children
}) => {

    const [audio, setAudio] = useState<HTMLAudioElement>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const audio = new Audio()
        audio.crossOrigin  = 'anonymous'
        audio.onprogress = () => {
            const { buffered, duration } = audio

            if (duration > 0) {
                const bufferedTime = buffered.end(buffered.length - 1);
                const percentage = (bufferedTime / duration) * 100;
                const reducedPercentage = (percentage < 0)
                    ? 0
                    : (percentage > 100) 
                        ? 100
                        : percentage
                dispatch(playerActions.setLoadedPercentage(reducedPercentage))
            } else {
                dispatch(playerActions.setLoadedPercentage(0))
            }
        }
        setAudio(audio)

        return () => {
            audio.onprogress = null
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!audio) return null

    return <AudioContext.Provider value={audio}>{children}</AudioContext.Provider>;
})

AudioProvider.displayName = 'AudioProvider'