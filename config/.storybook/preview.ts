import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { PortalsDecorator } from "../../src/shared/config/storybook/PortalsDecorator/PortalsDecorator"
import { Theme } from "../../src/shared/const/theme"
import { AppRouterContext } from "next/dist/shared/lib/app-router-context";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextRouter: {
      Provider: AppRouterContext.Provider,
    },
  },
  decorators: [
		StyleDecorator,
		ThemeDecorator(Theme.DEFAULT),
    PortalsDecorator
	]
};

export default preview;
