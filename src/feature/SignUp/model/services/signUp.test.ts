import fetch from 'jest-fetch-mock';
import { ViewerSchema, viewerActions } from '@/entity/viewer';
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';
import { signUpByEmail } from './signUp';

describe('signUpByEmail.test', () => {
    test('success signUpByEmail', async () => {
        const fetchReturn: Omit<ViewerSchema, 'checking'> = {
            access_token: 'asd',
            adress:' asd',
            email: {
                confirmed: false
            },
            id: 1,
            name: 'asasd',
            picture_source: {
                big: 'asd',
                medium: 'asd',
                small: 'asdf'
            }
        }

        const thunk = new TestAsyncThunk(signUpByEmail);
        fetch.mockResponses(
            [
                JSON.stringify(fetchReturn),
                { status: 201 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(8);
        expect(thunk.dispatch).toHaveBeenNthCalledWith(7, 
            viewerActions.setCredentials({
                ...fetchReturn,
                checking: false
            })
        );
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(undefined);
    });

    test('error with server signUpByEmail', async () => {
        const thunk = new TestAsyncThunk(signUpByEmail);
        fetch.mockResponses(
            [
                JSON.stringify(undefined),
                { status: 500 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(7);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Сервер недоступен');
    });

    test('error with server status not 201 signUpByEmail', async () => {
        const thunk = new TestAsyncThunk(signUpByEmail);
        fetch.mockResponses(
            [
                JSON.stringify(undefined),
                { status: 201 }
            ]
        )
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(7);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Произошла неожиданная ошибка');
    });

    test('fetch error signInByEmail', async () => {
        const thunk = new TestAsyncThunk(signUpByEmail);
        fetch.mockReject()
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(7);
        expect(fetch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Произошла неожиданная ошибка');
    });
});
