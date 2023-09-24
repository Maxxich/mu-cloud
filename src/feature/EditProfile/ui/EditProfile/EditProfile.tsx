'use client'

import classNames from 'classnames';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { Form } from'@/shared/ui/Form/Form'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { FileManager } from '@/entity/fileStorage';
import cls from './EditProfile.module.scss'
import { Image } from '../Image/Image';
import { Name } from '../Name/Name';
import { Adress } from '../Adress/Adress';
import { EditButton } from '../Buttons/EditButton';
import { EditProfileActions, EditProfileReducer } from '../../model/slices/EditProfileSlice';
import { getStatus } from '../../model/selectors/getStatus';
import { CancelButton } from '../Buttons/CancelButton';
import { SaveButton } from '../Buttons/SaveButton';
import { FormDataEntries } from '../../model/fileStorage/types';
import { FilesContext } from '../../model/fileStorage/FilesContext';
import { CropAvatar } from '../CropAvatar';
import { FormError } from '../FormError/FormError';

const reducers: ReducersList = {
    EditProfile: EditProfileReducer
}

interface EditProfileProps {
    className?: string;
}

export const EditProfile = memo((props: EditProfileProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const status = useSelector(getStatus)
    const session = useSession()
    const name = session?.data?.user.name
    const adress = session?.data?.user.adress.startsWith('@') 
        ? session.data.user.adress.slice(1)
        : ''

    useEffect(() => {
        dispatch(EditProfileActions.initializateName(name || ''))
        dispatch(EditProfileActions.initializateAdress(adress || ''))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])

    useEffect(() => {
        if (status === 'saved') {
            session.update()
            dispatch(EditProfileActions.setIdle())
        }
    }, [status])

    if (!session?.data) return null
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <FileManager
                formDataEntriesNames={[
                    FormDataEntries.UPLOADED,
                    FormDataEntries.CROPPED
                ]}
                Context={FilesContext}
            >
                <Form margin='auto' className={classNames(cls.container, className)}>
                    <Image/>
                    <Name/>
                    <Adress/>
                    <div className={cls.buttons}>
                        {status === 'idle' && <EditButton/>}
                        {status === 'edit' && <CancelButton/>}
                        {status === 'edit' && <SaveButton/>}
                    </div>
                </Form>
                <FormError/>
                {
                    status === 'crop' && <CropAvatar/>
                }
            </FileManager>
        </DynamicModuleLoader>
    )
})

EditProfile.displayName = 'EditProfile'
