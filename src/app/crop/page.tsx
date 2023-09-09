'use client'
import { CropImage } from '@/shared/ui/CropImage';
import Image from '@/shared/assets/images/neon.jpeg'

export default function Crop () {
    return <CropImage
        aspectRatio={1}
        submitButtonText='Crop'
        cancelButtonText='Back'
        imageFileURL={Image.src}
        minHeight={200}
        minWidth={200}
        onSuccess={(file: File) => alert(file.name)}
        title='Crop image'
        info='Crop this image please'
        onCancel={() => {}}
    />
}
