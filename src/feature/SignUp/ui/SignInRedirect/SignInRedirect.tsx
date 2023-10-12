'use client'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Form } from '@/shared/ui/Form';
import cls from './SignInRedirect.module.scss'

interface ISignInRedirectProps {
}

export const SignInRedirect: React.FunctionComponent<ISignInRedirectProps> = (props) => {

    const urlSearchParams = useSearchParams()
    const callbackUrl = urlSearchParams?.get('callbackUrl')
    

    const href = (
        callbackUrl 
            ? '/signin?callbackUrl=' + callbackUrl
            :   '/signin'
    )
    
    return (
        <Form.Box margin='auto' className={cls.box}>Уже есть аккаунт? <Link className={cls.link} href={href} replace>Войти</Link>.</Form.Box>
    );
};
