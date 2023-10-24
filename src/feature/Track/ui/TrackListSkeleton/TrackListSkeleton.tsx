import cls from '../TrackList/TrackList.module.scss'
import { TrackCardSkeleton } from '../TrackCardSkeleton/TrackCardSkeleton';

interface ITrackListSkeletonProps {
    itemsCount: number
}

export const TrackListSkeleton: React.FunctionComponent<ITrackListSkeletonProps> = ({
    itemsCount
}) => {

    let items: number[] = []
    for (let i = 0; i < itemsCount; i++) {
        items.push(i)
    }

    return (
        <div className={cls.container}>
            {items.map(t => (
                <TrackCardSkeleton width='adaptive' key={t}/>
            ))}
        </div>
    )
};