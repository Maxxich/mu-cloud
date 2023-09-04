'use client'

import cls from './SignUp.module.scss'
import { memo } from 'react'
import { Form } from '@/shared/ui/Form/Form';
import { signupReducer } from '../model/slices/signupSlice'
import { useRedirectIfSignedIn } from '@/entity/viewer'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { FormError } from './FormError/FormError';
import { EmailInput } from './EmailInput/EmailInput';
import { NameInput } from './NameInput/NameInput';
import { PasswordInput } from './PasswordInput/PasswordInput';
import { PasswordConfirmInput } from './PasswordConfirmInput/PasswordConfirmInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { SignInRedirect } from './SignInRedirect/SignInRedirect';


const reducers: ReducersList = {
    signup: signupReducer,
};

export const SignUp = memo(() => {
    useRedirectIfSignedIn()


    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Form margin='auto' className={cls.form}>
                <EmailInput/>
                <NameInput/>
                <PasswordInput/>
                <PasswordConfirmInput className={cls.last_input}/>
                <SubmitButton/>
            </Form>
            <SignInRedirect/>
            <FormError/>
        </DynamicModuleLoader>
    )
})

SignUp.displayName = 'SignUp'
