import Image from 'next/image';
import classNames from 'classnames';
import { getNoun } from '@/shared/lib/helpers/getNoun/getNoun';
import cls from './MobileHeader.module.scss'
import { Subscribe } from '../Subscribe';
import { HeaderProps } from '../../types/HeaderProps';



export const UserHeaderMobile: React.FunctionComponent<HeaderProps> = ({
    user,
    totalTracks,
    listeningCount,
    viewerId
}) => {
  
    const url = user.picture_source.big


    const nameMods: Mods = {
        [cls.with_button]: viewerId !== user.id
    }

    return (
        <header>
            <div className={cls.image_block}>
                <Image 
                    src={url} 
                    alt='picture' 
                    blurDataURL={url} 
                    placeholder='blur' 
                    fill
                    objectFit='cover'
                    className={cls.center_image}
                />
                <div className={classNames(cls.name, nameMods)}>
                    {user.name}
                </div>
                {viewerId !== user.id && <Subscribe className={cls.button} id={user.id}/>}
            </div>

            <div className={cls.subtitle}>
                {user.adress}
                &nbsp;
                {listeningCount} {getNoun(listeningCount, 'прослушивание', 'прослушивания' , 'прослушиваний')}
                &nbsp;
                {totalTracks} {getNoun(totalTracks, 'трек', 'трека' , 'треков')}
            </div>
        </header>
    );
};