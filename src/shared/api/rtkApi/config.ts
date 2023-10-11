import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react'
import { backendUrl } from '@/shared/const/backendUrl';



export const baseQuery = fetchBaseQuery({
    baseUrl: backendUrl, 
    credentials: 'include',
    prepareHeaders: async (headers, api) => {
        const token = (await getSession())?.backendTokens?.accessToken
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        } 
        return headers
    },
})