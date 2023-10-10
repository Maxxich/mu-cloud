'use client'
import { SyntheticEvent } from 'react';
import { MobileMenu } from '@/shared/ui/MobileMenu';
import IconDownload from '@/shared/assets/svg/Download.svg'

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

    const onClick = () => {
        const link = document.createElement('a');
        link.href = src;
        link.setAttribute('download', `${trackname} + ' - ' + ${author}`);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
    }

    return (
        <MobileMenu.Button
            icon={<IconDownload/>}
            onClick={onClick}
            onClose={onMenuClose}
        >
            Скачать
        </MobileMenu.Button>
    )
};