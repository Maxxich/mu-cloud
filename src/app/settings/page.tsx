import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { EditProfile } from '@/feature/EditProfile';
import { authOptions } from '@/shared/config/authConfig';
import { RemoveProfile } from '@/feature/RemoveProfile';
import { ConfirmEmail } from '@/feature/ConfirmEmail';
import { Text } from '@/shared/ui/Text';
import Logo from '@/shared/assets/svg/Logo.svg'
import cls from './Settings.module.scss'


export default async function ProfilePage() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/settings')
    }

    const emailConfirmed = session?.user?.email.confirmed ?? true
    
    return (
        <>
            <div className={cls.logo}>
                <Logo/>
            </div>
            <Text title align='center' className={cls.title}>Настройки аккаунта</Text>
            {!emailConfirmed && <ConfirmEmail id={'#confirm'}/>}
            <EditProfile/>
            <RemoveProfile/>
        </>
    )
}