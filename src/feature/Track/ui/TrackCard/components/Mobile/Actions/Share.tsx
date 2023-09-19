import { SyntheticEvent } from 'react';
import Icon from '@/shared/assets/svg/svg.svg'
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id, onMenuClose
}) => {

    return (
        <MobileMenu.Button
            icon={<Icon/>}
            onClick={() => alert('click')}
            onClose={onMenuClose}
        >
            Поделиться
        </MobileMenu.Button>
    )
};