import { useTransition, animated } from '@react-spring/web';
import { SyntheticEvent, useCallback } from 'react';
import { createPortal } from 'react-dom'
import { default as NextLink } from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';
import classNames from 'classnames';
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
    
    
    const transition = useTransition(isOpen, {
        from: { opacity: 0, y: window.innerHeight / 2 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: window.innerHeight / 2 },
        config: {
            duration: 150,
        },
    })

    return transition((style, item) => 
        item ? createPortal(
            <animated.div className={cls.menu_bg} onClick={onBackgroundClick} style={{ opacity: style.opacity }}>
                <animated.div className={cls.menu_container} onClick={onContainerClick} style={style}>
                    {children}
                </animated.div>
            </animated.div>,
            document.getElementById('menu') ?? document.body
        ) : null
    )
};

interface IMenuButtonProps {
    icon: React.ReactElement
    children: string
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => void
    onClose: (e: SyntheticEvent<HTMLButtonElement>) => void
    danger?: boolean
}


const Button: React.FunctionComponent<IMenuButtonProps> = ({
    children,
    icon,
    onClick,
    onClose,
    danger
}) => {

    const onButtonClick = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        onClick(e)
        onClose(e)
    }, [onClick, onClose])

    return (
        <button className={cls.button}
            onClick={onButtonClick}
        >
            <div className={classNames(cls.button_icon_position, {
                [cls.danger]: danger
            })}>
                {icon}
            </div>
            <span className={classNames(cls.button_text, {
                [cls.danger]: danger
            })}>{children}</span>
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