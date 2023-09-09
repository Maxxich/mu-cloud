import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../config/config'

export const rtkApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})