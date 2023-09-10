import { useId } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import Icon from '@/shared/assets/svg/svg.svg'


interface ILikeDesktopProps {
  id: number
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
  id
}) => {

  const tooltipId = useId()

  return <IconButton
  icon={<Icon/>}    
    // onClick={onClick} 
    variant='secondary'
    tooltipId={`${tooltipId}`}
    tooltipContent={'Добавить к себе'}
    tooltipPlace='top'
  />;
};