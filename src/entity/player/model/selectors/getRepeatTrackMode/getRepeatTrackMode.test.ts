import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getRepeatTrackMode
} from './getRepeatTrackMode';

describe('getRepeatTrackMode.test', () => {
    test('should return data', () => {
        const data = true
        const state: DeepPartial<StateSchema> = {
            player: {
                repeatTrackMode: true
            }
        };
        expect(getRepeatTrackMode(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getRepeatTrackMode(state as StateSchema)).toEqual(undefined);
    });
});
