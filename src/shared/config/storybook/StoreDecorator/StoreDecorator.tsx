import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/global/providers/StoreProvider';
import { ReducersList } from '@/shared/config/DynamicModuleLoader/DynamicModuleLoader';
import { AddNewTrackReducer } from '@/feature/AddNewTrack';
import { rtkApi } from '@/shared/api';
import { playerReducer } from '@/entity/player';
import { signinReducer } from '@/feature/SignIn';
import { signupReducer } from '@/feature/SignUp';
import { viewerReducer } from '@/entity/viewer';

const defaultAsyncReducers: ReducersList = {
    addNewTrack: AddNewTrackReducer,
    api: rtkApi.reducer,
    player: playerReducer,
    signin: signinReducer,
    signup: signupReducer,
    viewer: viewerReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => {
        const Decorator = (StoryComponent: StoryFn) => (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );

        return Decorator
    }


