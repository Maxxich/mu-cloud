import { useSelector } from 'react-redux';
import { getSelectedTrack } from '@/entity/player';
import cls from './Backlight.module.scss'

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
