'use client'


import { memo } from 'react'
import { FilesProvider } from '../../model/filesStorage/FilesProvider/FilesProvider';
import { useSelector } from 'react-redux';
import { getTab } from '../../model/selectors/getTab';
import { Tab } from '../../model/types/AddNewTrackSchema';
import { Form } from './Form/Form';
import { CropWideImage } from './CropWideImage/CropWideImage';
import { CropSquareImage } from './CropSquareImage/CropSquareImage';

const Tabs: Record<Tab, React.ReactElement> = {
    form: <Form/>,
    cropSquareImage: <CropSquareImage/>,
    cropWideImage: <CropWideImage/>,
}

export const AddNewTrack = memo(() => {
    
    const tab = useSelector(getTab)
    
    return (
        <FilesProvider>
            {Tabs[tab]}
        </FilesProvider>
    )
})

AddNewTrack.displayName = 'AddNewTrack'
