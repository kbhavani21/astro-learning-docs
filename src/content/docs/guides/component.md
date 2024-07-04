---
title : Components
---

Astro Starlight provides a powerful mechanism for building and utilizing components to create modular and reusable elements within your web projects.

<p class="font-bold">Why Use Components?</p>

Components in Astro Starlight offer several benefits:

1. <span class="!font-bold ">Reusability:</span> Components allow you to encapsulate HTML, CSS, and JavaScript logic into reusable units, promoting code reusability and reducing redundancy across your project.

2. <span class="!font-bold ">Modularity:</span> By breaking down your UI into smaller, manageable components, you can build complex interfaces more efficiently while maintaining a clear and organized structure.

3. <span class="!font-bold ">Scalability:</span> Components facilitate scalability by enabling you to add, update, and replace parts of your application without impacting other components, enhancing maintainability and extensibility.

## Creating and Using Components

In Astro Starlight, components are typically created as .astro files, which blend HTML-like syntax with JavaScript for dynamic content and interactivity. Here’s how we've utilized components in our projects:

<p class ="font-bold">Example Component: Button Component</p>

Let’s create a simple button component (Button.astro) as an example:

    /* src/content/docs/example.mdx */
        ---
    text: string; // Prop for button text
    onClick?: () => void; // Optional click event handler
    ---

    <button onclick={onClick}>{text}</button>

 - <p class="!font-bold ">In this component:</p>

- Props (text, onClick): Props are used to pass data into the component. Here, text is the text displayed on the button, and onClick is an optional event handler for the button click.

<p class ="font-bold">Using the Button Component</p>

Now, import and use the Button component in your pages or other components:   

    ---
    title: "Using Components in Astro Starlight"
    description: "Example of using components in Astro Starlight."
    setup: |
    import Button from '../components/Button.astro';
    ---

    # Using Components in Astro Starlight

    <Button text="Click Me" onClick={() => console.log('Button clicked!')} />



## Built-in components

Starlight provides some built-in components for common documentation use cases. These components are available from the @astrojs/starlight/components package.

## Tabs

You can display a tabbed interface using the <Tabs> and <TabItem> components. Each <TabItem> must have a label to display to users. Use the optional icon attribute to include one of <a herf="https://starlight.astro.build/guides/components/#all-icons"></a>Starlight’s built-in icons</p> next to the label.

    /* src/content/docs/example.mdx */
    ---
    title: "Using Tabs in Astro Starlight"
    description: "Example of using Tabs component from Astro Starlight."
    setup: |
    import { Tabs, TabItem } from '@astrojs/starlight/components';
    ---

    # Using Tabs in Astro Starlight

    <Tabs>
    <TabItem label="Stars" icon="star">
        Sirius, Vega, Betelgeuse
    </TabItem>
    <TabItem label="Moons" icon="moon">
        Io, Europa, Ganymede
    </TabItem>
    </Tabs>

## Cards

You can display content in a box matching Starlight’s styles using the <Card> component. Wrap multiple cards in the <CardGrid> component to display cards side-by-side when there’s enough space.

       /* src/content/docs/example.mdx */
       import { Card, CardGrid } from '@astrojs/starlight/components';

        <Card title="Check this out">Interesting content you want to highlight.</Card>

        <CardGrid>
        <Card title="Stars" icon="star">
            Sirius, Vega, Betelgeuse
        </Card>
        <Card title="Moons" icon="moon">
            Io, Europa, Ganymede
        </Card>
        </CardGrid>


<p class="font-bold text-[18px] text-[#661AB5]">Tip</p>

Use a card grid on your home page to display your project’s key features. Add the stagger attribute to shift the second column of cards vertically and add visual interest:

        <CardGrid stagger>
        <!-- cards -->
        </CardGrid>