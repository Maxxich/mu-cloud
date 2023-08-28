import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getAccessToken
} from './getAccessToken';

describe('getAccessToken.test', () => {
    test('should return data', () => {
        const data = 'asjdbflaskjdklasjclkj'
        const state: DeepPartial<StateSchema> = {
            viewer: {
                access_token: 'asjdbflaskjdklasjclkj'
            }
        };
        expect(getAccessToken(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAccessToken(state as StateSchema)).toEqual(undefined);
    });
});
