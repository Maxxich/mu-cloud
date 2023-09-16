import { ReactNode } from 'react';
import cls from './ItemsSection.module.scss'

interface IItemsSectionProps {
    children: ReactNode
}

export const ItemsSection: React.FunctionComponent<IItemsSectionProps> = ({
    children
}) => {
    return (
        <div className={cls.section}>
            {children}
        </div>
    );
};