import { ViewerSchema, viewerActions } from '@/entity/viewer';
import { signInByEmail } from './signIn';
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import fetch from 'jest-fetch-mock';

describe('signInByEmail.test', () => {
    test('success signInByEmail', async () => {
        const fetchReturn: Omit<ViewerSchema, 'checking'> = {
            access_token: 'asd',
            adress:' asd',
            email: {
                confirmed: true
            },
            id: 1,
            name: 'asasd',
            picture_source: {
                big: 'asd',
                medium: 'asd',
                small: 'asdf'
            }
        }

        const thunk = new TestAsyncThunk(signInByEmail);
        fetch.mockResponses(
            [
              JSON.stringify(fetchReturn),
              { status: 200 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenNthCalledWith(2, 
            viewerActions.setCredentials({
                ...fetchReturn,
                checking: false
            })
        );
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(undefined);
    });

    test('error wrong data signInByEmail', async () => {
        const thunk = new TestAsyncThunk(signInByEmail);
        fetch.mockResponses(
            [
              JSON.stringify(undefined),
              { status: 400 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Неверные данные для входа');
    });

    test('error wrong data signInByEmail', async () => {
        const thunk = new TestAsyncThunk(signInByEmail);
        fetch.mockResponses(
            [
              JSON.stringify(undefined),
              { status: 500 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Сервер недоступен');
    });

    test('fetch error signInByEmail', async () => {
        const thunk = new TestAsyncThunk(signInByEmail);
        fetch.mockReject()
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Произошла неожиданная ошибка');
    });
});
