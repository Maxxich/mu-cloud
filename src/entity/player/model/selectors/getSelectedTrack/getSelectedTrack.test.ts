import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getSelectedTrack
} from './getSelectedTrack';
import { Track } from '@/entity/track';

const track: Track = {
    audio_src: 'audio_src',
    duration: 145,
    feates: [],
    id: 2,
    name: 'name',
    owners: [],
    picture_source: {
        square: 'square',
        square_medium: 'sm',
        square_small: 'ss',
        wide: 'wide'
    },
    color: undefined,
    name_secondary: undefined
}

describe('getSelectedTrack.test', () => {
    test('should return data', () => {
        const data = track
        const state: DeepPartial<StateSchema> = {
            player: {
                currentTrackId: 2,
                list: [track]
            }
        };
        expect(getSelectedTrack(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getSelectedTrack(state as StateSchema)).toEqual(undefined);
    });
});
