import { AddNewTrack } from '@/feature/AddNewTrack';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text/Text';
import cls from './upload.module.scss'

export default function addTrack () {
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Загрузить трек</Text>
            <AddNewTrack/>
        </>
    )
}