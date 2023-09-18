import { SyntheticEvent } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'

interface LinkProps {
    icon: React.ReactElement
    children: string
    href: Url
    onClick?: never
    component: 'link'
}

interface ButtonProps {
    icon: React.ReactElement
    children: string
    href?: never 
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
    component: 'button'
}

export type ItemProps = LinkProps | ButtonProps