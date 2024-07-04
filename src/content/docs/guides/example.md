---
title: Pages
description: A guide in my new Starlight docs site.
---

Starlight generates your site’s HTML pages based on your content, with flexible options provided via Markdown frontmatter. In addition, Starlight projects have full access to <a href="https://docs.astro.build/en/basics/astro-pages/" class="underline">Astro’s powerful page generation tools.</a> This guide shows how page generation works in Starlight.

## File Formats 

Starlight simplifies content authoring with built-in support for Markdown (.md) and MDX (.mdx) formats, requiring no additional configuration. For those looking to explore other formats like <a class="underline" herf="https://docs.astro.build/en/guides/integrations-guide/markdoc/">Markdoc, an experimental Astro integration</a> is available.

## Adding Pages

To add new pages to your site, create <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">.md</span> or <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">.mdx</span> files within the src/content/docs/ directory. Organize your files into sub-folders to create structured paths with multiple segments.

<p class="font-bold">Example File Structure:</p>

For instance, consider the following structure to generate pages at 
<span class="text-[13px] bg-[#EDEEF3] px-2 py-1">example.com/hello-world and example.com/reference/faq</span>:

        ---
        title: "Getting Started"
        description: "Learn how to get started with our project."
        ---

        # Getting Started

        Welcome to the Getting Started guide. Follow these steps to begin using the software.

        ## Step 1: Installation

        Download and install the software from the official website.

        ## Step 2: Configuration

        Configure the software according to your requirements.

  Writing content in markdown has been straightforward and efficient. The front matter (YAML block at the top) allows us to specify metadata such as the title and description, which are essential for SEO and site organization.      

<p class="font-bold">2. Astro Files (.astro):</p>

Astro files are used for creating components and custom layouts. They combine the best of HTML, JavaScript, and CSS, offering flexibility and power.
  
  - <p class="font-bold">Example:</p>

           --- 
            const { title, description } = Astro.props;
            ---

            <html>
            <head>
            <title>{title}</title>
            <meta name="description" content={description} />
            </head>
            <body>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <slot />
            </main>
            </body>
            </html>

Creating custom components and layouts using .astro files has given us the ability to maintain a consistent look and feel across our site while allowing for individual page customization. This hybrid approach leverages the simplicity of HTML with the dynamic capabilities of JavaScript.


## Directory Structure

A well-organized directory structure is crucial for managing a growing documentation site. In Astro Starlight, we followed a structure that keeps our content and components neatly organized.

- <p class="font-bold">Example Directory Structure:</p>

           my-astro-project/
            │
            └───src/
                │
                └───content/
                │   │
                │   ├───index.md
                │   ├───getting-started.md
                │   └───guides/
                │       │   guide-one.md
                │       │   guide-two.md
                │
                └───components/
                │   │
                │   ├───Header.astro
                │   └───Footer.astro
                │
                └───layouts/
                │   │
                │   ├───DefaultLayout.astro
                │   └───CustomLayout.astro
                │
                └───pages/
                    │   
                    └───CustomLayout.astro
                    └───archived.html

Keeping our markdown content in the content directory and our reusable components and layouts in their respective directories has made it easy to manage and update the site. This organization helps in maintaining a clear separation between content and presentation logic.

## Customizing Content Pages

One of the highlights of using Astro Starlight is the ability to customize content pages extensively. Here are some customization options we explored:

<p class="font-bold">1. Custom Layouts:</p>

By creating custom layouts in the layouts directory, we could apply different designs to different sections of our site.

 - <p class="font-bold">Example Custom Layout:</p>
        
          // src/layouts/CustomLayout.astro
            ---
            const { title, description } = Astro.props;
            ---

            <html>
            <head>
            <title>{title}</title>
            <meta name="description" content={description} />
            </head>
            <body>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <slot />
            </main>
            </body>
            </html>

- <p class="font-bold">Using Custom Layout:</p>

            ---
            layout: ../layouts/CustomLayout.astro
            title: "Installation Guide"
            description: "A comprehensive guide to installing the software."
            ---

            # Installation Guide

            Welcome to the installation guide. Follow these steps to set up the software.


<p class="font-bold">2. Using Starlight’s design in custom pages</p>
To use the Starlight layout in custom pages, wrap your page content with the <StarlightPage /> component. This can be helpful if you are generating content dynamically but still want to use Starlight’s design.

        /* src/pages/custom-page/example.astro */
        ---
        import StarlightPage from '@astrojs/starlight/components/StarlightPage.astro';
        import CustomComponent from './CustomComponent.astro';
        ---

        <StarlightPage frontmatter={{ title: 'My custom page' }}>
        <p>This is a custom page with a custom component:</p>
        <CustomComponent />
        </StarlightPage>

 Read more in the “Pages” <a class="underline" href="https://starlight.astro.build/guides/pages/">guide in the Astro Starlight docs.</a>       

<p class="font-bold">3. Embedding Components:</p>

Astro allows embedding components within markdown files, enhancing static content with interactive elements.

  - <p class="font-bold">Example:</p>
        
            ---
            title: "Interactive Guide"
            description: "A guide with interactive components."
            setup: |
            import MyComponent from '../components/MyComponent.astro';
            ---

            # Interactive Guide

            <MyComponent />

<p class="font-bold">4. Styling:</p>

Applying custom styles using Tailwind CSS or global CSS files helped us maintain visual consistency and branding.

  - <p class="font-bold">Example: </p>
       
           <div class="custom-style">
                This section is styled with Tailwind CSS.
            </div>

   - <p class="font-bold">Global CSS:</p>

            .custom-style {
                font-weight: bold;
                color: #007acc;
                }
         

The combination of markdown and Astro files provides a powerful yet simple way to manage content and customize pages. The well-organized directory structure, combined with the flexibility of custom layouts and components, allows for building a documentation site that is both easy to manage and visually appealing. Whether you are a developer or a content creator, Astro Starlight offers the tools needed to create a professional and well-structured documentation site.