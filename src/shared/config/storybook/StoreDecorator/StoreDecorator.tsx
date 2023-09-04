import { StateSchema, StoreProvider } from '@/global/providers/StoreProvider';
import { StoryFn } from '@storybook/react';



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


