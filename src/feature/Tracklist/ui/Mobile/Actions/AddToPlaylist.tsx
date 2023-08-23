import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { SyntheticEvent, useId } from 'react';
import { Menu } from '@/shared/ui/Menu/Menu';

interface IAddToPlaylistDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const AddToPlaylist: React.FunctionComponent<IAddToPlaylistDesktopProps> = ({
  id, onMenuClose
}) => {


  return (
    <Menu.Button
    icon={<Icon/>}
    onClick={() => alert('click')}
    onClose={onMenuClose}
  >
    Добавить в плейлист
  </Menu.Button>
  )
};