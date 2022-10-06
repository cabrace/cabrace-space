<script>
 export let post;
import { fade } from 'svelte/transition';
</script>

<section class="box" transition:fade>
  <h1 class="title">{post.title}</h1>
  <h2 class="subtitle">
    <!-- {post.body} USED for data fetch onMount example -->
    {post.summary}
  </h2>
</section>
