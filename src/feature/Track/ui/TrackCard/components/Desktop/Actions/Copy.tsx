'use client'

import toast from 'react-hot-toast';
import { useId } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconCopy from '@/shared/assets/svg/Copy.svg'
import { frontUrl } from '@/shared/const/frontUrl';


interface ILikeDesktopProps {
    id: number
}

export const Copy: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {
    const tooltipId = useId()

    const onClick = () => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
            toast('Ссылка скопирована')
        } else {
            toast('Ошибка')
        }
    }
  
    return <IconButton
        icon={<IconCopy/>}    
        onClick={onClick} 
        variant='secondary'
        tooltipId={`${tooltipId}`}
        tooltipContent='Копировать ссылку'
        tooltipPlace='top'
    />;
};