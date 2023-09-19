import { ComponentProps } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react'
import cls from './Description.module.scss'

type HeadlessDescriptionProps =  ComponentProps<typeof HeadlessDialog.Description>
export type DescriptionComponent = React.FunctionComponent<HeadlessDescriptionProps>

export const Description: DescriptionComponent = ({
    children,
    ...rest
}) => {
    return (
        <HeadlessDialog.Description {...rest} className={cls.description}>
            {children}
        </HeadlessDialog.Description>
    );
};