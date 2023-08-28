import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getPlaylist
} from './getPlaylist';
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

describe('getPlaylist.test', () => {
    test('should return data', () => {

        const data = [track]
        const state: DeepPartial<StateSchema> = {
            player: {
                list: [track]
            }
        };
        expect(getPlaylist(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPlaylist(state as StateSchema)).toEqual(undefined);
    });
});
