<script>
  /* import Panel from '$lib/components/Panel.svelte' */
  import BlogPosts from './BlogPosts.svelte'
  // import BlogCategories from './BlogCategories.svelte'

  // import { checkedCategories_store } from '$lib/stores/blog.js'
  import { allPosts_store, filteredText_store, filteredPosts_store } from '$lib/stores/blog.js'

  export let categories;

  

</script>

<div class="columns">
  <div class="column">
    <div class="field">
      <div class="control is-medium">
        <input  class="input is-medium" bind:value={$filteredText_store} type="text" placeholder="Search posts ....">
  {#each $filteredPosts_store as post}
    {post.title}
 {/each}
      </div>
    </div>
    {#each $filteredPosts_store as post}
      <BlogPosts {post} />
    {/each}
  </div>
  <div class="column is-one-third">
    <!-- <BlogCategories {categories} /> -->
  <!-- { $checkedCategories_store } -->
  </div>
</div>

