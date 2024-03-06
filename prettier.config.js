/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: true,
  jsxSingleQuote: true,
  quoteProps: 'consistent',
  arrowParens: 'always',
  trailingComma: 'all',
  proseWrap: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
};
