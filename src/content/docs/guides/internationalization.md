---
title : Internationalization (i18n)
---

Starlight provides built-in support for multilingual sites, including routing, fallback content, and full right-to-left (RTL) language support.

## Configure i18n

1. Tell Starlight about the languages you support by passing locales and defaultLocale to the Starlight integration:

    /* astro.config.mjs */

    import { defineConfig } from 'astro/config';
    import starlight from '@astrojs/starlight';

    export default defineConfig({
    integrations: [
        starlight({
        title: 'My Docs',
        // Set English as the default language for this site.
        defaultLocale: 'en',
        locales: {
            // English docs in `src/content/docs/en/`
            en: {
            label: 'English',
            },
            // Simplified Chinese docs in `src/content/docs/zh-cn/`
            'zh-cn': {
            label: '简体中文',
            lang: 'zh-CN',
            },
            // Arabic docs in `src/content/docs/ar/`
            ar: {
            label: 'العربية',
            dir: 'rtl',
            },
        },
        }),
    ],
    });

2. Your defaultLocale will be used for fallback content and UI labels, so choose the language you are most likely to start writing content in, or already have content for.

Create a directory for each language in src/content/docs/. For example, for the configuration shown above, create the following folders:

    src/
    └── content/
        └── docs/
                └── index.md
        └── zh-cn/
                └── index.md
            

    
 3. You can now add content files in your language directories. Use the same file name to associate pages across languages and take advantage of Starlight’s full set of i18n features, including fallback content, translation notices, and more.

For example, create ar/index.md and en/index.md to represent the homepage for Arabic and English respectively.

For more advanced i18n scenarios, Starlight also supports configuring internationalization using the Astro’s i18n config option.   