import { Dispatch, SetStateAction } from 'react';
import cls from './BottomPanel.module.scss'
import { Repeat } from './Repeat';
import { Shuffle } from './Shuffle';
import { ToggleSlide } from './ToggleSlide/ToggleSlide';
import { ActiveSlide } from '../Carousel/Carousel';

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