import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../config/config'

export const rtkApi = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: ['Liked']
})