'use client'
import Cropper, { ReactCropperElement } from 'react-cropper';
import { useEffect, useCallback , useRef, useState, memo } from 'react'
import 'cropperjs/dist/cropper.css';
import { isMobile } from 'react-device-detect';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@/shared/ui/Button';
import cls from './CropImage.module.scss'
import './style.css'

interface ICropper {
  minWidth: number
  minHeight: number
  onSuccess: (file: File) => void
  onCancel: (e: React.SyntheticEvent) => void
  cancelButtonText: string
  submitButtonText: string
  title: string
  info: string
  imageFileURL?: string
  aspectRatio: number
  testId?: string
  continueButtonTestId?: string
}

export const CropImage: React.FunctionComponent<ICropper> = memo(({
    minHeight,
    minWidth,
    onSuccess,
    onCancel,
    cancelButtonText,
    submitButtonText,
    info,
    imageFileURL,
    aspectRatio,
    testId,
    continueButtonTestId
}) => {
    const cropperRef = useRef<ReactCropperElement>(null);
    const [error, setError] = useState<string | null>(null)
    const [height, setHeight] = useState<number>()
    const cropperContainerRef = useRef<HTMLDivElement>()
  
    const crop = ((e: Cropper.CropEvent<HTMLImageElement>) => {    
        if (Math.ceil(e.detail.width) < minWidth || Math.ceil(e.detail.height) < minHeight) { 
            setError(`Minimal resolution should be ${minWidth}:${minHeight}`)
        } else {            
            setError(null)
        }
    })

    const onError = (message: string) => setError(message)

    const onClick = useCallback((e: React.SyntheticEvent) => {
        const cropper = cropperRef.current?.cropper;
        const width = cropper?.getCroppedCanvas().width
        const height = cropper?.getCroppedCanvas().height
        if (!height || !width) return onError('width or height error')
        if (Math.ceil(width) < minWidth) return onError('width error')
        if (Math.ceil(height) < minHeight) return onError('height error')
        cropper?.getCroppedCanvas().toBlob((blob) => {
            if (blob) {
                onSuccess(new File([blob], 'image.png' , {
                    type: 'image/png',
                }))
            }
        })
    }, [minHeight, minWidth, onSuccess])

    const [key, setKey] = useState<number>(0)
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

    useEffect(() => {
        setKey((prev) => prev += 1)
    }, [isLandscape])

    useEffect(() => {
        const resizeCb = () => {
            setHeight(window.innerHeight)
        }

        window.onresize = resizeCb
        return () => {
            window.onresize = null
        }
    },[])

    const mods: Mods = {
        [cls.container_mobile]: isMobile
    }

    return (
        <div className={classNames(cls.wrapper)} style={{ height }} data-testid={testId}>
            <div className={classNames(cls.container, mods)}>
                <div className={cls.cropper_wrapper}
                    ref={cropperContainerRef as any}
                >
                    {imageFileURL && cropperContainerRef.current ? 
                        <Cropper
                            key={key}
                            src={imageFileURL}
                            className={error ? 'danger' : ''}
                            ref={cropperRef}
                            scalable={false}
                            style={{ height: cropperContainerRef.current.clientHeight , width: cropperContainerRef.current.clientWidth }}
                            zoomTo={0.1}
                            initialAspectRatio={aspectRatio}
                            aspectRatio={aspectRatio}
                            preview=".img-preview"
                            viewMode={1}
                            responsive
                            minCropBoxHeight={10}
                            crop={crop}
                            minCropBoxWidth={10}
                            background={false}
                            dragMode="move"
                            autoCropArea={isLandscape ? 0.6 : 1}
                            checkOrientation={true} 
                            cropBoxResizable={false}
                            cropBoxMovable={false}
                            toggleDragModeOnDblclick={false}
                            guides={false}
                            center={false}
                        />
                        :
                        <div>Ошибка</div>
                    }
                </div>

                <p className={cls.info}>
                    {info}
                </p>
                {error && <p className={cls.error_message}>{error}</p> }
                <div className={cls.buttons}>
                    <Button
                        onClick={onCancel}

                    >
                        {cancelButtonText}
                    </Button>
                    <Button
                        onClick={onClick}
                        disabled={Boolean(error)}
                        variant='green'
                        data-testid={continueButtonTestId}
                    >
                        {submitButtonText}
                    </Button>
                </div>

            </div>
        </div>
    );
})

CropImage.displayName = 'CropImage'