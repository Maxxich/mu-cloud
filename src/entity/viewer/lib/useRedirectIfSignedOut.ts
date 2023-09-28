'use client'

import { useSession } from 'next-auth/react'
import { redirect, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectIfSignedOut = () => {
    const session = useSession()
    const pathname = usePathname()

    useEffect(() => {
        if (session.status === 'unauthenticated') {
            redirect('/signin?callbackUrl='+ pathname)
        }
    }, [session.status, pathname])
}