---
title : Customizing Starlight
---

Starlight provides sensible default styling and features, so you can get started quickly with no configuration needed. When you want to start customizing the look and feel of your Starlight site, this guide has you covered.

## Add your logo

Adding a custom logo to the site header is a quick way to add your individual branding to a Starlight site.

<p class="!font-bold ">1. Add your logo image file to the src/assets/ directory:</p>

             my-astro-project/
            │
            └───src/
                └───assets/
                │   │
                │   ├───logo.svg 
                └───content/
                │   
                └───astro.config.mjs/
                   
Add the path to your logo as Starlight’s logo.src option in astro.config.mjs:

    /* astro.config.mjs */

    import { defineConfig } from 'astro/config';
    import starlight from '@astrojs/starlight';

    export default defineConfig({
    integrations: [
        starlight({
        title: 'Docs With My Logo',
        logo: {
            src: './src/assets/my-logo.svg',
        },
        }),
    ],
    });

By default, the logo will be displayed alongside your site’s title. If your logo image already includes the site title, you can visually hide the title text by setting the replacesTitle option. The title text will still be included for screen readers so that the header remains accessible.

       starlight({
        title: 'Docs With My Logo',
        logo: {
            src: './src/assets/my-logo.svg',
            replacesTitle: true,
        },
        }),

## Enable sitemap

Starlight has built-in support for generating a sitemap. Enable sitemap generation by setting your URL as site in astro.config.mjs:

    /* astro.config.mjs */
    export default defineConfig({
    site: 'https://stargazers.club',
    integrations: [starlight({ title: 'Site with sitemap' })],
    });

 ## Customizing Page Layout

You can customize the layout of Starlight pages by adjusting the template property in a page’s frontmatter.

Here’s how you can implement a wider page layout without sidebars using the template: splash option:  

    ---
    title: My Landing Page
    template: splash
    ---

    Content of your landing page goes here.

<p class="!font-bold ">In this example:</p>

- <span class="!font-bold ">The template:</span> splash setting specifies a wider layout without sidebars for the page "My Landing Page".
- This layout is suitable for landing pages or pages where a full-width content presentation is desired.

##  Table of Contents

In Starlight, you can customize the table of contents (TOC) either globally through the Starlight integration or on a per-page basis using frontmatter properties.

<p class="!font-bold ">Global Customization:</p>

To adjust the table of contents globally, modify the tableOfContents configuration in your Astro configuration file (astro.config.mjs):

    /* astro.config.mjs */

    defineConfig({
    integrations: [
        starlight({
        title: 'Docs with custom table of contents config',
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
        }),
    ],
    });

  <p class="!font-bold ">Frontmatter:</p>
   
    /* src/content/docs/example.md */

    ---
    title: Page with only H2s in the table of contents
    tableOfContents:
    minHeadingLevel: 2
    maxHeadingLevel: 2
    ---  

 ## Adding Social Links to Your Site
Starlight provides built-in support for adding links to your social media accounts in the site header through the social option in the Starlight integration.

<p class="!font-bold ">1. Steps to Add Social Links:</p>

Configure Social Links in Astro Configuration:

Add social media links to your Astro configuration (astro.config.mjs) using the social option. Here’s an example:

    /* astro.config.mjs */

    export default {
    // Other configurations
    social: [
        { name: 'GitHub', link: 'https://github.com/yourusername' },
        { name: 'Twitter', link: 'https://twitter.com/yourusername' },
        // Add more social media links as needed
    ],
    };
- Replace 'yourusername' and the links with your actual social media profiles.

<p class="!font-bold ">2. Supported Icons:</p>

Starlight supports a variety of social media icons out of the box. Refer to the Configuration Reference for a full list of supported icons.

<p class="!font-bold ">3. Customization and Support:</p>

If you need support for additional social media services not listed, reach out to the Starlight community on GitHub or Discord. They can provide guidance on extending support for new services.

## Adding Edit Links to Your Documentation

Starlight allows you to display an “Edit page” link in each page’s footer. This feature is especially useful for open-source projects, as it encourages readers to contribute improvements to your documentation.

<p class="!font-bold ">Steps to Enable Edit Links:</p>

<p class="!font-bold ">1. Configure Edit Links in Astro Configuration:</p>

Set the editLink.baseUrl to the URL where users can edit your repository in the Starlight integration config. This base URL will be combined with the path to the current page to generate the full edit link.

<p class="!font-bold ">Example for GitHub:</p>
 
    /* astro.config.mjs */  
    import { defineConfig } from 'astro/config';
    import starlight from '@astrojs/starlight';

    export default defineConfig({
    integrations: [
        starlight({
        title: 'Docs With Edit Links',
        editLink: {
            baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
        },
        }),
    ],
    });

 - Replace USER_NAME, REPO_NAME, and BRANCH_NAME with your actual GitHub details.
   
<p class="!font-bold ">Example for GitLab:</p>
   
    /* astro.config.mjs */

    export default {
    // Other configurations
    editLink: {
        baseUrl: 'https://gitlab.com/USER_NAME/REPO_NAME/-/edit/BRANCH_NAME/',
    },
    };

- Similarly, replace the placeholders with your GitLab details.

<p class="!font-bold ">2. Including Path to Subdirectory (If Needed):</p>

If your Starlight project resides in a subdirectory within your repository, include the path to this subdirectory at the end of the base URL.

Example for a project in a docs/ subdirectory on GitHub:

    /* astro.config.mjs */

    export default {
    // Other configurations
    editLink: {
        baseUrl: 'https://github.com/USER_NAME/REPO_NAME/edit/BRANCH_NAME/docs/',
    },
    };

 - Adjust the path accordingly based on your project structure.
   

## Custom 404 page

Starlight allows you to create a custom 404 page to provide a more personalized and user-friendly experience when a visitor encounters a page not found error on your site.


<p class="!font-bold ">Steps to Create a Custom 404 Page:</p>

<p class="!font-bold ">1. Create a 404 Markdown File:</p>

Add a 404.md (or 404.mdx for MDX format) file to your src/content/docs/ directory. This file will serve as your custom 404 page.

Example directory structure:

    src/
    content/
        docs/
        404.md
        index.md
    astro.config.mjs

<p class="!font-bold ">2. Configure Your 404 Page:</p>

In the 404.md file, use Starlight’s page layout and customization options to define your 404 page content. You can utilize templates, components, and frontmatter settings to tailor the page to your needs.

Example 404.md content:

    ---
    title: '404'
    template: splash
    editUrl: false
    hero:
    title: '404'
    tagline: 'Page not found. Check the URL or try using the search bar.'
    ---


- title: Sets the title of the page.
- template: Defines the layout template for the page (splash in this example).
- editUrl: Disables the edit link for this page.
- hero: Configures a hero section with a title and tagline.

<p class="!font-bold ">3. Customize as Needed:</p>

Customize the hero section, add additional content, or integrate navigation links as per your site’s design and user experience requirements.

<p class="!font-bold ">4. Preview and Deploy:</p>

Once configured, preview your 404 page locally to ensure it displays as expected. Deploy your Astro site to make the custom 404 page live.