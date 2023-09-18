import { Menu as HeadlessMenu } from '@headlessui/react'
import classNames from 'classnames';
import cls from './ItemsDesktop.module.scss'
import { ItemsComponent } from '../types';



export const ItemsDesktop: ItemsComponent = ({
    children,
    className,
}) => {

    return (
        <HeadlessMenu.Items 
            className={classNames(cls.menu_bg, className)} 
        >
            {children}
        </HeadlessMenu.Items>
    )
};