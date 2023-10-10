import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Logo from '@/shared/assets/svg/Logo.svg'
import { authOptions } from '@/shared/config/authConfig'
import { Text } from '@/shared/ui/Text'
import { ConfirmResetPassword } from '@/feature/ConfirmResetPassword'
import cls from './Confirm.module.scss'

export default async function ResetPasswordPage() {

    const session = await getServerSession(authOptions)
    if (session?.user ) {
        redirect('/')
    }

    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Новый пароль</Text>
            <ConfirmResetPassword/>
        </>
    )
}