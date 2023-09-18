import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames';
import cls from './ItemsMobile.module.scss'
import { ItemsComponent } from '../types';




export const ItemsMobile: ItemsComponent = ({
    children,
    className,
    open
}) => {

    if (!open) return null

    return (
        <div
            className={classNames(cls.menu_bg, className)}
        >
            <HeadlessMenu.Items  className={cls.menu_container}>
                {children}
            </HeadlessMenu.Items>
        </div>
    )
};