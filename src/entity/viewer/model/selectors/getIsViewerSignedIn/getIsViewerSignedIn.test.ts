import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getIsViewerSignedIn
} from './getIsViewerSignedIn';

describe('getIsViewerSignedIn.test', () => {
    test('should return true', () => {
        const data = true
        const state: DeepPartial<StateSchema> = {
            viewer: {
                id: 12
            }
        };
        expect(getIsViewerSignedIn(state as StateSchema)).toEqual(data);
    });
    test('should return false', () => {
        const data = false
        const state: DeepPartial<StateSchema> = {
            viewer: {}
        };
        expect(getIsViewerSignedIn(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIsViewerSignedIn(state as StateSchema)).toEqual(false);
    });
});
