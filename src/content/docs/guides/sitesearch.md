---
title : Site Search
---
## Customizing Site Search

Starlight sites come with built-in full-text search powered by Pagefind, a lightweight and efficient search tool for static sites.

Enabling Search:

By default, Starlight includes full-text search without needing additional configuration. After building and deploying your site, users can utilize the search bar in the site header to locate content efficiently.

Excluding Content from Search Results:

To exclude specific pages from appearing in search results, you can add pagefind: false to the frontmatter of those pages. Here's an example:
 
    ---
    title: "Page Title"
    pagefind: false
    ---

    Content of the page goes here.

## Excluding Part of a Page 

You can exclude specific parts of a page from appearing in search results by using the <a herf="https://pagefind.app/docs/indexing/#removing-individual-elements-from-the-index" class="underline">data-pagefind-ignore</a> attribute on an HTML element.

Here’s how you can implement this:
     
    /* src/content/docs/partially-indexed.md */ 
    ---
    title: Partially indexed page
    ---

    This text will be discoverable via search.

    <div data-pagefind-ignore>

    This text will be hidden from search.

    </div>



## Alternative search providers

Algolia DocSearch

If you have access to <a class="underline" herf="https://docsearch.algolia.com/" >Algolia’s DocSearch program</a> and want to use it instead of Pagefind, you can use the official Starlight DocSearch plugin.

<p class="font-bold">1. Install @astrojs/starlight-docsearch:</p>

        npm install @astrojs/starlight-docsearch


2. Add DocSearch to your Starlight <a herf="https://starlight.astro.build/reference/configuration/#plugins" class="underline">plugins</a> config in astro.config.mjs and pass it your Algolia appId, apiKey, and indexName:

       /* astro.config.mjs */

        import { defineConfig } from 'astro/config';
        import starlight from '@astrojs/starlight';
        import starlightDocSearch from '@astrojs/starlight-docsearch';

        export default defineConfig({
        integrations: [
            starlight({
            title: 'Site with DocSearch',
            plugins: [
                starlightDocSearch({
                appId: 'YOUR_APP_ID',
                apiKey: 'YOUR_SEARCH_API_KEY',
                indexName: 'YOUR_INDEX_NAME',
                }),
            ],
            }),
        ],
        });

        
 ## Translating the DocSearch UI

To translate the DocSearch UI into your language using Starlight's internationalization system, follow these steps:

<p class="font-bold">1. Extend Content Collection Definition:</p>

Extend the i18n content collection definition in your src/content/config.ts file with the DocSearch schema.

Here’s an example of how to add translations for different languages:

    /* src/content/config.ts */
    import { defineCollection } from 'astro:content';
    import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
    import { docSearchI18nSchema } from '@astrojs/starlight-docsearch/schema';

    export const collections = {
    docs: defineCollection({ schema: docsSchema() }),
    i18n: defineCollection({
        type: 'data',
        schema: i18nSchema({ extend: docSearchI18nSchema() }),
    }),
    };

 <p class="font-bold">2. Add translations to your JSON files in src/content/i18n/.</p>

These are the English defaults used by DocSearch:   

    /* src/content/i18n/en.json */
    {
    "docsearch.searchBox.resetButtonTitle": "Clear the query",
    "docsearch.searchBox.resetButtonAriaLabel": "Clear the query",
    "docsearch.searchBox.cancelButtonText": "Cancel",
    "docsearch.searchBox.cancelButtonAriaLabel": "Cancel",
    "docsearch.searchBox.searchInputLabel": "Search",

    "docsearch.startScreen.recentSearchesTitle": "Recent",
    "docsearch.startScreen.noRecentSearchesText": "No recent searches",
    "docsearch.startScreen.saveRecentSearchButtonTitle": "Save this search",
    "docsearch.startScreen.removeRecentSearchButtonTitle": "Remove this search from history",
    "docsearch.startScreen.favoriteSearchesTitle": "Favorite",
    "docsearch.startScreen.removeFavoriteSearchButtonTitle": "Remove this search from favorites",

    "docsearch.errorScreen.titleText": "Unable to fetch results",
    "docsearch.errorScreen.helpText": "You might want to check your network connection.",

    "docsearch.footer.selectText": "to select",
    "docsearch.footer.selectKeyAriaLabel": "Enter key",
    "docsearch.footer.navigateText": "to navigate",
    "docsearch.footer.navigateUpKeyAriaLabel": "Arrow up",
    "docsearch.footer.navigateDownKeyAriaLabel": "Arrow down",
    "docsearch.footer.closeText": "to close",
    "docsearch.footer.closeKeyAriaLabel": "Escape key",
    "docsearch.footer.searchByText": "Search by",

    "docsearch.noResultsScreen.noResultsText": "No results for",
    "docsearch.noResultsScreen.suggestedQueryText": "Try searching for",
    "docsearch.noResultsScreen.reportMissingResultsText": "Believe this query should return results?",
    "docsearch.noResultsScreen.reportMissingResultsLinkText": "Let us know."
    }