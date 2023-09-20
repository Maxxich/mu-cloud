'use client'
import { memo, FunctionComponent, Context } from 'react';
import { ClearFiles } from './ClearData';


const filesFormData = new FormData()

interface Props {
    children?: React.ReactNode
    formDataEntriesNames: string[]
    Context: Context<FormData>
}


export const FileManager: FunctionComponent<Props> = memo(({
    children,
    formDataEntriesNames,
    Context
}) => {

    return <Context.Provider value={filesFormData}>
        <ClearFiles
            formDataEntries={formDataEntriesNames}
            Context={Context}
        >
            {children}
        </ClearFiles>
    </Context.Provider>;
})

FileManager.displayName = 'FileManager'