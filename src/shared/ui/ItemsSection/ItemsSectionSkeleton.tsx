import { ReactNode } from 'react';
import cls from './ItemsSectionSkeleton.module.scss'

interface IItemsSectionProps {
    children: ReactNode
}

export const ItemsSectionSkeleton: React.FunctionComponent<IItemsSectionProps> = ({
    children
}) => {
    return (
        <div className={cls.section_skeleton}>
            {children}
        </div>
    );
};