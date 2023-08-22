import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { SyntheticEvent, useId } from 'react';
import { Menu } from '@/shared/ui/Menu/Menu';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
  id, onMenuClose
}) => {

  return (
    <Menu.Button
    icon={<Icon/>}
    onClick={() => alert('click')}
    onClose={onMenuClose}
  >
    Добавить к себе
  </Menu.Button>
  )
};