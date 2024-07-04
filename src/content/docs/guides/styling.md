---
title: CSS & Styling
---

You can style your Starlight site with custom CSS files or use the Starlight Tailwind plugin.

## Custom CSS styles

Customize the styles applied to your Starlight site by providing additional CSS files to modify or extend Starlight’s default styles.

  1. Add a CSS file to your src/ directory. For example, you could set a wider default column width and larger text size for page titles:
           
          
           /* src/styles/global.css */

            /* Reset default margin and padding */
            body, h1, h2, h3, p {
            margin: 0;
            padding: 0;
            }

            /* Global styles for links */
            a {
            color: #007bff; /* Blue link color */
            text-decoration: none; /* Remove underline */
            }

            a:hover {
            text-decoration: underline; /* Underline on hover */
            }

            /* Example custom class */
            .custom-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            }
2. Add the path to your CSS file to Starlight’s customCss array in astro.config.mjs:

           /* astro.config.mjs */

            import { defineConfig } from 'astro/config';
            import starlight from '@astrojs/starlight';

            export default defineConfig({
            integrations: [
                starlight({
                title: 'Docs With Custom CSS',
                customCss: [
                    // Relative path to your custom CSS file
                    './src/styles/custom.css',
                ],
                }),
            ],
            });

  ## Tailwind CSS

Tailwind CSS support in Astro projects is provided by the <a class="underline" href="https://docs.astro.build/en/guides/integrations-guide/tailwind/">Astro Tailwind integration.</a> Starlight provides a complementary Tailwind plugin to help configure Tailwind for compatibility with Starlight’s styles.

The Starlight Tailwind plugin applies the following configuration:

 - Configures Tailwind’s dark: variants to work with Starlight’s dark mode.
 - Uses Tailwind theme colors and fonts in Starlight’s UI.
 - Disables Tailwind’s <a class="underline" href="https://tailwindcss.com/docs/preflight">Preflight</a> reset styles while selectively restoring essential parts of Preflight required for Tailwind’s border utility classes.

## Create a new project with Tailwind

Start a new Starlight project with Tailwind CSS pre-configured using create astro:

       npm create astro@latest -- --template starlight/tailwind

## Add Tailwind to an existing project

If you already have a Starlight site and want to add Tailwind CSS, follow these steps.

<p class="font-bold">1. Add Astro’s Tailwind integration:</p>

       npx astro add tailwind

<p class="font-bold">2. Install the Starlight Tailwind plugin: </p>

       npm install @astrojs/starlight-tailwind   

<p class="font-bold">3. Create a CSS file for Tailwind’s base styles, for example at src/tailwind.css:</p>

        /* src/tailwind.css */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;    

<p class="font-bold">4. Update your Astro config file to use your Tailwind base styles and disable the default base styles:</p>

        /* astro.config.mjs */

        import { defineConfig } from 'astro/config';
        import starlight from '@astrojs/starlight';
        import tailwind from '@astrojs/tailwind';

        export default defineConfig({
        integrations: [
            starlight({
            title: 'Docs with Tailwind',
            customCss: [
                // Path to your Tailwind base styles:
                './src/tailwind.css',
            ],
            }),
            tailwind({
            // Disable the default base styles:
            applyBaseStyles: false,
            }),
        ],
        });

<p class="font-bold">5. Add the Starlight Tailwind plugin to tailwind.config.mjs:</p>

        /* tailwind.config.mjs */

        import starlightPlugin from '@astrojs/starlight-tailwind';

        /** @type {import('tailwindcss').Config} */
        export default {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        plugins: [starlightPlugin()],
        };

## Styling Starlight with Tailwind

 Starlight will use values from your <a class="underline" href="https://tailwindcss.com/docs/theme">Tailwind theme config in its UI.</a>

<p class="font-bold">If set, the following options will override Starlight’s default styles:</p>

- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">colors.accent</span> — used for links and current item highlighting
- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">colors.gray</span> — used for background colors and borders
- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">fontFamily.sans</span> — used for UI and content text
- <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">fontFamily.mono</span> — used for code examples

        /* tailwind.config.mjs */
        import starlightPlugin from '@astrojs/starlight-tailwind';
        import colors from 'tailwindcss/colors';

        /** @type {import('tailwindcss').Config} */
        export default {
        content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
        theme: {
            extend: {
            colors: {
                // Your preferred accent color. Indigo is closest to Starlight’s defaults.
                accent: colors.indigo,
                // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
                gray: colors.zinc,
            },
            fontFamily: {
                // Your preferred text font. Starlight uses a system font stack by default.
                sans: ['"Atkinson Hyperlegible"'],
                // Your preferred code font. Starlight uses system monospace fonts by default.
                mono: ['"IBM Plex Mono"'],
            },
            },
        },
        plugins: [starlightPlugin()],
        };