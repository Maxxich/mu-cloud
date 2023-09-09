import cls from './Links.module.scss'
import { ILinkProps, Link } from './Link';


const LinksData: ILinkProps[] = [
    {
        children: 'Главная',
        href: '/'
    },
    {
        children: 'Библиотека',
        href: '/library'
    },
    {
        children: 'Добавить трек',
        href: '/upload'
    },
    {
        children: 'Профиль',
        href: '/profile'
    },
]

interface ILinksProps {
}

export const Links: React.FunctionComponent<ILinksProps> = (props) => {
  return (
    <div className={cls.container}>
        {LinksData.map(ld => (
            <Link href={ld.href} key={ld.href}>{ld.children}</Link>
        ))}
    </div>
  );
};