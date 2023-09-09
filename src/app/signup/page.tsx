import Logo from '@/shared/assets/svg/Logo.svg'
import { Text } from '@/shared/ui/Text/Text'
import cls from './signup.module.scss'
import { SignUp } from '@/feature/SignUp'

export default function SignUpPage() {

  return (
    <>
      <div className={cls.logo}>
        <Logo/>
      </div>
      <Text title align='center' className={cls.title}>Зарегистрироваться в MuCloud</Text>
      <SignUp/>
    </>
  )
}