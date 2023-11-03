'use client'
import { useSession } from 'next-auth/react';
import { useCallback, useState } from 'react'
import { userRtkApi } from '@/entity/user';
import { Button } from '@/shared/ui/Button';
import { RequireAuthDialog } from '@/shared/ui/RequireAuthDialog';

interface ISubscribeProps {
    className?: string
    id: number
}

export const Subscribe: React.FunctionComponent<ISubscribeProps> = ({
    className,
    id
}) => {

    const session = useSession()

    const { data: subscribed, isError } = userRtkApi.useCheckSubscribeQuery({ id })
    const [triggerCreate] = userRtkApi.useCreateSubscribeMutation()
    const [triggerRemove] = userRtkApi.useRemoveSubscribeMutation()

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    const onClick = useCallback(() => {
        if (session.status !== 'authenticated') {
            return setIsOpen(true)
        }
        if (isError) return
        if (subscribed) {
            triggerRemove({ id })
        } else {
            triggerCreate({ id })
        }
    }, [triggerRemove, triggerCreate, isError, subscribed, id, session])

    const text = subscribed ? 'Вы подписаны' : 'Подписаться'

    return (
        <>
            <Button className={className} onClick={onClick}>
                {text}
            </Button>
            <RequireAuthDialog
                open={isOpen}
                onClose={onClose}
            />
        </>
    );
};