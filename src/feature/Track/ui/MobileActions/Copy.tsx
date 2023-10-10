'use client'

import toast from 'react-hot-toast';
import { SyntheticEvent } from 'react';
import { MobileMenu } from '@/shared/ui/MobileMenu';
import IconCopy from '@/shared/assets/svg/Copy.svg'
import { frontUrl } from '@/shared/const/frontUrl';


interface ILikeDesktopProps {
  id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Copy: React.FunctionComponent<ILikeDesktopProps> = ({
    id, onMenuClose
}) => {


    const onClick = () => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
            toast('Ссылка скопирована')
        } else {
            toast('Ошибка')
        }
    }

    return (
        <MobileMenu.Button
            icon={<IconCopy/>}
            onClick={onClick}
            onClose={onMenuClose}
        >
            Копировать ссылку
        </MobileMenu.Button>
    )
};