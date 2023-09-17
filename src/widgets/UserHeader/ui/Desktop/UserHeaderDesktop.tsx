import classNames from 'classnames';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
import { backendUrl } from '@/shared/const/backendUrl';
import { getNoun } from '@/shared/lib/getNoun/getNoun';
import { avatarPlaceholder } from '@/shared/const/avatarPlaceholderSmall';
import cls from './UserHeader.module.scss'
import { Subscribe } from '../Subscribe';
import { HeaderProps } from '../../types/HeaderProps';

export const UserHeaderDesktop: React.FunctionComponent<HeaderProps> = ({
    user,
    totalTracks,
    listeningCount,
    viewerId
}) => {

    console.log(viewerId)

    const mods: Mods = {
        [cls.desktop]: !isMobile
    }

    const classes = classNames(
        cls.header,
        mods
    )
        
    const url = user.picture_source.big ? (backendUrl + '/' + user.picture_source.big) : avatarPlaceholder

    return (
        <header 
            className={classes}
        >
            <Image 
                src={url} 
                alt='picture' 
                blurDataURL={url} 
                placeholder='blur' 
                height={200}
                width={200}
                className={cls.center_image}
            />
          
            <div className={cls.info}>
                <h1 className={cls.name}>
                    {user.name}
                </h1>
                <div className={cls.subtitle}>
                    {user.adress}
                    &nbsp;
                    {listeningCount} {getNoun(listeningCount, 'прослушивание', 'прослушивания' , 'прослушиваний')}
                    &nbsp;
                    {totalTracks} {getNoun(totalTracks, 'трек', 'трека' , 'треков')}
                </div>

            </div>

            {viewerId !== user.id && <Subscribe className={cls.button} id={user.id}/>}
        </header>
    );
};