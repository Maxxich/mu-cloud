import { userServerApi } from '@/entity/user'
import { Form } from '@/shared/ui/Form/Form'
import { Text } from '@/shared/ui/Text/Text'
import Logo from '@/shared/assets/svg/Logo.svg'
import cls from './Confirm.module.scss'


type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


export default async function ConfirmEmail({
    searchParams
}: Props) {

    const token: string = (searchParams['token'] ?? '') as string

    const confirmSuccess = await userServerApi.confirmEmailByToken(token)

    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Подтверждение почты</Text>
            {
                confirmSuccess
                    ?  (
                        <Form.Box margin='auto'>
                            Ваш электронный адрес успешно подтвержден!
                        </Form.Box>
                    )
                    : (
                        <Form.Box margin='auto'>
                            Произошла ошибка. Пожалуйста, попробуйте позже. Возможно ссылка в письме устарела.
                        </Form.Box>
                    )
            }
        </>
    )
}