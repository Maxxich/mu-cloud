'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface IAuthReplaceProps {
    url: string
}

export const AuthReplace: React.FunctionComponent<IAuthReplaceProps> = ({
    url
}) => {
    const router = useRouter()

    useEffect(() => {
        router.replace(url)
    }, [router, url])

    return (
        <></>
    )
}

