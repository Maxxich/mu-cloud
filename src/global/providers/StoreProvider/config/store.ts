import { useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { playerReducer } from '@/entity/player';
import { rtkApi } from '@/shared/api';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './ReducerManager';

const persistPlayerConfig = {
    key: 'player',
    storage,
    blacklist: ['isPaused'],
}



export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        //@ts-ignore
        player: persistReducer(persistPlayerConfig, playerReducer),
        [rtkApi.reducerPath]: rtkApi.reducer
    };

    // const reducerManager = persistReducer(persistConfig, combineReducers(rootReducers));
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer:  reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        // reducer: reducerManager,
        preloadedState: initialState,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(rtkApi.middleware),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    persistStore(store);
    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch

