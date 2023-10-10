import { SyntheticEvent } from 'react'
import classNames from 'classnames';
import Link from 'next/link'
import { Menu as HeadlessMenu } from '@headlessui/react'
import cls from './ItemDesktop.module.scss'
import { ItemProps } from './types';

export type ItemComponent = React.FunctionComponent<ItemProps>

export const Item: React.FunctionComponent<ItemProps> = ({
    children,
    icon,
    href,
    component,
    onClick,
    danger
}) => {

    const onClickWrapped = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        // @ts-ignore
        onClick && onClick(e)
    }

    if (component === 'link') return (
        <HeadlessMenu.Item>
            {({ active }) => (
                <Link 
                    href={href}
                    className={classNames(
                        cls.item,
                        {
                            [cls.active]: active
                        }
                    )}
                    // @ts-ignore
                    onClick={onClickWrapped}
                >
                    <div className={classNames(cls.icon_position, {
                        [cls.danger]: danger
                    })}>
                        {icon}
                    </div>
                    <span className={classNames(cls.text, {
                        [cls.danger]: danger
                    })}>{children}</span>
                </Link>
            )}
        </HeadlessMenu.Item>
    )

    if (component === 'button') return (
        <HeadlessMenu.Item>
            {({ active }) => (
                <button 
                    onClick={onClickWrapped}
                    className={classNames(
                        cls.item,
                        {
                            [cls.active]: active
                        }
                    )}
                >
                    <div className={classNames(cls.icon_position, {
                        [cls.danger]: danger
                    })}>
                        {icon}
                    </div>
                    <span className={classNames(cls.text, {
                        [cls.danger]: danger
                    })}>{children}</span>
                </button>
            )}
        </HeadlessMenu.Item>
    )

    return null
};