
'use client'
import { usePathname, useSearchParams } from 'next/navigation';
import IconUser from '@/shared/assets/svg/User.svg'
import { NavLink } from '../NavLink/NavLink';

interface INotSignedProps {
}

export const NotSigned: React.FunctionComponent<INotSignedProps> = (props) => {

    const pathnName = usePathname()
    const urlSearchParams = useSearchParams()
    const callbackUrl = urlSearchParams.get('callbackUrl')

    
    const href = (
        [
            '/signin',
            '/signup',
        ].includes(pathnName)
            ? (
                callbackUrl 
                    ? '/signin?callbackUrl=' + callbackUrl
                    :   '/signin'
            )
            :  '/signin?callbackUrl=' + pathnName
    )
    
    return (
        <NavLink
            icon={<IconUser/>}
            href={href}
        />
    )
};