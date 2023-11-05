import type { Preview } from "@storybook/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { themes } from '@storybook/theming';
import { Theme } from "../../src/global/providers/ThemeProvider/Theme"
import { PortalsDecorator } from "../../src/shared/config/storybook/PortalsDecorator/PortalsDecorator"
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    layout: 'centered',
    nextRouter: {
      Provider: RouterContext.Provider,
    },
  },
  decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.DEFAULT),
    PortalsDecorator
	],
};

export default preview;
