---
title: Deploy your Site 
---
## Deploy your Astro Site to Vercel

You can use Vercel to deploy an Astro site to their global edge network with zero configuration.

This guide includes instructions for deploying to Vercel through the website UI or Vercel’s CLI.


<p class="!font-bold ">Prerequisites</p>
Before starting, make sure you have:

-  An Astro project set up. (Refer to previous steps for setting up an Astro project   with the Starlight theme)
-  A GitHub account.
-  A Vercel account. Sign up at Vercel.

  ## Step 1: Initialize a Git Repository

  If your Astro project is not already a Git repository, initialize it.
    
 <p class="!font-bold ">1. Initialize Git:</p>

In your project directory, run the following commands:

    git init
    git add .
    git commit -m "Initial commit"
   
 ## Step 2: Push to GitHub

 Push your project to a new GitHub repository.

<p class="!font-bold ">1. Create a New Repository on GitHub:</p>

Go to GitHub and create a new repository.

<p class="!font-bold ">2. Add Remote and Push:</p>

Follow the instructions provided by GitHub to add the remote and push your local repository to GitHub. It will look something like this:

    git remote add origin https://github.com/your-username/your-repository.git
    git branch -M main
    git push -u origin main

 ## Step 3: Connect GitHub Repository to Vercel

<p class="!font-bold ">1. Login to Vercel:</p>

Go to Vercel and log in to your account.         

<p class="!font-bold ">2. Import Project:</p>

- Click on the “New Project” button from your Vercel dashboard.
- Select “Import Git Repository”.
- Choose your GitHub account and select the repository you just pushed.

<p class="!font-bold ">3. Configure Project:</p>

- Vercel will automatically detect that your project is using Astro and suggest the correct settings.       

- Ensure the following settings are correct: 

- Framework Preset: Astro
- Build Command: npm run build
- Output Directory: dist

<p class="!font-bold ">4. Deploy:</p>

- Click the “Deploy” button to start the initial deployment.
- Vercel will clone the repository, install dependencies, build the project, and deploy it.

 ## Step 4: Automatic Deployments

 With the GitHub repository connected, any push to the <span class="text-[13px] bg-[#EDEEF3] px-2 py-1">main</span> branch (or the default branch you configured) will automatically trigger a deployment.    

 <p class="!font-bold ">1. Make Changes and Push:</p>

- Make changes to your Astro project.

- Commit and push the changes to GitHub:

    git add .
    git commit -m "Update documentation"
    git push

<p class="!font-bold ">2. Automatic Deployment:</p>
   
- Vercel will detect the changes and start a new deployment automatically.
- You can monitor the deployment status in your Vercel dashboard.

## Optional: Configure Environment Variables

If your project requires environment variables, you can configure them in the Vercel dashboard.

<p class="!font-bold ">1. Go to Project Settings:</p>
 
- From your Vercel dashboard, navigate to your project.
- Go to the “Settings” tab and then “Environment Variables”.

<p class="!font-bold ">2. Add Environment Variables:</p>
    
- Add any required environment variables for your project.



 <style>

  h1:where(.astro-j6tvhyss)
   { 
    font-size:30px
    }
    .sl-markdown-content h2{
     font-size:20px   
    }
    
</style>