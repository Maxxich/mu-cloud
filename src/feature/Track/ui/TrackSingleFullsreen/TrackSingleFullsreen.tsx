import classNames from 'classnames';
import { Track } from '@/entity/track';
import cls from './TrackCardSingle.module.scss'
import { Info } from './Info/Info';
import { Actions } from './Actions/Actions';
import { ImageBlock } from './ImageBlock/ImageBlock';
import { BlurImage } from './BlurImage/BlurImage';


interface ITrackLayoutSingleProps {
    track: Track
    listenings: number
    isMobile: boolean
    className?: string
}

export const TrackSingleFullsreen: React.FunctionComponent<ITrackLayoutSingleProps> = ({
    track,
    listenings,
    isMobile,
    className
}) => {
    return (
        <div className={classNames(cls.container, className)}>
            <BlurImage track={track}/>
            <div className={cls.inner}>
                <ImageBlock
                    track={track}
                />
                <Info
                    track={track}
                    listenings={listenings}
                    isMobile={isMobile}
                />
            </div>
            <Actions
                track={track}
                isMobile={isMobile}
            />
        </div>
    );
};