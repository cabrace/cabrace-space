<script>
 export let post;
import { fade } from 'svelte/transition';
</script>

<div class="box posts" transition:fade>
  <a href="/blog/chris-likes-svelte">
    <h1 class="title is-size-4">{post.title}</h1>
  </a>
  <h2 class="subtitle is-size-5 mt-2 mb-6">
    <!-- {post.body} USED for data fetch onMount example -->
    {post.summary}
  </h2>
  <div class="post-tag columns mb-1">
    {#each post.tags as tag}
      <button class="button is-small">{tag}</button>
    {/each}
  </div>
</div>

<style lang="scss">
  .post-tag button {
    margin-left: 10px;
  }

  .posts{
    border: 3px solid white;
    &:hover{
      border: 3px solid #777;
    }
  }
</style>
