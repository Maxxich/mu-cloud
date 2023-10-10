'use client'
import * as React from 'react';
import { Image } from '@/shared/ui/Image';
import IconPlay from '@/shared/assets/svg/Play.svg'
import cls from './Image.module.scss'
import { Animtaion } from '../../PlayingAnimation/Animation';
import { Filter } from '../../Filter/Filter';

interface ITrackImageProps {
  active: boolean
  paused: boolean
  onClick?: (e: any) => void,
  src: string
  alt: string
  className?: string
}

export const TrackImage: React.FunctionComponent<ITrackImageProps> = React.memo(({
    active,
    paused,
    onClick,
    src,
    alt,
    className
}) => {

    const filter = <Filter>
        {
            active 
                ? <Animtaion paused={paused}/>
                : <IconPlay className={cls.icon}/>
        }
    </Filter> 

    return (
        <button
            onClick={onClick}
            style={{ background: 'rgba(0,0,0,0)', padding: 0, cursor: 'pointer' }}
            className={className}
        >
            <Image
                size={'s'}
                src={src}
                alt={alt}
                addon={filter || undefined}
                showAddon={active}
            />
        </button>
    );
})

TrackImage.displayName = 'TrackImage'
