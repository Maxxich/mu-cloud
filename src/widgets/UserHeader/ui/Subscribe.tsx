'use client'
import { useCallback } from 'react'
import { userRtkApi } from '@/entity/user';
import { Button } from '@/shared/ui/Button';

interface ISubscribeProps {
    className?: string
    id: number
}

export const Subscribe: React.FunctionComponent<ISubscribeProps> = ({
    className,
    id
}) => {

    const { data: subscribed, isError } = userRtkApi.useCheckSubscribeQuery({ id })
    const [triggerCreate] = userRtkApi.useCreateSubscribeMutation()
    const [triggerRemove] = userRtkApi.useRemoveSubscribeMutation()

    const onClick = useCallback(() => {
        if (isError) return
        if (subscribed) {
            triggerRemove({ id })
        } else {
            triggerCreate({ id })
        }
    }, [triggerRemove, triggerCreate, isError, subscribed, id])

    const text = subscribed ? 'Вы подписаны' : 'Подписаться'

    return (
        <Button className={className} onClick={onClick}>
            {text}
        </Button>
    );
};