'use client'
import { useTransition } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened } from '@/entity/player';
import { Track } from '@/entity/track';
import { DesktopVisualizerComponent } from './DesktopVisualizerComponent';

interface IDesktopVisualizerProps {
    selectedTrack: Track
}

export const DesktopVisualizer: React.FunctionComponent<IDesktopVisualizerProps> = ({
    selectedTrack
}) => {

    const isOpened = useSelector(getIsPlayerOpened)

    const transition = useTransition(isOpened, {
        from: { opacity: 0, y: window.innerHeight * 2 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: window.innerHeight * 2 },
        config: {
            duration: 300,
        },
    })
    
    return transition((style, item) => 
        item ? <DesktopVisualizerComponent style={style} track={selectedTrack}/> : null
    )
}
