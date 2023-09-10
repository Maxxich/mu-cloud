import Link from 'next/link';
import { Form } from '@/shared/ui/Form/Form';
import cls from './SignUpRedirect.module.scss'

interface ISignUpRedirectProps {
}

export const SignUpRedirect: React.FunctionComponent<ISignUpRedirectProps> = (props) => {
    
  return (
    <Form.Box margin='auto' className={cls.box}>Нет аккаунта? <Link className={cls.link} href={'signup'} replace>Зарегистрировться</Link>.</Form.Box>
  );
};
