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
        // <Transition
        //     as={Fragment}
        //     enter={cls.enter}
        //     enterFrom={cls.enterFrom}
        //     enterTo={cls.enterTo}
        //     leave={cls.leave}
        //     leaveFrom={cls.leaveFrom}
        //     leaveTo={cls.leaveTo}
        // >
        <HeadlessDialog.Panel {...rest} className={cls.panel}>
            {children}
        </HeadlessDialog.Panel>
        // </Transition>
    );
};