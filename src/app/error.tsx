'use client'
import Link from 'next/link'
import cls from './not-found.module.scss'

export default function error () {
    return (
        <div className={cls.container_title}>
            <div className={cls.title}>
                <div className={cls.moon}>
                    <div className={cls.face}>
                        <div className={cls.mouth}/>
                        <div className={cls.eyes}>
                            <div className={cls.eye_left}/>
                            <div className={cls.eye_right}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.subtitle}>
                Ууупс. Произогла какая-то ошибка.
            </div>
            <Link href={'/'} className={cls.button}>На главную</Link>
        </div>
    )
}