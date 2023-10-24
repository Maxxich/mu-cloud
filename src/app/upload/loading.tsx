import { Text } from '@/shared/ui/Text';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Loader } from '@/shared/ui/Loader';
import cls from './addTrackNew.module.scss'

export default function AddNewTrackLoading() {
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Загрузить трек</Text>
            <Loader center/>
        </>
    )
}