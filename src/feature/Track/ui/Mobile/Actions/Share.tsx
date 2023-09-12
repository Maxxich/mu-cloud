import { SyntheticEvent } from 'react';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id, onMenuClose
}) => {

    return (
        <Menu.Button
            icon={<Icon/>}
            onClick={() => alert('click')}
            onClose={onMenuClose}
        >
    Поделиться
        </Menu.Button>
    )
};