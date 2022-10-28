<script lang="ts">
	import { ArrowNarrowRightIcon } from '@rgossiaux/svelte-heroicons/outline'
	import type { PageServerData } from './$types'
  import Blog from "$lib/ui/blog.svelte"

	// import Newsletter from '$lib/shared/ui/newsletter.svelte'
	import Posts from '$lib/shared/ui/posts.svelte'

  import {
    siteDescription,
    siteImage,
    siteName,
    siteTitle,
    siteUrl,
    twitter,
    twitterHandle,
  } from '$lib/api/config'

  export let data: PageServerData

  console.log(data)
</script>

<svelte:head>
  <title>{siteTitle}</title>

  <meta content={siteDescription} name="description" />

  <meta content={siteTitle} property="og:title" />
  <meta content={siteImage} property="og:image" />
  <meta content={siteUrl} property="og:url" />
  <meta content={siteDescription} property="og:description" />
  <meta content={siteName} property="og:site_name" />

  <meta content={twitterHandle} name="twitter:creator" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content={siteTitle} name="twitter:title" />
  <meta content={siteDescription} name="twitter:description" />
  <meta content={siteImage} name="twitter:image" />
</svelte:head>

<main>

	<Posts posts={data.posts.posts}>
		<h3 class="popular" slot="title">Popular</h3>
	</Posts>

  <Blog posts={data.posts.posts} categories={["None"]} />

</main>
