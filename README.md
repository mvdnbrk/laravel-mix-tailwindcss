# Laravel Mix Tailwind CSS

This extension provides instant Tailwind CSS support to your Mix (v2.1 and up) builds.

## Usage

First, install the extension.

```bash
npm install mix-tailwindcss --save-dev
```

Then, require it within your `webpack.mix.js` file, like so:

```js
const mix = require('laravel-mix');

require('mix-tailwindcss');

mix
    .js('resources/js/app.js', 'public/js')
    .less('resources/less/app.less', 'public/css')
    .tailwind();
```

And you're done!  
Compile everything down with `npm run dev`.

[Don't forget to add the Tailwind directives](https://tailwindcss.com/docs/installation/#2-add-tailwind-to-your-css) to your Sass/Less/Stylus entry file.
