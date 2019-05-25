# Laravel Mix Tailwind CSS

This extension provides instant Tailwind CSS support to your Mix builds.  
Please make sure that you are using `laravel-mix` version 2.1 or higher.

This package works with Tailwind version 1.0 or higher as well with earlier versions.

## Usage

You can install the package with npm or yarn:

```bash
npm install mix-tailwindcss --save-dev
```

```bash
yarn add mix-tailwindcss --dev
```

Then require the extension in your Mix configuration:

```js
const mix = require('laravel-mix');

require('mix-tailwindcss');
...
```

Enable the extension by calling `tailwind()` in your Mix chain:

```js
mix.sass('resources/sass/app.scss', 'public/css')
   .tailwind();
```

If you are using a custom configuration file name, you will need to specify it when calling `tailwind()`:

```js
mix.sass('resources/sass/app.scss', 'public/css')
   .tailwind('./tailwindcss-config.js');
```

And you're done!

Don't forget to [add the Tailwind directives](https://tailwindcss.com/docs/installation/#2-add-tailwind-to-your-css) to your css entry file.
