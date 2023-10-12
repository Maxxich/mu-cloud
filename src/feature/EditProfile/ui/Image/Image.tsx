'use client'
import { useSession } from 'next-auth/react'
import { SyntheticEvent, memo, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { backendUrl } from '@/shared/const/backendUrl'
import { Image as ImageComp } from '@/shared/ui/Image'
import IconImageFile from '@/shared/assets/svg/ImageFile.svg'
import { useFile } from '@/entity/fileStorage'
import { avatarPlaceholder } from '@/shared/const/avatarPlaceholders'
import cls from './Image.module.scss'
import { FilesContext } from '../../model/fileStorage/FilesContext'
import { FormDataEntries } from '../../model/fileStorage/types'
import { EditProfileActions } from '../../model/slices/EditProfileSlice'
import { setAndValidateAvatarMimeType } from '../../model/services/setAndValidateAvatarMimeType'
import { getIsAvatarEdited } from '../../model/selectors/getIsAvatarEdited'
import { getStatus } from '../../model/selectors/getStatus'

export const Image: React.FunctionComponent = memo(() => {

    const inputRef = useRef<HTMLInputElement>()
    const session = useSession()
    const dispatch = useAppDispatch()
    const status = useSelector(getStatus)
    const mediumPictureSrc = session?.data?.user?.picture_source.medium

    const croppedExist = useSelector(getIsAvatarEdited)

    const {
        deleteFile: deleteUploaded,
        setFile: setUploaded,
    } = useFile({
        context: FilesContext,
        formDataEntryName: FormDataEntries.UPLOADED,
        onDeleteFile: () => dispatch(EditProfileActions.removeUploadedAvatar()),
        onSetFile: (file) => dispatch(setAndValidateAvatarMimeType(file.type))
    })

    const {
        deleteFile: deleteCropped,
        getFile: getCropped
    } = useFile({
        context: FilesContext,
        formDataEntryName: FormDataEntries.CROPPED,
    })

    const onClick = (e: SyntheticEvent) => {
        if (status !== 'edit') return
        e.preventDefault()
        inputRef?.current?.click()
    }

    const handleChange = () => {
        deleteUploaded()
        deleteCropped()
        const file = inputRef?.current?.files?.[0] as File | undefined
        if (file) setUploaded(file)
    }

    const [isHover, setIsHover] = useState<boolean>(false)
    const showFogging = (isMobile || isHover) && status === 'edit'

    const src = mediumPictureSrc 
        ? (backendUrl + '/' + mediumPictureSrc)
        : avatarPlaceholder

    return (
        <div className={cls.marginBottom}>
            <div
                onMouseEnter={setIsHover.bind(this, true)}
                onMouseLeave={setIsHover.bind(this, false)}
                onClick={onClick}
                className={cls.imageContainer}
                
            > 
                <ImageComp 
                    size={'l'}
                    src={croppedExist ? URL.createObjectURL(getCropped() as File) : src}
                    alt='image'
                />
                {showFogging && (
                    <div className={cls.fogging}>
                        <IconImageFile/>
                    </div>
                )} 
            </div>
            <input
                className={cls.invisibleInput}
                type={'file'} 
                ref={inputRef as any} 
                onChange={handleChange}
            />
        </div>
    );
})

Image.displayName = 'Image'