import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'
import { useId } from 'react';

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

  return <IconButton
    icon={<Icon/>}   
    // onClick={onClick} 
    variant='secondary'
    tooltipId={`${tooltipId}`}
    tooltipContent='Скачать'
    tooltipPlace='top'
  />;
};