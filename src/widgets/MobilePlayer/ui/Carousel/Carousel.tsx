import { animated } from '@react-spring/web';
import { forwardRef, Ref } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { TrackList } from '@/feature/Track'
import { getPlaylist } from '@/entity/player'
import cls from './Carousel.module.scss'
import { TrackSlide } from './TrackSlide/TrackSlide'
import { PlaylistSlide } from './PlaylistSlide/PlaylistSlide'

export type ActiveSlide = 'track' | 'next'

interface ICarouselProps {
  props: any
  ref: Ref<HTMLDivElement>
  playlistId: string
}

export const Carousel: React.FunctionComponent<ICarouselProps> = forwardRef(({
    props, playlistId
}, ref) => {

    const list = useSelector(getPlaylist)

    return (
        <animated.div className={classNames(cls.carousel)} style={props} ref={ref}>
            <div className={cls.slide}>
                <TrackSlide/>
            </div>
            <div className={cls.slide} >
                <PlaylistSlide
                    tracklist={<TrackList
                        tracks={list}
                        isMobile={true}
                    />}
                    playlistId={playlistId}
                />  
            </div>
        </animated.div>
    );
})

Carousel.displayName = 'Carousel'