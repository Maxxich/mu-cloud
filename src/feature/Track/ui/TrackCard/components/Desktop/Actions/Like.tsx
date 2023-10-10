'use client'
import { useCallback, useId, useState } from 'react';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { IconButton } from '@/shared/ui/IconButton';
import IconHeartFill from '@/shared/assets/svg/HeartFill.svg'
import IconHeartStroke from '@/shared/assets/svg/HeartStroke.svg'
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog';
import { trackApi } from '@/entity/track';


interface ILikeDesktopProps {
  id: number
  setIsDeleted?: (bool: boolean) => void
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
    id,
    setIsDeleted
}) => {
    const session = useSession()
    const { data: liked } = trackApi.useIsInLikedQuery({ id })
    const [addTrigger] = trackApi.useAddToLikedMutation()
    const [removeTrigger] = trackApi.useRemoveFromLikedMutation()

    const tooltipId = useId()
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    const onClick = useCallback(async () => {
        if (!session.data) {
            return setIsOpen(true)
        }
        if (liked) {
            try {
                await removeTrigger({ id }).unwrap()
                toast('Трек убран из добавленных')
                setIsDeleted && setIsDeleted(true)
            } catch (error) {
                toast('Ошибка')
                setIsDeleted && setIsDeleted(false)
            }
        } else {
            try {
                await addTrigger({ id }).unwrap()
                toast('Добавлено')
                setIsDeleted && setIsDeleted(false)
            } catch (error) {
                toast('Ошибка')
                setIsDeleted && setIsDeleted(true)
            }
        }
    }, [removeTrigger, addTrigger, liked, id, session.data, setIsDeleted])

    const icon = liked ? <IconHeartFill/> : <IconHeartStroke/>
    const tooltipContent = liked ? 'Убрать из добавленных' : 'Добавить к себе'

    return (
        <>
            <IconButton
                icon={icon}    
                onClick={onClick} 
                variant='secondary'
                size={'s'}
                tooltipId={`${tooltipId}`}
                tooltipContent={tooltipContent}
                tooltipPlace='top'
            />
            <RequireAuthDialog
                open={isOpen}
                onClose={onClose}
            />
        </>
    )
};