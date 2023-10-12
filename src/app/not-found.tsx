import Link from 'next/link'
import cls from './not-found.module.scss'

export default function page404 () {
    return (
        <div className={cls.container_title}>
            <div className={cls.title}>
                <div className={cls.number}>
                    4
                </div>
                <div className={cls.moon}>
                    <div className={cls.face}>
                        <div className={cls.mouth}/>
                        <div className={cls.eyes}>
                            <div className={cls.eye_left}/>
                            <div className={cls.eye_right}/>
                        </div>
                    </div>
                </div>
                <div className={cls.number}>
                    4
                </div>
            </div>
            <div className={cls.subtitle}>
                Ууупс. Кажется вы потерялись.
            </div>
            <Link href={'/'} className={cls.button}>На главную</Link>
        </div>
    )
}