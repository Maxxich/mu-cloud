'use client'
import { memo } from 'react'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Form } from '@/shared/ui/Form';
import { EmailInput } from './EmailInput/EmailInput';
import { SubmitButton } from './SubmitButton/SubmitButton';
import { FormError } from './FormError/FormError';
import cls from './ResetPassword.module.scss'
import { ResetPasswordReducer } from '../model/slices/ResetPasswordSlice';

const reducers: ReducersList = {
    resetPassword: ResetPasswordReducer,
};

export const ResetPassword = memo(() => {
    
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Form margin='auto' className={cls.form}>
                <EmailInput className={cls.last_input}/>
                <SubmitButton/>
            </Form>
            <FormError/>
        </DynamicModuleLoader>
    )
})

ResetPassword.displayName = 'ResetPassword'
