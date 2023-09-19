import { useId } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconDownload from '@/shared/assets/svg/Download.svg'

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

    const tooltipId = useId()

    const onClick = () => {
        const link = document.createElement('a');
        link.href = src;
        link.setAttribute('download', `${trackname} + ' - ' + ${author}`);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
    }

    return <IconButton
        icon={<IconDownload/>}   
        onClick={onClick} 
        variant='secondary'
        tooltipId={`${tooltipId}`}
        tooltipContent='Скачать'
        tooltipPlace='top'
    />;
};