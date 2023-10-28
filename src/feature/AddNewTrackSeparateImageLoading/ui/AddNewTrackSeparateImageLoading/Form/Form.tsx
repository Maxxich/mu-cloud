import { Form as FormComp } from '@/shared/ui/Form';
import cls from './Form.module.scss'
import { NameInput } from '../NameInput/NameInput';
import { NameSecondaryInput } from '../NameSecondaryInput/NameSecondaryInput';
import { AudioInput } from '../AudioInput/AudioInput';
import { ImageSquareInput } from '../ImageSquareInput/ImageSquareInput';
import { Submit } from '../Submit/Submit';
import { FormError } from '../FormError/FormError';
import { ImageWideInput } from '../ImageWideInput/ImageWideInput';
import { Preview } from '../Preview/Preview';
import { UploadCodeInput } from '../UploadCodeInput/UploadCodeInput';
import { Progress } from '../Progress/Progress';

interface IFormProps {
}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
    return (
        <>
            <div className={cls.container}>
                <FormComp className={cls.form}>
                    <NameInput/>
                    <NameSecondaryInput/>
                    <AudioInput/>
                    <ImageWideInput/>
                    <ImageSquareInput/>
                    <UploadCodeInput className={cls.last_input}/>
                    <Progress/>
                    <Submit/>
                </FormComp>
                <Preview/>
            </div>
            <FormError/>
        </>
    );
};