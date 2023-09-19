import { useRouter } from 'next/navigation';
import { useRef, MutableRefObject } from 'react';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';

interface IRequireAuthDialogProps {
    open: boolean
    onClose: (value: boolean) => void
}

export const RequireAuthDialog: React.FunctionComponent<IRequireAuthDialogProps> = ({
    onClose,
    open
}) => {

    const initialFocus: MutableRefObject<null | HTMLElement> = useRef(null)
    const router = useRouter()

    const onCancel = () => {
        onClose(false)
    }

    const onSign = () => {
        onClose(false)
        router.push('/signin')
    }

    return (
        <Dialog.Wrapper
            onClose={onClose}
            open={open}
            initialFocus={initialFocus}
        >
            <Dialog.Panel>
                <Dialog.Title>
                    Добавить к себе
                </Dialog.Title>
                <Dialog.Description>
                    Для данного действия требуется выполнить вход
                </Dialog.Description>
                <Dialog.ButtonsGroup>
                    <Button onClick={onCancel}>
                        Отмена
                    </Button>
                    <Button
                        ref={initialFocus as any}
                        onClick={onSign}
                    >
                        Войти
                    </Button>
                </Dialog.ButtonsGroup>
            </Dialog.Panel>
        </Dialog.Wrapper>
    );
};
