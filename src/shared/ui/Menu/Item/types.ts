import { SyntheticEvent } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'

interface LinkProps {
    icon: React.ReactElement
    children: string
    href: Url
    onClick?: never
    component: 'link'
    danger?: boolean
}

interface ButtonProps {
    icon: React.ReactElement
    children: string
    href?: never 
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
    component: 'button'
    danger?: boolean
}

export type ItemProps = LinkProps | ButtonProps