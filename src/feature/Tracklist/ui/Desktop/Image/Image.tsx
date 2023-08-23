'use client'
import * as React from 'react';
import { Filter } from '../../Filter/Filter';
import { Image } from '@/shared/ui/Image/Image';
import { Animtaion } from '../../PlayingAnimation/Animation';
import Icon from '@/shared/assets/svg/svg.svg'
import cls from './Image.module.scss'

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
            : <Icon className={cls.icon}/>
    }
  </Filter> 

  return (
    <button
        onClick={onClick}
        style={{background: 'rgba(0,0,0,0)', padding: 0, cursor: 'pointer'}}
    >
        <Image
            size={'s'}
            src={src}
            alt={alt}
            backlight
            addon={filter || undefined}
            className={className}
            showAddon={active}
        />
    </button>
  );
})

TrackImage.displayName = 'TrackImage'
