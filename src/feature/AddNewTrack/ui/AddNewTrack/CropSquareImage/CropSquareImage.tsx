import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useImageCroppedWideFile } from '@/feature/AddNewTrack/model/filesStorage/hooks/useImageCroppedWideFile';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';
import { AddNewTrackActions } from '../../../model/slices/AddNewTrackSlice';
import { useImageCroppedSquareFile } from '../../../model/filesStorage/hooks/useImageCroppedSquareFile';


export const CropSquareImage: React.FunctionComponent = () => {

    const {
        getImageFile,
        setImageFile
    } = useImageFile()

    const dispatch = useAppDispatch()

    const {

        setImageCroppedWideFile
    } = useImageCroppedWideFile()

    const {
        setImageCroppedSquareFile
    } = useImageCroppedSquareFile()


    const image = getImageFile() as File | undefined

    const onCancel = useCallback(() => {
        setImageCroppedSquareFile(undefined)
        setImageFile(undefined)
        setImageCroppedWideFile(undefined)
        dispatch(AddNewTrackActions.setTab('form'))
    }, [setImageCroppedWideFile, dispatch, setImageCroppedSquareFile, setImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedSquareFile(file)
        dispatch(AddNewTrackActions.setTab('form'))
    }, [setImageCroppedSquareFile, dispatch])


  return (
      <CropImage
        imageFileURL={image ? URL.createObjectURL(image) : undefined}
        onCancel={onCancel}
        onSuccess={onSuccess}
        aspectRatio={1}
        submitButtonText='Продолжить'
        cancelButtonText='Отменить'
        info='Обрежьте изображение для миниатюры'
        minHeight={700}
        minWidth={700}
        title='Миниатюра'
        testId='crop-square'
        continueButtonTestId='square-continue'
      />
  );
};