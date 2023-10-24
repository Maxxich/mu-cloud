import { Text } from '@/shared/ui/Text';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Loader } from '@/shared/ui/Loader';
import cls from './signin.module.scss'

export default function SigninLoading() {
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Войти в MuCloud</Text>
            <Loader center/>
        </>
    )
}