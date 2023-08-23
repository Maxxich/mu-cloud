import { SignIn } from '@/feature/SignIn'
import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text/Text'
import cls from './signin.module.scss'

export default function SignInPage() {

  return (
    <>
      <div className={cls.logo}>
        <Logo/>
      </div>
      <Text title align='center' className={cls.title}>Войти в MuCloud</Text>
      <SignIn/>
    </>
  )
}