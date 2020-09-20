module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    
    "@storybook/addon-contexts/register",
    "@storybook/addon-background/register",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    {
      name:"@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ]
}