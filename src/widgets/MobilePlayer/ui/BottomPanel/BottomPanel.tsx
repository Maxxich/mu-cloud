import { IconButton } from '@/shared/ui/IconButton/IconButton';
import cls from './BottomPanel.module.scss'
import Icon from '@/shared/assets/svg/svg.svg'
import { ActiveSlide } from '../Carousel/Carousel';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { Repeat } from './Repeat';
import { Shuffle } from './Shuffle';
import { ToggleSlide } from './ToggleSlide/ToggleSlide';

interface IBottomPanelProps {
    setActiveSlide:  Dispatch<SetStateAction<ActiveSlide>>
    activeSlide: ActiveSlide
}

export const BottomPanel: React.FunctionComponent<IBottomPanelProps> = ({
    setActiveSlide,
    activeSlide
}) => {

  return ( 
    <div className={cls.container}>
        <Repeat/>
        <ToggleSlide activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
        <Shuffle/>
    </div>
  );
};