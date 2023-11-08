'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Track } from '@/entity/track';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    mode?: 'storybook' | 'production'
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers, mode = 'production' } = props;

    const createPersistedState = () => {
        const persistedState: DeepPartial<StateSchema> = {
            player: {
                list: JSON.parse(
                    localStorage.getItem('player.list') || '[]'
                ) as Track[],
                currentTrackId: localStorage.getItem('player.currentTrackId') 
                    ? Number(localStorage.getItem('player.currentTrackId'))
                    : undefined,
                persistedTime: localStorage.getItem('player.persistedTime') 
                    ? Number(localStorage.getItem('player.persistedTime'))
                    : undefined,
                repeatTrackMode: localStorage.getItem('player.repeatTrackMode') 
                    ? localStorage.getItem('player.repeatTrackMode') === 'true'
                        ? true
                        : false
                    : false,
                isPaused: true
            }
        }
        localStorage.setItem('player.persitLoaded', 'true')
        return persistedState
    }

    const getInitialState = () => {
        switch (mode) {
        case 'production': return createPersistedState()
        case 'storybook': return initialState
        default: return createPersistedState()
        }
    }

    const store = createReduxStore(
        getInitialState() as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return <Provider store={store}>
        {children}
    </Provider>;
};
