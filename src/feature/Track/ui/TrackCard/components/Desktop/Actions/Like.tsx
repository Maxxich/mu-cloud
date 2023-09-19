'use client'
import { useCallback, useId, useState } from 'react';
import { useSession } from 'next-auth/react';
import { IconButton } from '@/shared/ui/IconButton/IconButton';
import IconHeartFill from '@/shared/assets/svg/HeartFill.svg'
import IconHeartStroke from '@/shared/assets/svg/HeartStroke.svg'
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog/RequireAuthDialog';
import { trackApi } from '@/entity/track';


interface ILikeDesktopProps {
  id: number
}

export const Like: React.FunctionComponent<ILikeDesktopProps> = ({
    id
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

    const onClick = useCallback(() => {
        if (!session.data) {
            return setIsOpen(true)
        }
        if (liked) {
            removeTrigger({ id })
        } else {
            addTrigger({ id })
        }
    }, [removeTrigger, addTrigger, liked, id, session.data])

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