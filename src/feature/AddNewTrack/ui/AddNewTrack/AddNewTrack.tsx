'use client'

import { memo } from 'react'
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Form } from './Form/Form';
import { CropWideImage } from './CropWideImage/CropWideImage';
import { CropSquareImage } from './CropSquareImage/CropSquareImage';
import { FilesProvider } from '../../model/filesStorage/FilesProvider/FilesProvider';
import { getTab } from '../../model/selectors/getTab';
import { Tab } from '../../model/types/AddNewTrackSchema';
import { AddNewTrackReducer } from '../../model/slices/AddNewTrackSlice';

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
            <FilesProvider>
                {tab && Tabs[tab]}
            </FilesProvider>
        </DynamicModuleLoader>
    )
})

AddNewTrack.displayName = 'AddNewTrack'
