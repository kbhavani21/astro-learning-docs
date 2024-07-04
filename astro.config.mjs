import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
// import { markdown } from '@astrojs/markdown-remark';

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Start Here',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Getting Started',
        link: '/start/started/'
      }, {
        label: 'Manual Setup',
        link: '/start/install/'
      }, {
        label: 'Deploy Your Site',
        link: '/start/deploy/'
      }]
    }, {
      label: 'Core Concept',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Why Astro',
        link: '/coreconcept/astro/'
      }]
    }, {
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Pages',
        link: '/guides/example/'
      }, {
        label: 'Authoring Content in Markdown',
        link: '/guides/markdown/'
      }, {
        label: 'Components',
        link: '/guides/component/'
      }, {
        label: 'CSS & Styling',
        link: '/guides/styling/'
      }, {
        label: 'Customizing Starlight',
        link: '/guides/customizing/'
      }, {
        label: 'Internationalization (i18n)',
        link: '/guides/internationalization/'
      }, {
        label: 'Overriding Components',
        link: '/guides/overridingcomponents/'
      }, {
        label: 'Project Structure',
        link: '/guides/projectstructure/'
      }, {
        label: 'Sidebar Navigation',
        link: '/guides/sidebarnavigation/'
      }, {
        label: 'Site Search',
        link: '/guides/sitesearch/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind(), mdx(), sitemap(), react()],
  output: "server"
  //   adapter: vercel()
  ,
  adapter: vercel()
});