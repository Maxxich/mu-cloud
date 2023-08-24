import classNames from 'classnames'
import cls from './Carousel.module.scss'
import { TrackSlide } from './TrackSlide/TrackSlide'
import { PlaylistSlide } from './PlaylistSlide/PlaylistSlide'
import { Tracklist } from '@/feature/Tracklist'
import { useSelector } from 'react-redux'
import { getPlaylist } from '@/entity/player'

export type ActiveSlide = 'track' | 'next'

const mapActiveSlideToClass: Record<ActiveSlide, string> = {
    'track': 'track_slide',
    'next': 'next_slide'
}

interface ICarouselProps {
  activeSlide: ActiveSlide
}

export const Carousel: React.FunctionComponent<ICarouselProps> = ({
  activeSlide,
}) => {

  const list = useSelector(getPlaylist)

  return (
    <div className={classNames(cls.carousel, cls[mapActiveSlideToClass[activeSlide]])}>
      <div className={cls.slide}>
        <TrackSlide/>
      </div>
      <div className={cls.slide} >
        <PlaylistSlide
            tracklist={<Tracklist
              tracks={list}
          />}
        />  
      </div>
    </div>
  );
};