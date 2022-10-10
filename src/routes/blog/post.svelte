<script>
export let title, date, updated, sample, form, data
</script>

<section class="section content">
  wrapper(post.svelte)
  <!-- <h1>{title}</h1> -->
  <!-- <p>Published: {date}</p> -->
  <slot />
  /wrapper
</section>
