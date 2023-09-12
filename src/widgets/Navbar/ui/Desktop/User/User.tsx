import { useSession } from 'next-auth/react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { SignedIn } from './Signed/Signed';
import { NotSigned } from './NotSigned/NotSigned';
import cls from './User.module.scss'

export const User: React.FunctionComponent = (props) => {

    const session = useSession()

    if (session.status === 'authenticated') return (
        <SignedIn/>
    )

    if (session.status === 'loading') return (
        <Skeleton borderRadius='5px' width={110} height={30} className={cls.skeleton}/>
    )

    return (
        <NotSigned/>
    );
};