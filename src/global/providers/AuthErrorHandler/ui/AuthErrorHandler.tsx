'use client'
import { useSession, signOut } from 'next-auth/react';
import { ReactNode, useEffect } from 'react'

interface IAuthErrorHandlerProps {
    children: ReactNode
}

export const AuthErrorHandler: React.FunctionComponent<IAuthErrorHandlerProps> = ({ children }) => {

    const { data } = useSession()
    const error = data?.error
   
    useEffect(() => {
        if (error === 'inactive-user') {
            signOut({
                redirect: true,
                callbackUrl:  `/signin?callbackUrl=${window.location.pathname ?? '/'}`
            })
        }
    }, [error])

    return children;
};