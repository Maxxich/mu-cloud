import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getCurrentTrackTimeLenght
} from './getCurrentTrackTimeLenght';

describe('getCurrentTrackTimeLenght.test', () => {
    test('should return data', () => {
        const data = 146
        const state: DeepPartial<StateSchema> = {
            player: {
                currentTrackTimeLenght: 146
            }
        };
        expect(getCurrentTrackTimeLenght(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCurrentTrackTimeLenght(state as StateSchema)).toEqual(undefined);
    });
});
