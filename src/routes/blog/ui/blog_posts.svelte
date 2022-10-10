<script>
 export let post;
import { fade } from 'svelte/transition';
</script>

<div class="box" transition:fade>
  <a href="/blog/chris-likes-svelte">
    <h1 class="title">{post.title}</h1>
  </a>
  <h2 class="subtitle">
    <!-- {post.body} USED for data fetch onMount example -->
    {post.summary}
  </h2>
</div>
