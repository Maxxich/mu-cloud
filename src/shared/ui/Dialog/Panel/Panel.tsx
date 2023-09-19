import { ComponentProps } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react'
import cls from './Panel.module.scss'

type HeadlessPanelProps =  ComponentProps<typeof HeadlessDialog.Panel>
export type PanelComponent = React.FunctionComponent<HeadlessPanelProps>

export const Panel: PanelComponent = ({
    children,
    ...rest
}) => {
    return (
        <HeadlessDialog.Panel {...rest} className={cls.panel}>
            {children}
        </HeadlessDialog.Panel>
    );
};