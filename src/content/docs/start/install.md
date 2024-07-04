---
title: Manual Setup
---

## Getting Started with Starlight

Starlight is a comprehensive documentation theme built on Astro, offering a streamlined setup process and powerful features. Here’s how to get started with your new project:

## Quick Start
<p class="font-bold">Create a New Project:</p>

Initialize a new Astro project with Starlight by executing this command in your terminal:

    npm create astro@latest -- --template starlight

This command sets up a new project directory with all necessary files and configurations tailored for your site.

<p class="font-bold">See it in Action:</p>

Explore Starlight's capabilities directly in your browser by opening the template on StackBlitz.

## Start the Development Server:

To preview your work locally and benefit from automatic browser refresh on code changes, run:

    npm run dev

This command starts Astro’s development server and provides a URL in your terminal to access your local preview.

## Adding Content
<p class="font-bold">Starlight is ready for content creation:</p>

- Add new pages by creating Markdown files in <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">src/content/docs/.</span>
- Explore file-based routing, and support for MDX and Markdoc files in the Pages guide.

## Next Steps

- <span class="font-bold">Configure:</span> Customize your Starlight site using common options detailed in the <a class =" underline" href="/guides/customizing/">"Customizing Starlight"</a> guide.
- <span class="font-bold">Navigate:</span> Set up your sidebar navigation efficiently with guidance from the <a class =" underline" href="/guides/sidebarnavigation/">"Sidebar Navigation" </a>guide.
- <span class="font-bold">Components:</span> Discover and integrate built-in features like cards, tabs, and more using the <a class =" underline" href="/guides/component/">"Components"</a> guide.
- <span class="font-bold">Deploy:</span> Prepare to publish your site by following the <a class =" underline" href="https://docs.astro.build/en/guides/deploy/">"Deploy your site"</a> guide in the Astro documentation.

## Updating Starlight
Regularly update Starlight and other Astro packages to benefit from improvements and new features:

    npx @astrojs/upgrade

Refer to the Starlight changelog for details on each release’s changes.

## Troubleshooting Starlight

For troubleshooting and configuration help:

- Use project configuration and individual page frontmatter references.
- Consult the sidebar guides for content addition and customization tips.
- Explore comprehensive Astro documentation for deeper insights into Astro’s workings.
- Visit the Astro Discord community for assistance and discussions, utilizing the starlight tag in the #support forum or joining the #starlight channel for development-related conversations.

 <style>

  h1:where(.astro-j6tvhyss)
   { 
    font-size:30px
    }
    .sl-markdown-content h2{
     font-size:20px   
    }
    
</style>