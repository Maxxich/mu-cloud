import classNames from 'classnames';
import cls from './ToggleSlide.module.scss'
import { ActiveSlide } from '../../Carousel/Carousel';
import { Dispatch, SetStateAction, useCallback } from 'react';
import IconPlaylist from '@/shared/assets/svg/Playlist.svg'

interface IToggleSlideProps {
  activeSlide: ActiveSlide
  setActiveSlide: Dispatch<SetStateAction<ActiveSlide>>
}

export const ToggleSlide: React.FunctionComponent<IToggleSlideProps> = ({
  activeSlide,
  setActiveSlide
}) => {

  const onToggleActiveSlide = useCallback(() => {
    setActiveSlide(prev => {
      if (prev === 'next') return 'track'
      else return 'next'
    })
  }, [setActiveSlide])

  const circleMods: Mods = {
    [cls.primary]: activeSlide === 'track',
    [cls.secondary]: activeSlide === 'next',
  }

  
  const iconMods: Mods = {
    [cls.primary]: activeSlide === 'next',
    [cls.secondary]: activeSlide === 'track',
  }

  return <button
    onClick={onToggleActiveSlide}
    className={cls.Button}
  > 
    <div className={classNames(cls.Circle, circleMods)}/>
    <IconPlaylist className={classNames(iconMods)}/>
  </button>;
};