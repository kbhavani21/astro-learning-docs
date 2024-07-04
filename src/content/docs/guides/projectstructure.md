---
title : Project Structure
---

## Project Structure

This guide explains the organization of a Starlight project and the purpose of various files within it.

Starlight projects generally adhere to the same file and directory structure as other Astro projects. For more details, refer to Astro’s project structure documentation.

<p class="font-bold">Files and Directories</p>
  
 - astro.config.mjs: The Astro configuration file, which includes the Starlight integration and settings.
- src/content/config.ts: Configuration file for content collections, adding Starlight’s frontmatter schemas to your project.
- src/content/docs/: Directory for content files. Starlight converts each .md, .mdx, or .mdoc file in this directory into a page on your site.
- src/content/i18n/ (optional): Directory for translation data to support internationalization.
- src/: Contains other source code and files (components, styles, images, etc.) for your project.
- public/: Directory for static assets (fonts, favicon, PDFs, etc.) that are not processed by Astro.
 

 <p class="font-bold">Example Project Contents</p>

A typical Starlight project directory might look like this:

            public/
        └── favicon.svg

        src/
        └── assets/
            ├── logo.svg
            └── screenshot.jpg

        └── components/
            ├── CustomButton.astro
            └── InteractiveWidget.jsx

        └── content/
            └── docs/
                    ├── 01-getting-started.md
                    ├── 02-advanced.md
                    └── index.mdx

            └── config.ts
            └── env.d.ts

        astro.config.mjs
        package.json
        tsconfig.json

This structure provides a clear organization for your Starlight project, making it easier to manage and scale.