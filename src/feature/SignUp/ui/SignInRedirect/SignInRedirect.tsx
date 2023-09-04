import { Form } from '@/shared/ui/Form/Form';
import Link from 'next/link';
import cls from './SignInRedirect.module.scss'

interface ISignInRedirectProps {
}

export const SignInRedirect: React.FunctionComponent<ISignInRedirectProps> = (props) => {
    
  return (
    <Form.Box margin='auto' className={cls.box}>Уже есть аккаунт? <Link className={cls.link} href={'signin'} replace>Войти</Link>.</Form.Box>
  );
};
