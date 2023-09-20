'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { FileManager } from '@/entity/fileStorage';
import { Form } from './Form/Form';
import { CropWideImage } from './CropWideImage/CropWideImage';
import { CropSquareImage } from './CropSquareImage/CropSquareImage';
import { getTab } from '../../model/selectors/getTab';
import { Tab } from '../../model/types/AddNewTrackSchema';
import { AddNewTrackReducer } from '../../model/slices/AddNewTrackSlice';
import { FormDataEntries } from '../../model/filesStorage/types';
import { FilesContext } from '../../model/filesStorage/FilesContext';

const Tabs: Record<Tab, React.ReactElement> = {
    form: <Form/>,
    cropSquareImage: <CropSquareImage/>,
    cropWideImage: <CropWideImage/>,
}

const reducers: ReducersList = {
    addNewTrack: AddNewTrackReducer,
};

export const AddNewTrack = memo(() => {
    
    const tab = useSelector(getTab)
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <FileManager
                formDataEntriesNames={[
                    FormDataEntries.AUDIO_FILE ,
                    FormDataEntries.IMAGE_CROPPED_SQUARE_FILE ,
                    FormDataEntries.IMAGE_CROPPED_WIDE_FILE ,
                    FormDataEntries.IMAGE_FILE ,
                ]}
                Context={FilesContext}
            >
                {tab && Tabs[tab]}
            </FileManager>
        </DynamicModuleLoader>
    )
})

AddNewTrack.displayName = 'AddNewTrack'
