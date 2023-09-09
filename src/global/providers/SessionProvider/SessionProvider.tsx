'use client'
import { SessionProvider as Session } from 'next-auth/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function SessionProvider({ children }: Props) {
    return (
        <Session>{children}</Session>
    )
}