import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Choose } from '@/shared/ui/Choose';
import { authOptions } from '@/shared/config/authConfig';
import cls from './Upload.module.scss'

export default async function addTrack () {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/upload')
    }

    return (
        <div className={cls.container}>
            <Choose.Link 
                href='/upload/new'
            >
                Новый способ
            </Choose.Link>
            <Choose.Separator>
                или
            </Choose.Separator>
            <Choose.Link
                href='/upload/deprecated'
            >
                Старый способ (deprecated)
            </Choose.Link>
        </div>
    )
}