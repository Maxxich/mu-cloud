import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getIsPlayerOpened
} from './getIsPlayerOpened';

describe('getIsPlayerOpened.test', () => {
    test('should return data', () => {
        const data = true
        const state: DeepPartial<StateSchema> = {
            player: {
                isOpened: true
            }
        };
        expect(getIsPlayerOpened(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsPlayerOpened(state as StateSchema)).toEqual(undefined);
    });
});
