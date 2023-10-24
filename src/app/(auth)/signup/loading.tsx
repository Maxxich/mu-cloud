import { Text } from '@/shared/ui/Text';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Loader } from '@/shared/ui/Loader';
import cls from './signup.module.scss'

export default function SignupLoading() {
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Зарегистрироваться в MuCloud</Text>
            <Loader center/>
        </>
    )
}