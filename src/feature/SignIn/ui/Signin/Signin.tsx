'use client'

import { memo } from 'react'
import { useCallback, SyntheticEvent, ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '@/shared/ui/Input/Input'
import { Form } from '@/shared/ui/Form/Form';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store'
import { useRedirectIfSignedIn } from '@/entity/viewer'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import cls from './Signin.module.scss'
import { FormError } from './FormError/FormError';
import { SignUpRedirect } from './SignUpRedirect/SignUpRedirect';
import { signInByEmail } from '../../model/services/signIn'
import { getPassword } from '../../model/selectors/getPassword'
import { getEmail } from '../../model/selectors/getEmail'
import { signinActions, signinReducer } from '../../model/slices/signinSlice'
import { getStatus } from '../../model/selectors/getStatus'


const reducers: ReducersList = {
    signin: signinReducer,
};

export const SignIn = memo(() => {
    const dispatch = useAppDispatch()

    const email = useSelector(getEmail)
    const password = useSelector(getPassword)
    const status = useSelector(getStatus)

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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Form margin='auto' onSubmit={onFormSubmit} className={cls.form}>
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
            </Form>
            <SignUpRedirect/>
            <FormError/>
        </DynamicModuleLoader>
    )
})

SignIn.displayName = 'SignIn'
