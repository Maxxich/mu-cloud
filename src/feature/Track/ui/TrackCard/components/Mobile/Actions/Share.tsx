'use client'

import { SyntheticEvent } from 'react';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import IconShare from '@/shared/assets/svg/Share.svg'
import { frontUrl } from '@/shared/const/frontUrl';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id, onMenuClose
}) => {


    const onClick = () => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
        } else {
            alert('Данная функция временно не работает из-за отсутствия сертификата SSL')
        }
    }

    return (
        <MobileMenu.Button
            icon={<IconShare/>}
            onClick={onClick}
            onClose={onMenuClose}
        >
            Поделиться
        </MobileMenu.Button>
    )
};