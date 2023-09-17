'use client'

import { default as NextLink } from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import cls from './Links.module.scss'

export interface ILinkProps {
    href: string
    children: string
}

export const Link: React.FunctionComponent<ILinkProps> = ({
    href,
    children
}) => {

    const pathname = usePathname()
    const mods: Mods = {
        [cls.primary]: pathname === href
    }


    return <NextLink
        className={classNames(cls.link, mods)}
        href={href}
    >
        {children}
    </NextLink>;
};

