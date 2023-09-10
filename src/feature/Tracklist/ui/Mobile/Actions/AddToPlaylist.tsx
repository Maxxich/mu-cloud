import { SyntheticEvent } from 'react';
import Icon from '@/shared/assets/svg/svg.svg'
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