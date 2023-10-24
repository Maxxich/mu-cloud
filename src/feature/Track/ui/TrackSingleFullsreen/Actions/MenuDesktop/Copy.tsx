'use client'

import toast from 'react-hot-toast';
import { SyntheticEvent } from 'react';
import IconCopy from '@/shared/assets/svg/Copy.svg'
import { frontUrl } from '@/shared/const/frontUrl';
import { Menu } from '@/shared/ui/Menu';


interface ILikeDesktopProps {
  id: number
}

export const Copy: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {


    const onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(frontUrl + '/tracks/' + id)
            toast('Ссылка скопирована')
        } else {
            toast('Добавлено')
        }
    }

    return (
        <Menu.Item
            component={'button'}
            icon={<IconCopy/>}
            onClick={onClick}
        >
            Копировать ссылку
        </Menu.Item>
    )
};