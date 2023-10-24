import cls from './ItemsTitle.module.scss'
import { Skeleton } from '../Skeleton';

interface IItemsTitleProps {
}

export const ItemsTitleSkeleton: React.FunctionComponent<IItemsTitleProps> = ({
}) => {
    return (
        <div className={cls.container}>
            <Skeleton height={18} width={100} borderRadius='5px'/>
        </div>
    );
};

