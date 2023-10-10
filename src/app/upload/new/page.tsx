import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { AddNewTrackSeparateImageLoading } from '@/feature/AddNewTrackSeparateImageLoading';
import { authOptions } from '@/shared/config/authConfig';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text';
import cls from './addTrackNew.module.scss'

export default async function addTrackNew () {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/upload')
    }

    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Загрузить трек</Text>
            <AddNewTrackSeparateImageLoading/>
        </>
    )
}