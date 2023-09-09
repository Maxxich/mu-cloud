import { ViewerSchema, viewerActions } from '@/entity/viewer';
import { StateSchema } from '@/global/providers/StoreProvider';
import { backendUrl } from '@/shared/const/backendUrl';
import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const baseQuery = fetchBaseQuery({
  baseUrl: backendUrl, 
  credentials: 'include',
  prepareHeaders: (headers, api) => {
    const token = (api.getState() as StateSchema).viewer.access_token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    } 
    return headers
  },
})


export const baseQueryWithReauth: any = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result?.error?.status === 401) {
    api.dispatch(viewerActions.setChecking(true))
    const refreshResult = await baseQuery({url: '/auth-private/refresh', 
  method: 'POST'}, api, extraOptions) as {data: Omit<ViewerSchema, 'checking'>}
    if (refreshResult?.data) {
      api.dispatch(viewerActions.setCredentials({
        ...refreshResult.data,
        checking: false
    } || {
        access_token: undefined, 
        adress: undefined,
        email: undefined,
        id: undefined,
        name: undefined,
        picture_source: undefined,
        checking: false
      }))
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
