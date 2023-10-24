import { useId } from 'react';
import { useSelector } from 'react-redux'
import { IconButton } from '@/shared/ui/IconButton'
import CenterImageSvg from '@/shared/assets/svg/CenterImage.svg'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { AddNewTrackSeparateImageLoadingActions } from '../../../model/slices/AddNewTrackSeparateImageLoading';
import { getIsSmallPictureActive } from '../../../model/selectors/getIsSmallPictureActive';

export const ToggleShowSquareImage: React.FunctionComponent = (props) => {

    const isSmallPictureActive = useSelector(getIsSmallPictureActive)
    const dispatch = useAppDispatch()
    const onToggle = () => dispatch(AddNewTrackSeparateImageLoadingActions.toggleIsSmallPictureActive())
    const tooltipId = useId()

    return <IconButton
        icon={<CenterImageSvg/>}
        onClick={onToggle}
        size={'l'}
        variant={isSmallPictureActive ? 'default' : 'secondary'}
        tooltipId={`${tooltipId}`}
        tooltipContent={isSmallPictureActive ? 'Не показывать изображение по центру' : 'Показывать изображение по центру'}
        tooltipPlace='bottom'
    />;
};
