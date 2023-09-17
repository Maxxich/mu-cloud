import classNames from 'classnames';
import { signOut, useSession } from 'next-auth/react';
import { Image } from '@/shared/ui/Image/Image';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconGear from '@/shared/assets/svg/Gear.svg'
import IconLogout from '@/shared/assets/svg/Logout.svg'
import { createUserImagesSrc } from '@/entity/user/lib/createUserImageSrc';
import cls from './Signed.module.scss'

interface Props {
    className?: string
}

export const SignedIn: React.FunctionComponent<Props> = ({
    className
}) => {

    const session = useSession()
    const user = session!.data!.user
    const pictures = createUserImagesSrc(user)
    const logout = () => {
        signOut()
    }

    return (
        <div className={classNames(cls.container, className)}>
            <Image
                alt='image'
                backlight
                size='xs'
                variant='circle'
                src={pictures.small}
            />
            <IconButton
                icon={<IconGear/>}
                size={'s'}
            />
            <IconButton
                icon={<IconLogout/>}
                size={'s'}
                onClick={logout}
            />
        </div>
    );
};