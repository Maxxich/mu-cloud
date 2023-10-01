import { useContext, useCallback, Context } from 'react'

type FileArgs = {
    context: Context<FormData>
    formDataEntryNames: string[]
    onDeleteFiles?: () => void
}

export const useDeleteAllFiles = ({
    context,
    formDataEntryNames,
    onDeleteFiles
}: FileArgs)  => {
    const filesFormData = useContext(context)

    const deleteAllFiles = useCallback(() => {
        formDataEntryNames.forEach(
            formDataEntryName => {
                filesFormData.delete(formDataEntryName)
            }
        )

        onDeleteFiles && onDeleteFiles()
    }, [formDataEntryNames, filesFormData, onDeleteFiles]) 

    return deleteAllFiles 
}