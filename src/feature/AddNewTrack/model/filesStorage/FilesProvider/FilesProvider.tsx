'use client'
import { memo, FunctionComponent } from 'react';
import { ClearFiles } from './ClearData';
import { FilesContext } from '../config/FilesContext';


const filesFormData = new FormData()

interface Props {
    children?: React.ReactNode
}


export const FilesProvider: FunctionComponent<Props> = memo(({
    children
}) => {

    return <FilesContext.Provider value={filesFormData}>
        <ClearFiles>
            {children}
        </ClearFiles>
    </FilesContext.Provider>;
})

FilesProvider.displayName = 'FilesProvider'