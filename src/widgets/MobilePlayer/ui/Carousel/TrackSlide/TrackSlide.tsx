'use client'
import { useSelector } from 'react-redux';
import { getIsPaused, getSelectedTrack } from '@/entity/player';
import { TimeLine } from '@/feature/TimeLine';
import cls from './TrackSlide.module.scss'
import { Image } from './Image/Image';
import { Info } from './Info/Info';
import { ControlsPanel } from './ControlsPanel/ControlsPanel';

interface ITrackSlideProps {
}


export const TrackSlide: React.FunctionComponent<ITrackSlideProps> = (props) => { 
    const isPaused = useSelector(getIsPaused)
    const track = useSelector(getSelectedTrack)
  
    return (
        <div className={cls.container}>
            <div className={cls.image_container}>
                <Image
                    src={'http://localhost:5001/' + track!.picture_source.square}
                    smaller={isPaused}
                    alt={track!.name}
                />
            </div>
            <div className={cls.controls_container}>
                <TimeLine variant='mobile'/>
                <Info/>
                <ControlsPanel/>
            </div>
        </div>
    );
};