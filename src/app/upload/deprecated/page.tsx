import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { AddNewTrack } from '@/feature/AddNewTrack';
import { authOptions } from '@/shared/config/authConfig';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text';
import cls from './addTrackDeprecated.module.scss'

export default async function addTrackDeprecated () {

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
            <AddNewTrack/>
        </>
    )
}