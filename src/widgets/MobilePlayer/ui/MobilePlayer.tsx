import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react'
import { getIsPlayerOpened, playerActions } from '@/entity/player'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import cls from './MobilePlayer.module.scss'
import { ActiveSlide, Carousel } from './Carousel/Carousel';
import { BottomPanel } from './BottomPanel/BottomPanel';
import { CloseButton } from './CloseButton/CloseButton';
import { Backlight } from './Backlight/Backlight';

interface IPlayerExpandedProps {
}

export const MobilePlayer: React.FunctionComponent<IPlayerExpandedProps> = (props) => {

  const isOpened = useSelector(getIsPlayerOpened)
  const dispatch = useAppDispatch()

  const [activeSlide, setActiveSlide] = useState<ActiveSlide>('track')

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [isOpened])

  const onBackLightClick = useCallback(() => {
    dispatch(playerActions.closePlayer())
  }, [dispatch])

  return (
    <div className={cls.wrapper}>
        <div className={cls.blackout} onClick={onBackLightClick}/>
      <div className={cls.container} onClick={e => e.stopPropagation()}>
        <Backlight/>
        <CloseButton/>
        <Carousel activeSlide={activeSlide}/>
        <BottomPanel setActiveSlide={setActiveSlide} activeSlide={activeSlide}/>
      </div>
    </div>
  )
};

