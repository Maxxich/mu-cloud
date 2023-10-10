import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { SignIn } from '@/feature/SignIn'
import Logo from '@/shared/assets/svg/Logo.svg'
import { authOptions } from '@/shared/config/authConfig'
import { Text } from '@/shared/ui/Text'
import cls from './signin.module.scss'

export default async function SignInPage() {

    const session = await getServerSession(authOptions)
    if (session?.user ) {
        redirect('/')
    }

    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Войти в MuCloud</Text>
            <SignIn/>
        </>
    )
}