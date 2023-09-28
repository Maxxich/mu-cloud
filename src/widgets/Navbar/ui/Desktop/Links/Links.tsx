import classNames from 'classnames';
import cls from './Links.module.scss'
import { ILinkProps, Link } from './Link';


const LinksData: ILinkProps[] = [
    {
        children: 'Библиотека',
        href: '/library'
    },
    {
        children: 'Добавить трек',
        href: '/upload'
    }
]

interface ILinksProps {
    className?: string
}

export const Links: React.FunctionComponent<ILinksProps> = ({
    className
}) => {
    return (
        <div className={classNames(cls.container, className)}>
            {LinksData.map(ld => (
                <Link href={ld.href} key={ld.href}>{ld.children}</Link>
            ))}
        </div>
    );
};