import { useEffect, useContext } from 'react'
import { FilesContext } from '../config/FilesContext'
import { FormDataEntries } from '../config/types'

interface IClearFilesProps {
    children?: React.ReactNode
}

export const ClearFiles: React.FunctionComponent<IClearFilesProps> = ({
    children
}) => {

    const filesFormData = useContext(FilesContext)

    useEffect(() => {
        return () => {
            filesFormData.delete(FormDataEntries.IMAGE_FILE)
            filesFormData.delete(FormDataEntries.AUDIO_FILE)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return children;
};
