import { signOut, useSession } from 'next-auth/react';
import { Image } from '@/shared/ui/Image/Image';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconGear from '@/shared/assets/svg/Gear.svg'
import IconLogout from '@/shared/assets/svg/Logout.svg'
import { backendUrl } from '@/shared/const/backendUrl';
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import cls from './Signed.module.scss'

export const SignedIn: React.FunctionComponent = () => {

    const session = useSession()
    
    const pictures = session?.data?.user.picture_source
    const logout = () => {
      signOut()
    }

  return (
    <div className={cls.container}>
      <Image
        alt='image'
        backlight
        size='xs'
        variant='circle'
        src={pictures?.small ? (backendUrl + '/' + pictures.small) : (backendUrl + '/' + avatarPlaceholderSmall)}
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