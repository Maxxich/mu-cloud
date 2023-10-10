'use client'
import { useRouter } from 'next/navigation';
import { MutableRefObject, memo, useEffect, useRef, useState } from 'react'
import { Dialog as DialogElement } from '@/shared/ui/Dialog';
import { Button } from '@/shared/ui/Button';

interface ConfirmEmailWarningDialogProps {
}

export const Dialog = memo((props: ConfirmEmailWarningDialogProps) => {

    const initialFocus: MutableRefObject<null | HTMLElement> = useRef(null)
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => {
        setIsOpen(false)
    }

    const onGoToSettings = () => {
        onClose()
        router.push('/settings')
    }

    useEffect(() => {
        setIsOpen(true)
    }, [])
    
    return (
        <DialogElement.Wrapper
            onClose={onClose}
            open={isOpen}
            initialFocus={initialFocus}
        >
            <DialogElement.Panel>
                <DialogElement.Title>
                    Почта
                </DialogElement.Title>
                <DialogElement.Description>
                    Ваша почта не подтверждена, из-за чего Вам ограничена возможность загрузки музыки и восстановления пароля
                </DialogElement.Description>
                <DialogElement.ButtonsGroup>
                    <Button onClick={onClose}>
                        Закрыть
                    </Button>
                    <Button
                        ref={initialFocus as any}
                        onClick={onGoToSettings}
                    >
                        Настройки
                    </Button>
                </DialogElement.ButtonsGroup>
            </DialogElement.Panel>
        </DialogElement.Wrapper>
    )
})

Dialog.displayName = 'Dialog'
