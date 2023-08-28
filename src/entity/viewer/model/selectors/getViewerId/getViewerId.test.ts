import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getViewerId
} from './getViewerId';

describe('getViewerId.test', () => {
    test('should return data', () => {
        const data = 12
        const state: DeepPartial<StateSchema> = {
            viewer: {
                id: 12
            }
        };
        expect(getViewerId(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getViewerId(state as StateSchema)).toEqual(undefined);
    });
});
