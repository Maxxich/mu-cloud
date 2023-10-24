import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import cls from './Settings.module.scss'

export default function AddNewTrackLoading() {
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Настройки аккаунта</Text>
            <Loader center/>
        </>
    )
}