'use client'

import { SyntheticEvent, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import IconTrash from '@/shared/assets/svg/Trash.svg'
import { Menu } from '@/shared/ui/Menu';
import { trackApi } from '@/entity/track';


interface ILikeDesktopProps {
  id: number
}

export const Delete: React.FunctionComponent<ILikeDesktopProps> = ({
    id
}) => {

    const [triggerDelete] = trackApi.useDeleteMutation()
    const router = useRouter()

    const onClick = useCallback(async (e: SyntheticEvent<HTMLButtonElement>) => {
        try {
            await triggerDelete({ id }).unwrap()
            router.back()
            toast('Трек удален')
        } catch (error) {
            toast('Ошибка')
        }
    }, [id, router, triggerDelete])

    return (
        <Menu.Item
            component={'button'}
            icon={<IconTrash/>}
            onClick={onClick}
            isMobile={false}
            danger
        >
            Удалить
        </Menu.Item>
    )
};