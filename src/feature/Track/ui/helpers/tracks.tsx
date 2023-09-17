import { Track } from '@/entity/track';
import { User } from '@/entity/user';
import Image from '@/shared/assets/images/images.jpg'

const user: User = {
    adress: '@maxich',
    id: 1,
    name: 'Maxich',
    picture_source: {
        big: Image.src,
        medium: Image.src,
        small: Image.src
    }
}

const track: Track = {
    audio_src: Image.src,
    duration: 123,
    feates: [],
    id: 1,
    name: 'Alive',
    owners: [
        user
    ],
    picture_source: {
        square: Image.src,
        square_medium: Image.src,
        square_small: Image.src,
        wide: Image.src
    },
    color: undefined,
    name_secondary: 'Jaiden Stylez'
}

export const tracks: Track[] = [
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track,
    track
]