import { SyntheticEvent, useCallback } from 'react';
import cls from './Menu.module.scss'
import { createPortal } from 'react-dom'
import { default as NextLink} from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';

interface IMenuProps {
    children?: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

const MenuRoot: React.FunctionComponent<IMenuProps> = ({
    children,
    onClose
}) => {

    const onBackgroundClick = useCallback(() => {
        onClose()
    }, [onClose])

    const onContainerClick = useCallback((event: SyntheticEvent) => {
        event.stopPropagation()
    }, [])

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
    onClick: () => void
    onClose: () => void
}


const Button: React.FunctionComponent<IMenuButtonProps> = ({
    children,
    icon,
    onClick,
    onClose,
}) => {

    const onButtonClick = useCallback(() => {
        onClick()
        onClose()
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
    onClose: () => void
}

const Link: React.FunctionComponent<IMenuLinkProps> = ({
    children,
    icon,
    href,
    onClose,
}) => {

    const onLinkClick = useCallback(() => {
        onClose()
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

export const Menu = Object.assign(MenuRoot, { Button, Link })


