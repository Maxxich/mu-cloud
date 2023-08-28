import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/global/providers/StoreProvider';
import { Theme } from '@/shared/const/theme';
import { ThemeProvider } from '@/global/providers/ThemeProvider';
import '@/global/styles/index.scss';

export interface componentRenderOptions {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        initialState,
        asyncReducers,
        theme = Theme.DEFAULT,
    } = options;

    return (
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState}
            >
                <ThemeProvider initialTheme={theme}>
                    <div className={`app ${theme}`}>{children}</div>
                </ThemeProvider>
            </StoreProvider>
    );
}

export function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
