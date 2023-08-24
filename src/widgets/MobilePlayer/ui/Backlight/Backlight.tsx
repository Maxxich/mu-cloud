import { useSelector } from 'react-redux';
import cls from './Backlight.module.scss'
import { getSelectedTrack } from '@/entity/player';

interface IBacklightProps {
}

export const Backlight: React.FunctionComponent<IBacklightProps> = (props) => {

    const track = useSelector(getSelectedTrack)
    
  return (
    <img 
        className={cls.backlight}
        src={'http://localhost:5001/' + track!.picture_source.square}    
    />
  );
};
