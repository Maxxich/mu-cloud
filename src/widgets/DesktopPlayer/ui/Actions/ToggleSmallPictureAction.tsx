import { useId } from 'react';
import { useSelector } from 'react-redux';
import { getIsPlayerOpened, getIsSmallPictureActive, playerActions } from '@/entity/player';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconCenter from '@/shared/assets/svg/CenterImage.svg'

interface IToggleSmallPictureProps {
}

export const ToggleSmallPictureAction: React.FunctionComponent<IToggleSmallPictureProps> = (props) => {

    const dispatch = useAppDispatch()
    const isSmallPictureActive = useSelector(getIsSmallPictureActive)
    const tooltipId = useId()
    const isOpened = useSelector(getIsPlayerOpened)

    if (!isOpened) return null


    return (
        <IconButton
            icon={<IconCenter/>}
            size={'l'}
            onClick={() => dispatch(playerActions.toggleIsSmallPictureActive())}
            variant={isSmallPictureActive ? 'default' : 'secondary'}
            tooltipId={`${tooltipId}`}
            tooltipContent={isSmallPictureActive ? 'Не показывать изображение по центру' : 'Показывать изображение по центру'}
            tooltipPlace='bottom'
        />
    )
};