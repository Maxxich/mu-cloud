import { useId, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/global/providers/StoreProvider/config/store';
import { IconButton } from '@/shared/ui/IconButton';
import IconColorPallete from '@/shared/assets/svg/ColorPallete.svg'
import cls from './PickColor.module.scss'
import { getColor } from '../../../model/selectors/getColor';
import { AddNewTrackSeparateImageLoadingActions } from '../../../model/slices/AddNewTrackSeparateImageLoading';

interface IPickColorProps {
}

export const PickColor: React.FunctionComponent<IPickColorProps> = (props) => {

    const color = useSelector(getColor)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)
    const tooltipId = useId()

    const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(AddNewTrackSeparateImageLoadingActions.setColor(e.target.value))
    }

    const onButtonClick = () => {
        if (ref.current) {
            ref.current.click()
        }
    }

    return (
        <div className={cls.container}>
            <input
                type='color'
                onChange={onChangeColor}
                value={color}
                ref={ref}
                className={cls.input}
            />
            <IconButton
                icon={<IconColorPallete/>}
                onClick={onButtonClick}
                size={'l'}
                tooltipId={`${tooltipId}`}
                tooltipContent={'Выбрать цвет'}
                tooltipPlace='bottom'
            />
        </div>
    );
};