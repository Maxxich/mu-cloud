'use client'

import { useId } from 'react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconShare from '@/shared/assets/svg/Share.svg'
import { frontUrl } from '@/shared/const/frontUrl';


interface ILikeDesktopProps {
    id: number
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {
    const tooltipId = useId()

    const onClick = () => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
        } else {
            alert('Данная функция временно не работает из-за отсутствия сертификата SSL')
        }
    }
  
    return <IconButton
        icon={<IconShare/>}    
        onClick={onClick} 
        variant='secondary'
        tooltipId={`${tooltipId}`}
        tooltipContent='Поделиться'
        tooltipPlace='top'
    />;
};