import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Logo from '@/shared/assets/svg/Logo.svg'
import { ResetPassword } from '@/feature/ResetPassword'
import { authOptions } from '@/shared/config/authConfig'
import { Text } from '@/shared/ui/Text'
import cls from './Reset.module.scss'

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
            <Text title align='center' className={cls.title}>Сброс пароля</Text>
            <ResetPassword/>
        </>
    )
}