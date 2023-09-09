import { getServerSession } from 'next-auth'
import { backendUrl } from '@/shared/const/backendUrl';
import { authOptions } from '@/shared/config/authConfig';

async function getProfile(adress: string | undefined) {
    if (!adress) {
        throw new Error('404 Трек не найден!(')
    }
    const res = await fetch(`${backendUrl}/users/get-by-id-or-adress/${adress}`)
    if (!res.ok) {
        throw new Error('404 Трек не найден!(')
    }
    return res.json()
}

export default async function ProfilePage() {

    const session = await getServerSession(authOptions)
    const user = await getProfile(session?.user.adress)
    
    return <pre>{user.name}</pre>
}