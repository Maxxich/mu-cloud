import { rtkApi } from '@/shared/api';

const trackApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        addToLiked: builder.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `/tracks-private/like/${id}`,
                method: 'POST',
            }),
            invalidatesTags:  ['Liked'],
        
        }), 
        
        removeFromLiked: builder.mutation<void, {id: number}>({
            query: ({ id }) => ({
                url: `/tracks-private/like/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:  ['Liked'], 
        }), 
    
        isInLiked: builder.query<boolean, {id: number}> ({
            query: ({ id }) => `/tracks-private/like/${id}`,
            providesTags: ['Liked'],
        }),
    }),
    overrideExisting: true,
});
  
export { trackApi }