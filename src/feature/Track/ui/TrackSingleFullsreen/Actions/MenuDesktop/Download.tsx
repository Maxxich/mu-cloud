import { SyntheticEvent } from 'react';
import IconDownload from '@/shared/assets/svg/Download.svg'
import { Menu } from '@/shared/ui/Menu';

interface IDownloadFeatureProps {
  src: string
  trackname: string
  author: string
}

export const Download: React.FunctionComponent<IDownloadFeatureProps> = ({
    src,
    author,
    trackname,
}) => {

    const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        const link = document.createElement('a');
        link.href = src;
        link.setAttribute('download', `${trackname} + ' - ' + ${author}`);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
    }

    return (
        <Menu.Item
            component={'button'}
            icon={<IconDownload/>}
            onClick={onClick}
        >
            Скачать
        </Menu.Item>
    )
};