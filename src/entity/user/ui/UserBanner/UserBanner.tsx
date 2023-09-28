import { BannerSwiper } from '@/shared/ui/BannerSwiper/BannerSwiper';
import { UserCard } from '../UserCard/UserCard';
import { User } from '../../model/types/user';

interface IProps {
    users: User[]
    className?: string
    marginBottom?: boolean
    isMobile: boolean
}


export const UserBanner: React.FunctionComponent<IProps> = ({
    users,
    className,
    marginBottom,
    isMobile
}) => {

    return (
        <BannerSwiper marginBottom={marginBottom}  className={className} isMobile={isMobile}>
            {users.map(u => (
                <UserCard 
                    href={`/users/${u.adress}`}
                    image_src={u.picture_source.small} 
                    name={u.name}
                    variant={'column'}
                    key={u.id}
                />
            ))}
        </BannerSwiper>
    );
};
