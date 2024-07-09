module.exports = {
  stories: [
    "../src/storybook/**/*.stories.mdx",
    "../src/components/**/*.stories.@(ts|tsx|js|jsx)",
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials',"@storybook/addon-interactions"],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  typescript: {
    check: true,
  },
  feature: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
}


