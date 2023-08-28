import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getSelectedTrackId
} from './getSelectedTrackId';

describe('getSelectedTrackId.test', () => {
    test('should return data', () => {
        const data = 2
        const state: DeepPartial<StateSchema> = {
            player: {
                currentTrackId: 2
            }
        };
        expect(getSelectedTrackId(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getSelectedTrackId(state as StateSchema)).toEqual(undefined);
    });
});
