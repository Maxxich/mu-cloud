import { Link } from '../../Links/Link';
import cls from './NotSigned.module.scss'

interface IDefaultProps {
}

export const NotSigned: React.FunctionComponent<IDefaultProps> = (props) => {

  return (
    <div className={cls.container}>
        <Link
            href={'/signin'} 
        >
            Войти
        </Link>
    </div>
  );
};