import { useId } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'

interface IAddToPlaylistDesktopProps {
  id: number
}

export const AddToPlaylist: React.FunctionComponent<IAddToPlaylistDesktopProps> = ({
    id
}) => {

    const tooltipId = useId()

    return <IconButton
        icon={<Icon/>} 
        // onClick={onClick} 
        variant='secondary'
        tooltipId={`${tooltipId}`}
        tooltipContent='Добавить в плейлист'
        tooltipPlace='top'
    />;
};