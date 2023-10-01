'use client'
import { useSession } from 'next-auth/react'
import { Dialog } from './Dialog'


function ConfirmEmailWarningDialog ( ) {
    const session = useSession()
    const status = session.status
    const emailConfirmed = session?.data?.user?.email.confirmed

    if ((status === 'authenticated') && !emailConfirmed) return <Dialog/>

    return false
}

export { ConfirmEmailWarningDialog }

