'use client'
import classNames from 'classnames';
import { usePathname, useSearchParams } from 'next/navigation';
import cls from './NotSigned.module.scss'
import { Link } from '../../Links/Link';

interface Props {
    className?: string
}

export const NotSigned: React.FunctionComponent<Props> = ({
    className
}) => {

    const pathnName = usePathname()
    const urlSearchParams = useSearchParams()
    const callbackUrl = urlSearchParams?.get('callbackUrl')
    

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
        <div className={classNames(cls.container, className)}>
            <Link
                href={href} 
            >
            Войти
            </Link>
        </div>
    );
};