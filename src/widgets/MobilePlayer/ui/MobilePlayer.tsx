'use client'
import { useEffect } from 'react'
import { useTransition } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened } from '@/entity/player';
import { MobilePlayerComponent } from './MobilePlayerComponent';
interface IMobilePlayerProps {
}

export const MobilePlayer: React.FunctionComponent<IMobilePlayerProps> = (props) => {

    const isOpened = useSelector(getIsPlayerOpened)

    const transition = useTransition(isOpened, {
        from: { opacity: 0, y: window.innerHeight * 2 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: window.innerHeight * 2 },
        config: {
            duration: 500,
        },
    })

    useEffect(() => {
        if (isOpened) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isOpened])

    return transition((style, item) => 
        item ? <MobilePlayerComponent style={style}/> : null
    )
};