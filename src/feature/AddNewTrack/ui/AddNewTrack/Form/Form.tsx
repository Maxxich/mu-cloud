import { Form as FormComp } from '@/shared/ui/Form';
import cls from './Form.module.scss'
import { NameInput } from '../NameInput/NameInput';
import { NameSecondaryInput } from '../NameSecondaryInput/NameSecondaryInput';
import { AudioInput } from '../AudioInput/AudioInput';
import { ImageInput } from '../ImageInput/ImageInput';
import { Submit } from '../Submit/Submit';
import { FormError } from '../FormError/FormError';

interface IFormProps {
}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
    return (
        <>
            <FormComp margin='auto' className={cls.form}>
                <NameInput/>
                <NameSecondaryInput/>
                <AudioInput/>
                <ImageInput className={cls.last_input}/>
                <Submit/>
            </FormComp>
            <FormError/>
        </>
    );
};