'use client'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Form } from '@/shared/ui/Form/Form';
import cls from './SignUpRedirect.module.scss'

interface ISignUpRedirectProps {
}

export const SignUpRedirect: React.FunctionComponent<ISignUpRedirectProps> = (props) => {

    const urlSearchParams = useSearchParams()
    const callbackUrl = urlSearchParams.get('callbackUrl')
    

    const href = (
        callbackUrl 
            ? '/signup?callbackUrl=' + callbackUrl
            :   '/signup'
    )
    
    return (
        <Form.Box margin='auto' className={cls.box}>Нет аккаунта? <Link className={cls.link} href={href} replace>Зарегистрировться</Link>.</Form.Box>
    );
};
