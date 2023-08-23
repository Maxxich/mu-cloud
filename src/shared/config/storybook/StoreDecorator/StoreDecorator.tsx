import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/global/providers/StoreProvider/StoreProvider';


export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => {
        const Decorator = (StoryComponent: StoryFn) => (
            <StoreProvider
                initialState={state}
            >
                <StoryComponent />
            </StoreProvider>
        );

        return Decorator
}


