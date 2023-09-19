import { ComponentProps, ReactNode } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react'
import cls from './DialogWrapper.module.scss'

type HeadlessProps = ComponentProps<typeof HeadlessDialog> & {
    children: ReactNode
}
export type DialogWrapperComponent = React.FunctionComponent<HeadlessProps>

export const DialogWrapper: DialogWrapperComponent = ({
    children,
    ...rest
}) => {
    return (
        <HeadlessDialog {...rest} className={cls.relative}>
            <div className={cls.wrapper}>
                {children}
            </div>
        </HeadlessDialog>
    );
};