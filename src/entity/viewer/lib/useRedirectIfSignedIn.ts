'use client'

import { useSession } from 'next-auth/react'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectIfSignedIn = () => {
    const session = useSession()
    const searchParams = useSearchParams()
    useEffect(() => {
        if (session.status === 'authenticated') {
            redirect(searchParams.get('callbackUrl') ?? '/')
        }
    }, [session.status])
}