import { Skeleton } from '@/shared/ui/Skeleton'
import cls from './Loading.module.scss'

export default function LoadingTracks () {
    return (
        <div className={cls.container}>
            <div className={cls.track_card_inner}>
                <Skeleton width={156} height={156} borderRadius='15%'/>
                <Skeleton width={136} height={64} borderRadius='10px'/>
            </div>
            <Skeleton width={350} height={37} borderRadius='10px'/>
        </div>
    )
}