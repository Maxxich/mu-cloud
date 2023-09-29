'use client'

import { SyntheticEvent } from 'react';
import IconShare from '@/shared/assets/svg/Share.svg'
import { frontUrl } from '@/shared/const/frontUrl';
import { Menu } from '@/shared/ui/Menu/Menu';


interface ILikeDesktopProps {
  id: number
}

export const Share: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {


    const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
        } else {
            alert('Данная функция временно не работает из-за отсутствия сертификата SSL')
        }
    }

    return (
        <Menu.Item
            component={'button'}
            icon={<IconShare/>}
            onClick={onClick}
            isMobile={false}
        >
            Поделиться
        </Menu.Item>
    )
};