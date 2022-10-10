<script>
  /* import Panel from '$lib/components/Panel.svelte' */
  import BlogPosts from './blog_posts.svelte'
  import { onMount } from 'svelte';
  import BlogCategories from './blog_categories.svelte'

  import {filterCombinedPosts_store, allPosts_store, filteredText_store, filteredPosts_store} from '$lib/stores/blog.js'

  export let categories;
  export let post;


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
    <div class="field">
      <div class="control is-medium">
        <input  class="input is-medium" bind:value={$filteredText_store} type="text" placeholder="Search posts ....">
         <!-- {#each $filteredPosts_store as post}
            {post.title}
         {/each}
         -->
      </div>
    </div>
  <h1 class="is-size-1">Posts</h1>
    {#each $filterCombinedPosts_store as post}
      <BlogPosts {post} />
    {/each}
  </div>
  <div class="column is-one-third">
    <BlogCategories {categories} />
  <!-- { $checkedCategories_store } -->
  </div>
</div>
<!-- {/await} -->
