
## Intro
I'm reading `Joy Of Code`'s blog and GH pages: @[https://github.com/mattcroat/joy-of-code/](https://github.com/mattcroat/joy-of-code/) taking notes on the organizational structure of things to learn from this project how to better organize and structure my own SvelteKit projects. In this case specifically a We(B)log.


## Commit comments

Also picked up on Matts Blog is some GH comment structure:

- `feat: [meaningful comment]`
- `fix: [comment]`
- `docs: [comment]`
- `style: [comment]`
- `refactor: [comment]`
- `perf: [comment]`
- `test: [comment]`
- `build: [comment]`
- `ci: [comment]`
- `chore: [comment]`
- `revert: [comment]`

**NOTES**

These are some notes on the structure of the project.

_Overview_

Both `data` and `posts` directories exist in the `project root` folder outside of the `/src` directory.

- The `posts` directory is managed directly on GH pages as GH is used  directly as a CMS, while the actual *App* is deployed On Vercel

- The `data` directory has a single `posts.json` file which stores all of the *metdata* related to all of the posts.

```
 Sample of posts.json
 [
  {
    "views": 730,
    "title": "How Code Sandboxes Update Content",
    "description": "How do code sandboxes update the iframe without causing flashing?",
    "slug": "avoid-flashing-iframe",
    "published": "2021-9-29",
    "category": "javascript"
   },
   {
    ...
   }
  ]
  ```

The only other *special* folder outside of those would be the 
`/src/lib/*` folder where namely an `api` folders exists along wither other folders that handle different parts of the app. Here we will
mainly focus on these folders for deeper investigation, whilst others may be briefly mentioned as the core of the logic revolving around most of the Blog pages revolves around this `/src/lib` or `$lib` folder (in Svelte terms) 

_**$lib/api folder**_

`[config,markdown,plugins,posts].ts` -- These are the files that makeup the api folder.

- `config.ts` : contains all the metadata relating to the entire site stored as variables. This data is imported and referenced from many other files throughout. Storing stuff such as:
[siteName,siteUrl,siteTitle..Twitter,Youtube,Facebook handles...category listings, Github postData url references] basically whatever useful top-level info that may need to be referenced can be stored here.

- `markdown.ts`: deals with all of the remark / rehype plugin ecosphere, all of its associated imports and configuration.
- `plugins.js` : continues more plugin implementation of helper functions.
- `posts.ts` : this is another _core-file_ to the app as this one handles helper functionality as it relates to getting, updating, sorting of posts data and more. Also noted here is a reference to:
`'$lib/types'`. More on this one later 

---------------

*My Notes*

_dynamic pages_
- these work by adding a folder with braces around it like `/routes/blog/[slug]`, or [anyNameYouLikeHere]
- define +page.svelte and +page.js files in the [slug] folder.
- within the `/routes/blog/` folder add any sibling folders along with a corresponding +page.svelte file within
  to create a dynamic path with that new folders name