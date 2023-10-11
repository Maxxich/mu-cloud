'use client'
import { memo } from 'react'
import { DynamicModuleLoader, ReducersList } from '@/shared/config/DynamicModuleLoader/DynamicModuleLoader'
import { Form } from '@/shared/ui/Form';
import { PasswordInput } from './PasswordInput/PasswordInput';
import { PasswordConfirmInput } from './PasswordConfirmInput/PasswordConfirmInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { FormError } from './FormError/FormError';
import cls from './ConfirmResetPassword.module.scss'
import { confirmResetPasswordReducer } from '../model/slices/ConfirmResetPasswordSlice';

const reducers: ReducersList = {
    confirmResetPassword: confirmResetPasswordReducer,
};

export const ConfirmResetPassword = memo(() => {
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Form margin='auto' className={cls.form}>
                <PasswordInput/>
                <PasswordConfirmInput className={cls.last_input}/>
                <SubmitButton/>
            </Form>
            <FormError/>
        </DynamicModuleLoader>
    )
})

ConfirmResetPassword.displayName = 'ConfirmResetPassword'
