import type { StorybookConfig } from "@storybook/nextjs";
import path from 'path'

const config: StorybookConfig = {
  stories: ["../../src/**/*.mdx", "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "..", "..", "src");

		config.module!.rules = config.module!.rules!.map((rule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i }
			}

			return rule
		})

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		})
		

    return config
  }
};
export default config;
