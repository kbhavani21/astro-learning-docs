---
title : Authoring Content in Markdown
---

Markdown is a lightweight markup language that allows for easy formatting of plain text. In Astro Starlight, markdown files are used extensively for authoring content, making it straightforward to create and manage textual content for your website. Here’s a detailed explanation of our experience with authoring content in markdown within the Astro Starlight framework:

<p class ="font-bold">Why Markdown?</p>

Markdown offers several advantages for authoring content in Astro Starlight:

<p class ="font-bold">1 .Simplicity:</p> Markdown syntax is simple and intuitive, using symbols like # for headers, * or - for lists, and > for blockquotes. This simplicity allows content creators to focus on writing without being distracted by complex formatting.

<p class ="font-bold">2. Readability:</p> Markdown files are human-readable even in their raw form, which makes collaboration and version control easier. Each markdown file can be edited directly in a text editor without needing specialized software.

<p class ="font-bold">3. Versatility:</p> Markdown supports a wide range of formatting options, including headers, lists, links, images, code blocks, and tables. This versatility allows for rich and expressive content creation.

## Example of Markdown Content

Here’s an example of how markdown is used to create content in Astro Starlight:
         
            ---
            title: "Getting Started"
            description: "A guide to get started with Astro Starlight."
            ---

            # Getting Started with Astro Starlight

            Welcome to our guide on getting started with Astro Starlight. In this guide, we'll cover the basics to help you set up your environment and start authoring content.

            ## Prerequisites

            Before you begin, make sure you have the following installed:

            - Node.js
            - npm (Node Package Manager)

            ## Installation

            To install Astro Starlight, run the following command:

        
## Creating Your First Markdown File
 
To create a new markdown file, navigate to your project directory and run:

           touch src/content/new-page.md

## Writing Content
Now, open new-page.md in your favorite text editor and start writing your content using markdown syntax.

<p class ="font-bold">Example Markdown:</p>
           
            ---
            title: "New Page"
            description: "This is a new markdown page."
            ---

            # New Page

            Here is some **bold text** and a [link](https://example.com).

            - List item 1
            - List item 2

            > Blockquote: Markdown is awesome!

Markdown provides a simple and effective way to author content in Astro Starlight. It allows you to focus on the content itself while maintaining readability and structure. Whether you're writing documentation, blog posts, or general web content, markdown in Astro Starlight makes the process efficient and enjoyable.

## Inline styles

Astro Starlight allows for the use of inline styles within markdown files to customize the appearance of specific elements directly within the content.

<p class="font-bold">Why Use Inline Styles?</p>

Inline styles provide a quick and easy way to apply CSS rules directly to HTML elements within markdown content. This approach is useful when you need specific styling for individual elements that might not be repeated elsewhere in your content.

<p class="font-bold">1. Basic Inline Styling:</p>

You can add HTML tags with style attributes directly within your markdown content to apply inline styles.

        ---
        title: "Custom Styled Elements"
        description: "Using inline styles in markdown with Astro Starlight."
        ---

        # Custom Styled Elements

        Here is a paragraph with **default styling**.

        <p style="color: red; font-weight: bold;">This paragraph is styled with inline CSS.</p>

        <div style="background-color: lightblue; padding: 10px;">
        This is a div with a light blue background and padding.
        </div>

 <p class="font-bold">2. Using Inline Styles for Components:</p>

If you have custom components in Astro, you can also apply inline styles within these components and include them in your markdown.   

 - <p class="font-bold">Component Example (Button.astro):</p>    
           
            --- 
            const { text, color } = Astro.props;
            ---

            <button style={`background-color: ${color}; padding: 10px; border: none; color: white;`}>
            {text}
            </button>

## Images

Images in Starlight use <a class="underline" href="https://docs.astro.build/en/guides/images/">Astro’s built-in optimized asset support.</a>

 <p class="font-bold">1. Adding Images to Your Project</p>

First, ensure your images are stored within a directory that's accessible from your project's source directory (src/). For example, if you have images in a folder named images/, place it within src/.

<p class="font-bold">2. Referencing Images in Markdown</p>

In your Markdown files (*.md), you can reference images using relative paths. Assume your image example.jpg is located in src/images/, you can include it in your Markdown like this:
  
             ![Alt Text](/images/example.jpg)

Here's a breakdown of the Markdown syntax:

- ![Alt Text]: This is the alternative text for accessibility purposes. Replace Alt Text with a concise description of the image.

- (/images/example.jpg): This is the relative path to your image file from the root of your project.

<p class="font-bold">3. Using Astro Components for Images</p>
              
                ---
                title: "Using Astro Component for Images"
                description: "Example of using Astro component for images in Astro Starlight."
                ---

                # Using Astro Component for Images

                <ImageComponent src="/images/example.jpg" alt="Example Image Alt Text" />


#### Benefits of Using Markdown in Astro Starlight

- **SEO Optimization**: Markdown files in Astro Starlight can include metadata such as titles and descriptions, which are crucial for SEO (Search Engine Optimization).

- **Integration with Astro Components**: Markdown files can embed Astro components, enhancing interactivity and functionality within static content.

- **Version Control**: Markdown files are plain text, making them ideal for version control systems like Git. Changes are easily tracked, reviewed, and reverted when necessary.

- **Ease of Deployment**: Markdown content in Astro Starlight is compiled into static HTML during the build process, resulting in fast-loading, SEO-friendly web pages.



Our experience with authoring content in markdown within Astro Starlight has been positive and efficient. Markdown's simplicity, combined with Astro Starlight's capabilities, provides a powerful toolset for creating and managing textual content on websites. Whether you're a developer, content creator, or both, markdown in Astro Starlight facilitates the creation of clear, structured, and visually appealing content.
