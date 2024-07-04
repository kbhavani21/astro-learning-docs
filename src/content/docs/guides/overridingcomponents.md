---
title : Overriding Components
---

Starlight’s default UI and configuration options are designed to be flexible and work for a range of content. Much of Starlight’s default appearance can be customized with CSS and configuration options.

When you need more than what’s possible out of the box, Starlight supports building your own custom components to extend or override (completely replace) its default components.

## When to override

<p class="font-bold">You might want to override components in Astro Starlight when:</p>

- Customization: You need to change the look and feel of a default component.
- Functionality: You need to add or modify the behavior of a component.
- Specific Use Case: You have a specific requirement for certain pages that the default component doesn’t fulfill.
- You want to change how a part of Starlight’s UI looks in a way not possible with custom CSS.

## How to override

<p class="font-bold">Step 1. Create a Custom Component</p>

First, create a custom version of the component you want to override.
You can find a full list of components in the <a class="underline" href="https://starlight.astro.build/reference/overrides/">Overrides Reference.</a>

<p class="font-bold">1. Create your custom component file (e.g., CustomHeader.astro):</p>
    
       touch src/components/CustomHeader.astro

<p class="font-bold">2. Edit CustomHeader.astro with your custom code:</p>
         
        /* /src/components/CustomHeader.astro */ 
        ---
        // Import any required dependencies
        import { Header } from '@astrojs/starlight/components';

        // Define your custom logic or styles
        const { siteTitle } = Astro.props;
        ---

        <header class="custom-header bg-blue-500 text-white p-4">
        <h1>{siteTitle || 'Default Site Title'}</h1>
        </header>

        <style>
        .custom-header {
            background-color: var(--astro-color-primary, #1d4ed8);
            color: white;
            padding: 1rem;
        }
        </style>

 Tell Starlight to use your custom component in the components configuration option in astro.config.mjs:

        /* astro.config.mjs */ 

        import { defineConfig } from 'astro/config';
        import starlight from '@astrojs/starlight';

        export default defineConfig({
        integrations: [
            starlight({
            title: 'My Docs with Overrides',
            components: {
                // Override the default `SocialIcons` component.
                SocialIcons: './src/components/EmailLink.astro',
            },
            }),
        ],
        });       

## Reuse a Built-in Component

You can seamlessly integrate Starlight’s default UI components into your custom components by importing and rendering them. This approach allows you to maintain the consistency of Starlight’s basic UI while enhancing it with additional custom UI elements.

For instance, the example below demonstrates how to create a custom component that includes an e-mail link along with the default SocialIcons component:

        ---
        import { SocialIcons } from '@astrojs/starlight/components';
        ---

        <div class="custom-component">
        <SocialIcons />
        <a href="mailto:youremail@example.com" class="email-link">Email Us</a>
        </div>

        <style>
        .custom-component {
            display: flex;
            align-items: center;
        }
        .email-link {
            margin-left: 1rem;
            color: #1d4ed8;
        }
        </style>

When incorporating a built-in component into a custom component, ensure you:

- Spread Astro.props: This ensures the built-in component receives all necessary data for rendering.

- Include a < slot />: This ensures that any child elements passed to the component are rendered correctly by Astro.


## Use page data

When you override a Starlight component, your custom component receives a standard Astro.props object containing the current page's data. This allows you to utilize these values to dynamically control the rendering of your component.

For example, you can access the page's frontmatter values via Astro.props.entry.data. In the example below, a custom PageTitle component uses this data to display the current page’s title:

    ---
    const { entry } = Astro.props;
    const { title } = entry.data;
    ---

    <h1>{title}</h1>

Learn more about all the available props in the <a herf="https://starlight.astro.build/reference/overrides/#component-props" class="underline">Overrides Reference.</a>


## Conditional Overrides for Specific Pages

Component overrides apply universally to all pages. However, you can use values from Astro.props to conditionally render your custom UI, Starlight’s default UI, or even entirely different content based on the page context.

For instance, the following example demonstrates a custom Footer component that displays “Built with Starlight 🌟” on the homepage, while reverting to the default footer on other pages:

    ---
    import DefaultFooter from '@astrojs/starlight/components/Footer.astro';
    const { url } = Astro.props;
    ---

    <footer>
    {url === '/' ? (
        <p>Built with Starlight 🌟</p>
    ) : (
        <DefaultFooter {...Astro.props} />
    )}
    </footer>
Learn more about conditional rendering in <a  herf="https://docs.astro.build/en/basics/astro-syntax/#dynamic-html" class="underline">Astro’s Template Syntax guide.</a>