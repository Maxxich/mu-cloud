import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type {
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey
} from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type {
    StateSchema,
    AppDispatch,
    ReduxStoreWithManager,
    StateSchemaKey
};

// import type {
//     ThunkConfig,
// } from './config/StateSchema';


// export type {
//     ThunkConfig,
// };
