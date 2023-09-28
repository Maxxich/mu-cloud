import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { EditProfile } from '@/feature/EditProfile';
import { authOptions } from '@/shared/config/authConfig';
import { RemoveProfile } from '@/feature/RemoveProfile';
import Logo from '@/shared/assets/svg/Logo.svg'
import cls from './Settings.module.scss'
import { Text } from '@/shared/ui/Text/Text';


export default async function ProfilePage() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/settings')
    }
    
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Настройки аккаунта</Text>
            <EditProfile/>
            <RemoveProfile/>
        </>
    )
}