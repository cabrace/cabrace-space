<script>
 export let post;
  
import { fade } from 'svelte/transition';
</script>

<div class="box posts" transition:fade>
  <a href="/posts/{post.slug}">
    <h1 class="title is-size-3">{post.title}</h1>
  </a>
  <h2 class="subtitle summary is-size-6 mt-2 mb-5">
    <!-- {post.body} USED for data fetch onMount example -->
    {post.description}
  </h2>
  <div class="post-tag columns mb-1">
    <!-- {#each post.tags as tag} -->
      <!-- <button class="button border-dashed">{tag}</button> -->
    <!-- {/each} -->
  </div>
</div>

<style lang="scss">
  .post-tag button {
    margin-left: 10px;
    font-family: "FuzzyBubbles"
  }

  .border-dashed{
    border-style:dashed;
    &:hover{
      border: 2px;
      border-style:solid;
      color:#777;
    }
  }

  .summary {
    font-family: "UbuntuMono"
  }

  .title {
    font-family: "FuzzyBubbles"
  }

  .posts{
    transition: 0.3s;
    border: 1px solid white;
    &:hover{
      border: 1px solid #777;
    }
  }
</style>


