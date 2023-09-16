import { Track } from '@/entity/track';
import { User } from '@/entity/user';

const user: User = {
    adress: '@maxich',
    id: 1,
    name: 'Maxich',
    picture_source: {
        big: 'https://www.google.com/',
        medium: 'https://www.google.com/',
        small: 'https://www.google.com/'
    }
}

const track: Track = {
    audio_src: 'https://www.google.com/',
    duration: 123,
    feates: [],
    id: 1,
    name: 'Alive',
    owners: [
        user
    ],
    picture_source: {
        square: 'https://www.google.com/',
        square_medium: 'https://www.google.com/',
        square_small: 'https://www.google.com/',
        wide: 'https://www.google.com/'
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