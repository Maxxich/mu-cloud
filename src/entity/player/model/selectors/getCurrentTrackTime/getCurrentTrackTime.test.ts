import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getCurrentTrackTime
} from './getCurrentTrackTime';

describe('getCurrentTrackTime.test', () => {
    test('should return data', () => {
        const data = 17
        const state: DeepPartial<StateSchema> = {
            player: {
                currentTrackTime: 17
            }
        };
        expect(getCurrentTrackTime(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCurrentTrackTime(state as StateSchema)).toEqual(undefined);
    });
});
