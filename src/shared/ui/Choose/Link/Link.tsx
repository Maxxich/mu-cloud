import { default as NextLink } from 'next/link';
import { ReactNode, memo } from 'react'
import cls from './Link.module.scss'

interface ILinkProps {
    href: string
    children: ReactNode
}

export type LinkComponent = React.FunctionComponent<ILinkProps>

export const Link: LinkComponent =  memo(({
    href,
    children
}) => {
    return (
        <NextLink href={href} className={cls.link}>
            {children}
        </NextLink>
    )
})

Link.displayName = 'Link'