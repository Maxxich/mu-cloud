import classNames from 'classnames'
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from '../UserCard/UserCard.module.scss'
import { Variant, Width, mapWidthToClass } from '../UserCard/UserCard';

type ColumnProps =  {
    variant?: 'column'
    width?: 'fixed'
}

type RowProps = {
    variant?: 'row'
    width?: Width
}

export type IUserCardSkeletonProps = ColumnProps | RowProps

const mapVariantToSize: Record<Variant, number> = {
    'column': 60,
    'row': 48 
}

export const UserCardSkeleton: React.FunctionComponent<IUserCardSkeletonProps> = ({
    variant = 'row',
    width = 'fixed'
}) => {

    const classes = classNames(
        cls[variant], 
        (width ? mapWidthToClass[width] : undefined)
    )

    return (
        <div className={classes}>
            <Skeleton
                height={mapVariantToSize[variant]}
                width={mapVariantToSize[variant]}
                borderRadius='50%'
            />
            <Skeleton className={cls.name_skeleton} borderRadius='5px'/>
        </div>
    );
};