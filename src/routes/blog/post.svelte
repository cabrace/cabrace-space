<script>
  /* import Panel from '$lib/components/Panel.svelte' */
  import BlogPosts from './ui/blog_posts.svelte'
  import { onMount } from 'svelte';
  import BlogCategories from './ui/blog_categories.svelte'

  import {filterCombinedPosts_store, allPosts_store, filteredText_store, filteredPosts_store} from '$lib/stores/blog.js'

  export let categories;
  export let post;
export let title, date, updated, sample, form, data


  // Very cool way to load data check {await block also}
  /* let postPromise; */

  /* onMount(() => { */
      /* postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json()).then((post) => { */
          /* $allPosts_store = post; */
        /* }); */
    /* }) */
  

</script>


<!-- {#await postPromise} -->
    <!-- <h2>Loading....</h2> -->
<!-- {:then post} -->

<div class="columns">
  <div class="column">
  <!-- <h1 class="is-size-1">Posts</h1> -->
<section class="section content box">
  wrapper(post.svelte)
  <!-- <h1>{title}</h1> -->
  <!-- <p>Published: {date}</p> -->
  <slot />
  /wrapper
</section>
  </div>
  <div class="column is-one-fifth">
    <BlogCategories {categories} />
  <!-- { $checkedCategories_store } -->
  </div>
</div>
<!-- {/await} -->
