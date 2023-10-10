import Link from 'next/link';
import { Form } from '@/shared/ui/Form';
import cls from './ResetPasswordRedirect.module.scss'

interface IResetPasswordRedirectProps {
}

export const ResetPasswordRedirect: React.FunctionComponent<IResetPasswordRedirectProps> = (props) => {

    return (
        <Form.Box margin='auto' className={cls.box}>Забыли пароль? <Link className={cls.link} href={'/password/reset'} replace>Восстановить</Link>.</Form.Box>
    );
};
