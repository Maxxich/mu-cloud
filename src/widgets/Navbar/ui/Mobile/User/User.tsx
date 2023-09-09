
'use client'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { NavLink } from '../NavLink/NavLink';
import IconUser from '@/shared/assets/svg/User.svg'
// import Image from 'next/image';
import { getIsViewerSignedIn, getViewerPictureSources } from '@/entity/viewer';

import { avatarPlaceholderSmall } from '@/shared/const/avatarPlaceholderSmall';
import { Image } from '@/shared/ui/Image/Image';
import { useSession } from 'next-auth/react'
import { backendUrl } from '@/shared/const/backendUrl';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Signed } from './Signed';

interface IUserProps {
}



export const User: React.FunctionComponent<IUserProps> = (props) => {

  const session = useSession()
    
  if (session.status === 'authenticated') return (
    <Signed/>
  )

  if (session.status === 'loading') return (
    <div style={{width: 60, display: 'flex', justifyContent: 'space-around'}}>
      <Skeleton
        borderRadius='50%'
        width={30}
        height={30}
      />
    </div>
  )

  return (
    <NavLink
      icon={<IconUser/>}
      href={'/signin'}
    />
  );
};