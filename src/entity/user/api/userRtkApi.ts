import { rtkApi } from '@/shared/api';

const userRtkApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        createSubscribe: builder.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `/user-private/sub/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['subscribe'],
        }),
      
        removeSubscribe: builder.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `/user-private/sub/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['subscribe'],
        }),
      
        checkSubscribe: builder.query<boolean, {id: number}>({
            query: ({ id }) => `/user-private/sub/${id}`,
            providesTags: ['subscribe'],
        }),

        sendEmailConfirmation: builder.mutation<void, void>({
            query: () => ({
                url: '/auth-private/confirm/link',
                method: 'GET'
            })
        }),
    }),
    overrideExisting: true,
});
  
export { userRtkApi }