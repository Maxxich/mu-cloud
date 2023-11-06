import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['player', 'api']
}

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
    const reducers = { ...initialReducers };
    // let combinedReducer = combineReducers(reducers)
    let combinedReducer = persistReducer(persistConfig, combineReducers(reducers))

    let keysToRemove: Array<StateSchemaKey> = [];
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;

            combinedReducer = persistReducer(persistConfig, combineReducers(reducers))
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;

            combinedReducer = persistReducer(persistConfig, combineReducers(reducers))
        },
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            
            //@ts-ignore
            return combinedReducer(state, action)
        },
    }
}