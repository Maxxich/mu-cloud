import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getIsPaused
} from './getIsPaused';

describe('getIsPaused.test', () => {
    test('should return data', () => {
        const data = true
        const state: DeepPartial<StateSchema> = {
            player: {
                isPaused: true
            }
        };
        expect(getIsPaused(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsPaused(state as StateSchema)).toEqual(undefined);
    });
});
