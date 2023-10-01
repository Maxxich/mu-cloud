'use client'
import { useSelector } from 'react-redux';
import { getSelectedTrack } from '@/entity/player';
import { TogglePause } from './TogglePause';
import { SetPreviusTrack } from './SetPreviusTrack';
import { SetNextTrack } from './SetNextTrack';
import { ToggleLike } from './ToggleLike';
import { More } from './More/More';
import cls from './ControlsPanel.module.scss'

interface IControlsPanelProps {

}

export const ControlsPanel: React.FunctionComponent<IControlsPanelProps> = ({}) => {

    const track = useSelector(getSelectedTrack)

    if (!track) return null

    return (
        <div className={cls.container}>
            <ToggleLike id={track.id}/>
            <SetPreviusTrack/>
            <TogglePause/>
            <SetNextTrack/>
            <More track={track}/>
        </div>
    );
};