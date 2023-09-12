'use client'

import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { getIsViewerChecking, getIsViewerSignedIn } from '@/entity/viewer';

interface IAuthProtectionProps {
    children?: React.ReactNode
}

export const AuthProtection: React.FunctionComponent<IAuthProtectionProps> = ({
    children
}) => {

    const isViewerSignedIn = useSelector(getIsViewerSignedIn)
    const isChecking = useSelector(getIsViewerChecking)
    const router = useRouter()

    useEffect(() => {
        if (isChecking) return
        if (!isViewerSignedIn) {
            router.push('/signin')
        }   
    }, [isViewerSignedIn, router, isChecking])

    if (!isViewerSignedIn) return null

    return children;
};