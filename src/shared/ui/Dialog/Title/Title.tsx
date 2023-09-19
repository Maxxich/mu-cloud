import { ComponentProps } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react'
import cls from './Title.module.scss'

type HeadlessTitleProps =  ComponentProps<typeof HeadlessDialog.Title>
export type TitleComponent = React.FunctionComponent<HeadlessTitleProps>

export const Title: TitleComponent = ({
    children,
    ...rest
}) => {
    return (
        <HeadlessDialog.Title {...rest} className={cls.title}>
            {children}
        </HeadlessDialog.Title>
    );
};