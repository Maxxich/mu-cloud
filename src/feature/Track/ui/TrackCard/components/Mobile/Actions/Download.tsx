import { SyntheticEvent } from 'react';
import Icon from '@/shared/assets/svg/svg.svg'
import { Menu } from '@/shared/ui/Menu/Menu';

interface IDownloadFeatureProps {
  src: string
  trackname: string
  author: string
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Download: React.FunctionComponent<IDownloadFeatureProps> = ({
    src,
    author,
    trackname,
    onMenuClose
}) => {


    return (
        <Menu.Button
            icon={<Icon/>}
            onClick={() => alert('click')}
            onClose={onMenuClose}
        >
    Скачать
        </Menu.Button>
    )
};