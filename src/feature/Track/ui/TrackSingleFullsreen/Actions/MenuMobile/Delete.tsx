import { useRouter } from 'next/navigation';
import { SyntheticEvent, useCallback } from 'react';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import IconTrash from '@/shared/assets/svg/Trash.svg'
import { trackApi } from '@/entity/track';

interface IDownloadFeatureProps {
    id: number
  onMenuClose: (e: SyntheticEvent<HTMLButtonElement, Event>) => void
}

export const Delete: React.FunctionComponent<IDownloadFeatureProps> = ({
    id,
    onMenuClose
}) => {

 
    const [triggerDelete] = trackApi.useDeleteMutation()
    const router = useRouter()

    const onClick = useCallback(async (e: SyntheticEvent<HTMLButtonElement>) => {
        try {
            await triggerDelete({ id }).unwrap()
            router.back()
        } catch (error) {
            alert('Ошибка при удалении')
        }
    }, [id, router, triggerDelete])

    return (
        <MobileMenu.Button
            icon={<IconTrash/>}
            onClick={onClick}
            onClose={onMenuClose}
            danger
        >
            Удалить
        </MobileMenu.Button>
    )
};