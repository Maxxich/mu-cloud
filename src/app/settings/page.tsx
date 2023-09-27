import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { EditProfile } from '@/feature/EditProfile';
import { authOptions } from '@/shared/config/authConfig';


export default async function ProfilePage() {

    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/signin?callbackUrl=/settings')
    }
    
    return (
        <EditProfile/>
    )
}