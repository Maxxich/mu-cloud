import { ReactNode, FunctionComponent } from 'react'
import cls from './ButtonsGroup.module.scss'

interface IButtonsGroupProps {
    children: ReactNode
}

export type ButtonsGroupComponent = FunctionComponent<IButtonsGroupProps>

export const ButtonsGroup: ButtonsGroupComponent  = ({
    children
}) => {
    return (
        <div className={cls.group}>
            {children}
        </div>
    );
};
