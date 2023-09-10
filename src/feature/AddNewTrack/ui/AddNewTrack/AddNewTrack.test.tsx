import { fireEvent, screen, waitFor } from '@testing-library/react';
import { componentRender } from '@/shared/lib/test/componentRender/componentRender';
import '@testing-library/jest-dom'
import { AddNewTrack } from './AddNewTrack';
import Image from './Reason.png'

class FormDataMock {
    files: Record<string, File>
    constructor () {
        this.files = {}
    }

    set (name: string, file: File) {
        this.files[name] = file
    }

    delete (name: string) {
        delete this.files[name]
    }

    get (name: string) {
        return this.files[name]
    }
}
//@ts-ignore
global.FormData = FormDataMock
//@ts-ignore
URL.createObjectURL = (file: File) => Image.src

describe('AddNewTrack',  () => {
    test('test render crop wide', async () => {
        componentRender(<AddNewTrack />);
        const imageInputButton = screen.getByTestId('image-input-button');
        expect(imageInputButton).toBeInTheDocument();
    
        const input = screen.getByTestId('input');
        //@ts-ignore
        const file = new File([Image], 'Reason.png', {
            type: 'image/png'
        })
        await waitFor(() =>
            fireEvent.change(input, {
                target: { files: [file] },
            })
        );

        await waitFor(() => expect(screen.getByTestId('crop-wide')).toBeInTheDocument())
    });

});
