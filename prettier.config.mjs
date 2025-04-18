/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all',
  semi: true,
  singleQuote: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
