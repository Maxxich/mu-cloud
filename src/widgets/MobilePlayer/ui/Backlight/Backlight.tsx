import { useSelector } from 'react-redux';
import Image from 'next/image';
import { getSelectedTrack } from '@/entity/player';
import cls from './Backlight.module.scss'


interface IBacklightProps {
}

export const Backlight: React.FunctionComponent<IBacklightProps> = (props) => {

    const track = useSelector(getSelectedTrack)
    
    return (
        <Image 
            className={cls.backlight}
            src={track!.picture_source.square_small}    
            alt='backlight'
            height={100}
            width={100}
        />
    );
};
