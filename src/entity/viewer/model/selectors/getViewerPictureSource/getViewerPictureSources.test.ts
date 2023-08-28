import { StateSchema } from '@/global/providers/StoreProvider';
import {
    getViewerPictureSources
} from './getViewerPictureSources';
import { User } from '@/entity/user';

const picture_sources: User['picture_source'] = {
    big: 'big',
    medium: 'medium',
    small: 'small'
}

describe('getViewerPictureSources.test', () => {
    test('should return data', () => {
        const data = picture_sources
        const state: DeepPartial<StateSchema> = {
            viewer: {
                picture_source: picture_sources
            }
        };
        expect(getViewerPictureSources(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getViewerPictureSources(state as StateSchema)).toEqual(undefined);
    });
});
