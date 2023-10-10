import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { Image } from '@/shared/ui/Image';
import { createUserImagesSrc } from '@/entity/user/lib/createUserImageSrc';
import cls from './Signed.module.scss'
import { Dropdown } from './Dropdown/Dropdown';

interface Props {
    className?: string
}

export const SignedIn: React.FunctionComponent<Props> = ({
    className
}) => {

    const session = useSession()
    const user = session?.data?.user

    if (!user) return null

    const pictures = createUserImagesSrc(user)

    return (
        <div className={classNames(cls.container, className)}>
            <Image
                alt='image'
                backlight
                size='xs'
                variant='circle'
                src={pictures.small}
            />
            <Dropdown/>
        </div>
    );
};