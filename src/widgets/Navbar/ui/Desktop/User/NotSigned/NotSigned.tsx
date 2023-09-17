import classNames from 'classnames';
import cls from './NotSigned.module.scss'
import { Link } from '../../Links/Link';

interface Props {
    className?: string
}

export const NotSigned: React.FunctionComponent<Props> = ({
    className
}) => {

    return (
        <div className={classNames(cls.container, className)}>
            <Link
                href={'/api/auth/signin'} 
            >
            Войти
            </Link>
        </div>
    );
};