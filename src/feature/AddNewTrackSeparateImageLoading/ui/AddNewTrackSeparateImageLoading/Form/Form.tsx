import { Form as FormComp } from '@/shared/ui/Form/Form';
import cls from './Form.module.scss'
import { NameInput } from '../NameInput/NameInput';
import { NameSecondaryInput } from '../NameSecondaryInput/NameSecondaryInput';
import { AudioInput } from '../AudioInput/AudioInput';
import { ImageSquareInput } from '../ImageSquareInput/ImageSquareInput';
import { Submit } from '../Submit/Submit';
import { FormError } from '../FormError/FormError';
import { ImageWideInput } from '../ImageWideInput/ImageWideInput';

interface IFormProps {
}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
    return (
        <>
            <FormComp margin='auto' className={cls.form}>
                <NameInput/>
                <NameSecondaryInput/>
                <AudioInput/>
                <ImageWideInput/>
                <ImageSquareInput className={cls.last_input}/>
                <Submit/>
            </FormComp>
            <FormError/>
        </>
    );
};