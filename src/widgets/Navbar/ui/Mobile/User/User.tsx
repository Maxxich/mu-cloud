
'use client'
import { useSession } from 'next-auth/react'
import IconUser from '@/shared/assets/svg/User.svg'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Signed } from './Signed';
import { NavLink } from '../NavLink/NavLink';

interface IUserProps {
}



export const User: React.FunctionComponent<IUserProps> = (props) => {

    const session = useSession()
    
    if (session.status === 'authenticated') return (
        <Signed/>
    )

    if (session.status === 'loading') return (
        <div style={{ width: 60, display: 'flex', justifyContent: 'space-around' }}>
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