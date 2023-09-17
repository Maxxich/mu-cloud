'use client'

import { useSession } from 'next-auth/react';
import classNames from 'classnames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { SignedIn } from './Signed/Signed';
import { NotSigned } from './NotSigned/NotSigned';
import cls from './User.module.scss'

interface Props {
    className?: string
}

export const User: React.FunctionComponent<Props> = ({
    className
}) => {

    const session = useSession()
    console.log(session)

    if (session.status === 'authenticated') return (
        <SignedIn className={className}/>
    )

    if (session.status === 'loading') return (
        <Skeleton borderRadius='5px' width={110} height={30} className={classNames(cls.skeleton, className)}/>
    )

    return (
        <NotSigned className={className}/>
    );
};