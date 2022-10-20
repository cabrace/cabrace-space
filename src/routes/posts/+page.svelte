<script lang="ts">
	import { ArrowNarrowRightIcon } from '@rgossiaux/svelte-heroicons/outline'
	import type { PageServerData } from './$types'

	import Newsletter from '$lib/shared/ui/newsletter.svelte'
	import Posts from '$lib/shared/ui/posts.svelte'

	// import {
		// siteDescription,
    // siteImage,
		// siteName,
		// siteTitle,
		// siteUrl,
    // twitter,
    // twitterHandle,
	// } from '$lib/api/config'
//
	// export let data: PageServerData
// </script>
//
// <svelte:head>
	// <title>{siteTitle}</title>
//
	// <meta content={siteDescription} name="description" />
//
	// <meta content={siteTitle} property="og:title" />
	// <meta content={siteImage} property="og:image" />
	// <meta content={siteUrl} property="og:url" />
	// <meta content={siteDescription} property="og:description" />
	// <meta content={siteName} property="og:site_name" />
//
	// <meta content={twitterHandle} name="twitter:creator" />
	// <meta content="summary_large_image" name="twitter:card" />
	// <meta content={siteTitle} name="twitter:title" />
	// <meta content={siteDescription} name="twitter:description" />
	// <meta content={siteImage} name="twitter:image" />
// </svelte:head>

<main>
	<section class="hero">
		<div class="latest-post">
			<span class="kicker">Latest post</span>
			<h1 class="title">{data.posts.latestPost.title}</h1>
			<p class="description">
				{data.posts.latestPost.description}
			</p>
			<a
				data-sveltekit-prefetch
				class="continue-reading"
				href={data.posts.latestPost.slug}
			>
				<span>Continue reading</span>
				<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
			</a>
		</div>

		<div class="divider" />

		<div class="newsletter">
			<h2>Subscribe for updates</h2>
			<Newsletter />
			<p>
				Subscribe to the <a href="/rss.xml" target="_blank">RSS feed</a>
				or
				<a href={twitter} target="_blank">Twitter</a> instead.
			</p>
		</div>
	</section>

	<Posts posts={data.posts.popular}>
		<h3 class="popular" slot="title">Popular</h3>
	</Posts>

	<Posts posts={data.posts.latest}>
		<h3 class="latest" slot="title">Latest</h3>
		<a slot="see-more" href="/articles">
			<span>See more articles</span>
			<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
		</a>
	</Posts>

	<Posts posts={data.posts.series}>
		<h3 class="series" slot="title">Series</h3>
		<a slot="see-more" href="/series">
			<span>See more series</span>
			<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
		</a>
	</Posts>

	<Posts posts={data.posts.picks}>
		<h3 class="picks" slot="title">Picks</h3>
	</Posts>
</main>
