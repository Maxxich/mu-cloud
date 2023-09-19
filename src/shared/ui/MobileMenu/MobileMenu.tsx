import { SyntheticEvent, useCallback } from 'react';
import { createPortal } from 'react-dom'
import { default as NextLink } from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';
import cls from './MobileMenu.module.scss'

interface IMenuProps {
    children?: React.ReactNode
    isOpen: boolean
    onClose: (e: SyntheticEvent<HTMLDivElement>) => void
}

type CloseMenuEvent = SyntheticEvent<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement>

type OpenMenuEvent = SyntheticEvent<HTMLButtonElement>

const MenuRoot: React.FunctionComponent<IMenuProps> = ({
    isOpen,
    children,
    onClose
}) => {

    
    const onBackgroundClick = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
        onClose(e)
    }, [onClose])

    const onContainerClick = useCallback((event: SyntheticEvent) => {
        event.stopPropagation()
    }, [])
    
    if (!isOpen) return null

    return createPortal(
        <div className={cls.menu_bg} onClick={onBackgroundClick}>
            <div className={cls.menu_container} onClick={onContainerClick}>
                {children}
            </div>
        </div>,
        document.getElementById('menu') ?? document.body
    )
};

interface IMenuButtonProps {
    icon: React.ReactElement
    children: string
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
    onClose: (e: SyntheticEvent<HTMLButtonElement>) => void
}


const Button: React.FunctionComponent<IMenuButtonProps> = ({
    children,
    icon,
    onClick,
    onClose,
}) => {

    const onButtonClick = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        onClick(e)
        onClose(e)
    }, [onClick, onClose])

    return (
        <button className={cls.button}
            onClick={onButtonClick}
        >
            <div className={cls.button_icon_position}>
                {icon}
            </div>
            <span className={cls.button_text}>{children}</span>
        </button>
    )
};

interface IMenuLinkProps {
    icon: React.ReactElement
    children: string
    href: Url
    onClose: (e: SyntheticEvent<HTMLAnchorElement>) => void
}

const Link: React.FunctionComponent<IMenuLinkProps> = ({
    children,
    icon,
    href,
    onClose,
}) => {

    const onLinkClick = useCallback((e: SyntheticEvent<HTMLAnchorElement>) => {
        onClose(e)
    }, [onClose])

    return (
        <NextLink href={href} className={cls.link}
            onClick={onLinkClick}
        >
            <div className={cls.link_icon_position}>
                {icon}
            </div>
            <span className={cls.link_text}>{children}</span>
        </NextLink>
    )
};

export const MobileMenu = Object.assign(MenuRoot, { Button, Link })
export type { OpenMenuEvent, CloseMenuEvent }