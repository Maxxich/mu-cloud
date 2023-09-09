import { AddNewTrack } from '@/feature/AddNewTrack';
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text/Text';
import cls from './upload.module.scss'
import { AuthProtection } from '@/feature/AuthProtection';

export default function addTrack () {
    return (
        <AuthProtection>
          <div className={cls.logo}>
            <Logo/>
          </div>
          <Text title align='center' className={cls.title}>Загрузить трек</Text>
          <AddNewTrack/>
      </AuthProtection>
    )
}