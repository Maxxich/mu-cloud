// import { redirect } from 'next/navigation'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/shared/config/authConfig'
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text/Text'
import { SignUp } from '@/feature/SignUp'
import cls from './signup.module.scss'

export default async function SignUpPage() {

    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Зарегистрироваться в MuCloud</Text>
            <SignUp/>
        </>
    )
}