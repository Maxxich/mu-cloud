'use client'
import classNames from 'classnames'
import toast from 'react-hot-toast';
import { memo, useCallback } from 'react'
import { Form } from '@/shared/ui/Form';
import { Button } from '@/shared/ui/Button';
import { userRtkApi } from '@/entity/user';
import { Text } from '@/shared/ui/Text';
import cls from './ConfirmEmail.module.scss'

interface ConfirmEmailProps {
    className?: string;
    id?: string
}

export const ConfirmEmail = memo((props: ConfirmEmailProps) => {
    const { className, id } = props
    const classes = classNames(cls.container, {}, className)
    const [triggerSend] = userRtkApi.useSendEmailConfirmationMutation()

    const onClick = useCallback(async () => {
        try {
            await triggerSend().unwrap()
            toast('Ссылка для потверждения отправлена на ваш Email')
        } catch (error) {
            toast('Ошибка')
        }
    }, [triggerSend])
    
    return (
        <Form.Box margin='auto' className={classes} id={id}>
            <Text title>Почта</Text>
            <Text>Ваша почта не подтверждена</Text>
            <Button
                onClick={onClick}
            >
                Отправить ссылку для подтверждения
            </Button>
        </Form.Box>
    )
})

ConfirmEmail.displayName = 'ConfirmEmail'
