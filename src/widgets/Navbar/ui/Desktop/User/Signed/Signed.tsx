import { Image } from '@/shared/ui/Image/Image';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconGear from '@/shared/assets/svg/Gear.svg'
import IconLogout from '@/shared/assets/svg/Logout.svg'
import { useSelector } from 'react-redux';
import { getViewerPictureSources, viewerActions } from '@/entity/viewer';
import { backendUrl } from '@/shared/const/backendUrl';
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import cls from './Signed.module.scss'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useCallback } from 'react';

export const SignedIn: React.FunctionComponent = () => {

    const pictures = useSelector(getViewerPictureSources)
    const dispatch = useAppDispatch()
    const logout = useCallback(() => {
        dispatch(viewerActions.logOut())
    }, [dispatch])

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