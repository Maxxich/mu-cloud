import { SyntheticEvent } from 'react';
import Icon from '@/shared/assets/svg/svg.svg'
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';

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
        <MobileMenu.Button
            icon={<Icon/>}
            onClick={() => alert('click')}
            onClose={onMenuClose}
        >
            Скачать
        </MobileMenu.Button>
    )
};