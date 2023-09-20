import { useContext, useCallback, Context } from 'react'

type FileArgs = {
    context: Context<FormData>
    formDataEntryName: string
    onSetFile?: (file: File) => void
    onDeleteFile?: () => void
}

export const useFile = ({
    context,
    formDataEntryName,
    onDeleteFile,
    onSetFile
}: FileArgs)  => {
    const filesFormData = useContext(context)

    const setFile = useCallback((file: File) => {
        filesFormData.set(formDataEntryName, file)
        onSetFile && onSetFile(file)
 
    }, [filesFormData, formDataEntryName, onSetFile])

    const getFile = useCallback(() => {
        return filesFormData.get(formDataEntryName)
    }, [filesFormData, formDataEntryName]) 

    const deleteFile = useCallback(() => {
        filesFormData.delete(formDataEntryName)
        onDeleteFile && onDeleteFile()
    }, [filesFormData, formDataEntryName, onDeleteFile]) 

    return { setFile, getFile, deleteFile }
}