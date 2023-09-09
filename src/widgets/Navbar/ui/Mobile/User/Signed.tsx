import { useCallback, useState } from 'react';
import { useSession, signOut } from 'next-auth/react'
import { Image } from '@/shared/ui/Image/Image';
import { backendUrl } from '@/shared/const/backendUrl';
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import { CloseMenuEvent, Menu, OpenMenuEvent } from '@/shared/ui/Menu/Menu';
import UserSvg from '@/shared/assets/svg/User.svg'
import LogoutSvg from '@/shared/assets/svg/Logout.svg'
import cls from './User.module.scss'

interface ISignedProps {
}

export const Signed: React.FunctionComponent<ISignedProps> = (props) => {
    const session = useSession()
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    const onCloseMenu = useCallback((e: CloseMenuEvent) => {
        e.stopPropagation()
        setMenuOpen(false)
    }, [setMenuOpen])

    const onOpenMenu = useCallback((e: OpenMenuEvent) => {
        e.stopPropagation()
        setMenuOpen(true)
    }, [setMenuOpen])
    
    const pictures = session?.data?.user.picture_source
    const src = pictures 
      ? (pictures.small
        ? (backendUrl + '/' + pictures.small) 
        : (backendUrl + '/' + avatarPlaceholderSmall))
      : backendUrl + '/' + avatarPlaceholderSmall
    
  return (
    <>
        <button onClick={onOpenMenu}>
            <Image
                src={src}
                alt=''
                variant='circle'
                backlight
                size='xs'
                className={cls.image}
            />
        </button>
        <Menu
            isOpen={isMenuOpen}
            onClose={onCloseMenu}
        >
            <Menu.Link 
                href={'/profile'}
                icon={<UserSvg/>}
                onClose={onCloseMenu}
            >
                Профиль
            </Menu.Link>
            <Menu.Button 
                icon={<LogoutSvg/>}
                onClose={onCloseMenu}
                onClick={() => signOut()}
            >
                Выйти
            </Menu.Button>
        </Menu>
    </>
  );
};