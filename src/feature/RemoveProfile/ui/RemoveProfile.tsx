'use client'
import { memo, useCallback, useState } from 'react'
import classNames from 'classnames'
import { signOut, useSession } from 'next-auth/react';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Dialog } from '@/shared/ui/Dialog';
import { backendUrl } from '@/shared/const/backendUrl';
import { useRedirectIfSignedOut } from '@/entity/viewer/lib/useRedirectIfSignedOut';
import { Form } from '@/shared/ui/Form';
import cls from './RemoveProfile.module.scss'

interface RemoveProfileProps {
    className?: string;
}

export const RemoveProfile = memo((props: RemoveProfileProps) => {
    const { className } = props
    const classes = classNames(cls.container, {}, className)
    const [modalOpen, setIsModalOpen] = useState(false)
    const session = useSession()
    useRedirectIfSignedOut()

    const deleteAccount = useCallback(async() => {
        try {
            const accessToken = session.data?.backendTokens?.accessToken
            if (!accessToken) {
                throw Error()
            }

            const response = await fetch(
                backendUrl + '/user-private', {  
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    }  
                }
            )

            if (response.status !== 200) {
                throw Error()
            }
            signOut({
                redirect: true,
                callbackUrl: '/'
            })
        } catch (error) {
            alert('Произошла ошибка во время удаления аккаунта')
        }
    }, [session])

    const onClick = () => setIsModalOpen(true)
    const onClose = () => setIsModalOpen(false)
    const onDelete = useCallback(() => {
        deleteAccount()
    }, [deleteAccount])
    
    return (
        <Form.Box margin='auto' className={classes}>
            <Text title>Удаление</Text>
            <Text>Вы можете безвозвратно удалить свой аккаунт</Text>
            <Button
                onClick={onClick}
            >
                Удалить аккаунт
            </Button>
            <Dialog.Wrapper
                onClose={onClose}
                open={modalOpen}
            >
                <Dialog.Panel>
                    <Dialog.Title>
                        Удалить аккаунт
                    </Dialog.Title>
                    <Dialog.Description>
                        Данное действие безвозратно удалит ваш аккаунт без возможности восстановления
                    </Dialog.Description>
                    <Dialog.ButtonsGroup>
                        <Button onClick={onClose} variant='green'>
                            Отмена
                        </Button>
                        <Button
                            onClick={onDelete}
                            variant='danger'
                        >
                            Удалить
                        </Button>
                    </Dialog.ButtonsGroup>
                </Dialog.Panel>
            </Dialog.Wrapper>
        </Form.Box>
    )
})

RemoveProfile.displayName = 'RemoveProfile'
