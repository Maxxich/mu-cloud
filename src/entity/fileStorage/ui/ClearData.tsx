import { useEffect, useContext, Context } from 'react'

interface IClearFilesProps {
    children?: React.ReactNode
    formDataEntries: string[]
    Context: Context<FormData>
}

export const ClearFiles: React.FunctionComponent<IClearFilesProps> = ({
    children,
    formDataEntries,
    Context
}) => {

    const filesFormData = useContext(Context)

    useEffect(() => {
        return () => {
            formDataEntries.forEach((e) => filesFormData.delete(e))
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return children;
};
