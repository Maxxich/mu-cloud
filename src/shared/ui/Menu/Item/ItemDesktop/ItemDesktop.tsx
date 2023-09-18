import { SyntheticEvent } from 'react'
import classNames from 'classnames';
import Link from 'next/link'
import { Menu as HeadlessMenu } from '@headlessui/react'
import cls from './ItemDesktop.module.scss'
import { ItemProps } from '../types';

export const ItemDesktop: React.FunctionComponent<ItemProps> = ({
    children,
    icon,
    href,
    component,
    onClick
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
                    <div className={cls.icon_position}>
                        {icon}
                    </div>
                    <span className={cls.text}>{children}</span>
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
                    <div className={cls.icon_position}>
                        {icon}
                    </div>
                    <span className={cls.text}>{children}</span>
                </button>
            )}
        </HeadlessMenu.Item>
    )

    return null
};