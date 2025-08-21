module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};