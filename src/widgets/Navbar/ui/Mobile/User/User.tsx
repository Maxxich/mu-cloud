
'use client'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { NavLink } from '../NavLink/NavLink';
import IconUser from '@/shared/assets/svg/User.svg'
// import Image from 'next/image';
import { getIsViewerSignedIn, getViewerPictureSources } from '@/entity/viewer';
import cls from './User.module.scss'
import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import { Image } from '@/shared/ui/Image/Image';

interface IUserProps {
}



export const User: React.FunctionComponent<IUserProps> = (props) => {

  const isSigned = useSelector(getIsViewerSignedIn)
  const picture_source = useSelector(getViewerPictureSources)
  const src = picture_source 
    ? (picture_source.small
      ? ('http://localhost:5001/' + picture_source.small) 
      : ('http://localhost:5001/' + avatarPlaceholderSmall))
    : 'http://localhost:5001/' + avatarPlaceholderSmall

  if (isSigned) return (
    <Link href={'/profile'} style={{width: 60}}>
      <Image
        src={src}
        alt=''
        variant='circle'
        backlight
        size='xs'
        className={cls.image}
      />
    </Link>
  )

  return (
    <NavLink
      icon={<IconUser/>}
      href={'/signin'}
    />
  );
};