'use client'
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Track } from '@/entity/track';
import { TrackCard } from './TrackCard';
import './Slick.css'

interface ISlickProps {
    tracks: Track[]
}

const settings = {
    infinite: false,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
    swipe: isMobile,
    arrows: !isMobile,
};

export const TrackBanner: React.FunctionComponent<ISlickProps> = ({
    tracks
}) => {
    
    let slidesToShow = 1

    const slide1s2 = useMediaQuery({
        query: '(min-width: 390px) and (max-width: 599px)'
    })

    const slide2 = useMediaQuery({
        query: '(min-width: 600px)  and (max-width: 749px)'
    })
    const slide2s5 = useMediaQuery({
        query: '(min-width: 750px) and (max-width: 849px)'
    })
    const slide3 = useMediaQuery({
        query: '(min-width: 850px) and (max-width: 1199px)'
    })
    const slide3s5 = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    if (slide1s2) slidesToShow = 1.2
    else if (slide2) slidesToShow = 2
    else if (slide2s5) slidesToShow = 2.5
    else if (slide3) slidesToShow = 3
    else if (slide3s5) slidesToShow = 3.5


    return (
        <Slider {...settings} slidesToShow={slidesToShow}>
            {tracks.map(t => (
                <TrackCard track={t} tracks={tracks} key={t.id}/>
            ))}
        </Slider>
    );
};
