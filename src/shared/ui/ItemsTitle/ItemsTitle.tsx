import Link from 'next/link'
import cls from './ItemsTitle.module.scss'

interface IItemsTitleProps {
  title: string
  href?: string
}

export const ItemsTitle: React.FunctionComponent<IItemsTitleProps> = ({
    href,
    title,
}) => {
    return (
        <div className={cls.container}>
            <h2 className={cls.title}>{title}</h2>
            {
                href && <Link href={href} className={cls.link}>Показать все</Link>
            }
        </div>
    );
};

