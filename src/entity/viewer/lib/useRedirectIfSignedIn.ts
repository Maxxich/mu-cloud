'use client'

import { useSelector } from 'react-redux'
import { getIsViewerSignedIn } from '../model/selectors/getIsViewerSignedIn/getIsViewerSignedIn'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectIfSignedIn = () => {
    const isSignedIn = useSelector(getIsViewerSignedIn)

    const router = useRouter()

    useEffect(() => {
        if (isSignedIn) {
            if (document.referrer.split('/')[2]!=location.hostname) {
                router.replace('/')
            } else {
                router.back()
            }
        }
    }, [isSignedIn, router])
}