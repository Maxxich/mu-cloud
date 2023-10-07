'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { FileManager } from '@/entity/fileStorage';
import { Form } from './Form/Form';
import { CropWideImage } from './CropWideImage/CropWideImage';
import { CropSquareImage } from './CropSquareImage/CropSquareImage';
import { getTab } from '../../model/selectors/getTab';
import { Tab } from '../../model/types/AddNewTrackSeparateImageLoadingSchema';
import { FormDataEntries } from '../../model/filesStorage/types';
import { FilesContext } from '../../model/filesStorage/FilesContext';
import { AddNewTrackSeparateImageLoadingReducer } from '../../model/slices/AddNewTrackSeparateImageLoading';

const Tabs: Record<Tab, React.ReactElement> = {
    form: <Form/>,
    cropSquareImage: <CropSquareImage/>,
    cropWideImage: <CropWideImage/>,
}

const reducers: ReducersList = {
    addNewTrackSeparateImageLoading: AddNewTrackSeparateImageLoadingReducer,
};

export const AddNewTrackSeparateImageLoading = memo(() => {
    
    const tab = useSelector(getTab)
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <FileManager
                formDataEntriesNames={[
                    FormDataEntries.AUDIO_FILE ,
                    FormDataEntries.IMAGE_CROPPED_SQUARE_FILE ,
                    FormDataEntries.IMAGE_CROPPED_WIDE_FILE ,
                    FormDataEntries.IMAGE_SQUARE_FILE ,
                    FormDataEntries.IMAGE_WIDE_FILE ,
                ]}
                Context={FilesContext}
            >
                {tab && Tabs[tab]}
            </FileManager>
        </DynamicModuleLoader>
    )
})

AddNewTrackSeparateImageLoading.displayName = 'AddNewTrackSeparateImageLoading'
