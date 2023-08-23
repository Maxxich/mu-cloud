'use client'

import cls from './Signin.module.scss'
import { memo } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Text } from '@/shared/ui/Text/Text';
import { Form } from '@/shared/ui/Form/Form';
import { Button } from '@/shared/ui/Button/Button';

import { useCallback, SyntheticEvent, ChangeEvent } from 'react'
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { signInByEmail } from '../../model/services/signIn'
import { useSelector } from 'react-redux'
import { getPassword } from '../../model/selectors/getPassword'
import { getEmail } from '../../model/selectors/getEmail'
import { signinActions } from '../../model/slices/signinSlice'
import { getStatus } from '../../model/selectors/getStatus'
import { getErrorMessage } from '../../model/selectors/getErrorMessage'
import { useRedirectIfSignedIn } from '@/entity/viewer'

interface SigninProps {
    className?: string;
}

export const SignIn = memo((props: SigninProps) => {
    const { className } = props
    const dispatch = useAppDispatch()

    const email = useSelector(getEmail)
    const password = useSelector(getPassword)
    const status = useSelector(getStatus)
    const errorMessage = useSelector(getErrorMessage)

    useRedirectIfSignedIn()

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(signinActions.setEmail(e.target.value))
    }, [dispatch])

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(signinActions.setPassword(e.target.value))
    }, [dispatch])


    const onFormSubmit = useCallback((e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(signInByEmail())
    }, [dispatch])
    
    return (
        <Form margin='auto' onSubmit={onFormSubmit} className={className}>
            <Input
                label='Email'
                value={email}
                onChange={onChangeEmail}
            />
            <Input
                label='Пароль'
                type='password'
                value={password}
                onChange={onChangePassword}
                className={cls.last_input}
            />
            <Button variant='green' fullwidth disabled={status === 'loading'}>
                {status === 'loading'
                    ? 'Загрузка...'
                    : 'Войти'
                }
            </Button>
            {errorMessage && <Text 
                variant='error'
                className={cls.error}
            >
                {errorMessage}
            </Text>}
        </Form>
    )
})

SignIn.displayName = 'SignIn'
