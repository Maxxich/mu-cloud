import classNames from 'classnames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './TrackCardSkeleton.module.scss'
import { Width } from '../../model/types/TrackCard';
import { mapWidthToClass } from '../helpers/mapPropToClass';

interface ITrackCardSkeletonProps {
    width?: Width
}

export const TrackCardSkeleton: React.FunctionComponent<ITrackCardSkeletonProps> = ({
    width
}) => {

    const classes = classNames(
        cls.container, 
        (width ? mapWidthToClass[width] : undefined)
    )

    return (
        <div
            className={classes}
        >
            <Skeleton borderRadius='5px' height={48} width={48}/>
            <VStack gap={'4'}>
                <Skeleton height={16} width={100} borderRadius='5px'/>
                <Skeleton height={16} width={50} borderRadius='5px'/>
            </VStack>
        </div>
    );
};