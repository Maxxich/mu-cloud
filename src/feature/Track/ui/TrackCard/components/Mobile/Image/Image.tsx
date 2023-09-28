import * as React from 'react';
import { Image } from '@/shared/ui/Image/Image';
import { Animtaion } from '../../PlayingAnimation/Animation';
import { Filter } from '../../Filter/Filter';

interface ITrackImageProps {
  active: boolean
  paused: boolean
  src: string
  alt: string
  className?: string
}

export const TrackImage: React.FunctionComponent<ITrackImageProps> = React.memo(({
    active,
    paused,
    src,
    alt,
    className
}) => {

    const filter = <Filter>
        {
            active ? <Animtaion paused={paused}/> : undefined
        }
    </Filter> 

    return (
        <button
            style={{ background: 'rgba(0,0,0,0)', padding: 0 }}
            className={className}
        >
            <Image
                size={'s'}
                src={src}
                alt={alt}
                addon={filter || undefined}
                showAddon={active}
                disableAddonHover={!active}
            />
        </button>
    );
})

TrackImage.displayName = 'TrackImage'
