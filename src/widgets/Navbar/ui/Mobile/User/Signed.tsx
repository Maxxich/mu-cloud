'use client'
import { useSession, signOut } from 'next-auth/react'
import { Image } from '@/shared/ui/Image/Image';
import { Menu } from '@/shared/ui/Menu/Menu';
import UserSvg from '@/shared/assets/svg/User.svg'
import LogoutSvg from '@/shared/assets/svg/Logout.svg'
import { createUserImagesSrc } from '@/entity/user/lib/createUserImageSrc';
import cls from './User.module.scss'

interface ISignedProps {
}

export const Signed: React.FunctionComponent<ISignedProps> = (props) => {
    const session = useSession()
    
    const pictures = createUserImagesSrc(session!.data!.user)
    const src = pictures.small
    
    return (
        <Menu.Wrapper>
            {({ open }) => (
                <>
                    <Menu.Button>
                        <button>
                            <Image
                                src={src}
                                alt=''
                                variant='circle'
                                backlight
                                size='xs'
                                className={cls.image}
                            />
                        </button>
                    </Menu.Button>
                    <Menu.Items
                        open={open}
                    >
                        <Menu.Item 
                            component={'link'}
                            href={'/profile'}
                            icon={<UserSvg/>}
                        >
                        Профиль
                        </Menu.Item>
                        <Menu.Item 
                            component={'button'}
                            icon={<LogoutSvg/>}
                            onClick={() => signOut()}
                        >
                        Выйти
                        </Menu.Item>
                    </Menu.Items>  
                </>
            )}
        </Menu.Wrapper>
    );
};