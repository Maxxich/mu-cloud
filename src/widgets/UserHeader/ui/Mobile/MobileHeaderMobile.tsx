import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { backendUrl } from '@/shared/const/backendUrl';
import { User } from '@/entity/user';
import { avatarPlaceholder } from '@/shared/const/avatarPlaceholderSmall';
import cls from './MobileHeader.module.scss'
import { Subscribe } from '../Subscribe';
import classNames from 'classnames';

interface IHeaderProps {
    user: User
}

export const UserHeaderMobile: React.FunctionComponent<IHeaderProps> = ({
    user,
}) => {
    const session = useSession()
    const viewerId = session?.data?.user.id
        
    const url = user.picture_source.big ? (backendUrl + '/' + user.picture_source.big) : avatarPlaceholder


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
                20000 прослушиваний
                &nbsp;
                10 треков
            </div>
        </header>
    );
};