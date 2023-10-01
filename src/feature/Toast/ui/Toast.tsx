'use client'
import { Toaster as T } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { getSelectedTrack } from '@/entity/player';
import cls from './Toast.module.scss'


interface Props {
    isMobile: boolean
}

export const Toast: React.FunctionComponent<Props> = ({
    isMobile
}) => {

    const selectedTrack = useSelector(getSelectedTrack)

    if (isMobile) return(
        <T/>
    );

    return (
        <T
            toastOptions={{
                className: cls.toast
            }}
            position='bottom-left'
            containerStyle={
                selectedTrack
                    ? {
                        bottom: 80,
                    }
                    : undefined
            }
        />
    );
};