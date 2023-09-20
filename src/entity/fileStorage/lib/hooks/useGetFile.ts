import { useContext, useCallback, Context } from 'react'

type FileArgs = {
    context: Context<FormData>
}

export const useGetFile = ({
    context,
}: FileArgs)  => {
    const filesFormData = useContext(context)

    const getFile = useCallback((formDataEntryName: string) => {
        return filesFormData.get(formDataEntryName)
    }, [filesFormData]) 

    return getFile 
}