const mix = require('laravel-mix');

class Tailwind {
    dependencies() {
        this.requiresReload = `Tailwind CSS has now been installed.`;

        return ['tailwindcss'];
    }

    register(configPath = './tailwind.js') {
        this.configPath = configPath;
    }

    boot() {
        if (Mix.components.has('sass')) {
            Config.processCssUrls = false;
        }

        const tailwindcss = require('tailwindcss');

        Config.postCss.push(tailwindcss(this.configPath));
    }
}

mix.extend('tailwind', new Tailwind());
