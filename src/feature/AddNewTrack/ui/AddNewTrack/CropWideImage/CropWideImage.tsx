import { useCallback } from 'react'
import { CropImage } from '@/shared/ui/CropImage';
import { useImageCroppedWideFile } from '@/feature/AddNewTrack/model/filesStorage/hooks/useImageCroppedWideFile';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { useImageFile } from '../../../model/filesStorage/hooks/useImageFile';
import { AddNewTrackActions } from '../../../model/slices/AddNewTrackSlice';
import { useImageCroppedSquareFile } from '../../../model/filesStorage/hooks/useImageCroppedSquareFile';


export const CropWideImage: React.FunctionComponent = () => {

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
        setImageCroppedWideFile(undefined)
        setImageFile(undefined)
        setImageCroppedSquareFile(undefined)
        dispatch(AddNewTrackActions.setTab('form'))
    }, [setImageCroppedWideFile, dispatch, setImageCroppedSquareFile, setImageFile])


    const onSuccess = useCallback((file: File) => {
        setImageCroppedWideFile(file)
        dispatch(AddNewTrackActions.setTab('cropSquareImage'))
    }, [setImageCroppedWideFile, dispatch])


  return (
      <CropImage
        imageFileURL={image ? URL.createObjectURL(image) : undefined}
        onCancel={onCancel}
        onSuccess={onSuccess}
        aspectRatio={16/9}
        submitButtonText='Продолжить'
        cancelButtonText='Отменить'
        info='Обрежьте изображение для плеера'
        minHeight={1080}
        minWidth={1920}
        title='Плеер'
        testId='crop-wide'
        continueButtonTestId='wide-continue'
      />
  );
};