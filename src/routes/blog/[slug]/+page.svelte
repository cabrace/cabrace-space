
<script>
  export let data;
</script>

<article class="content">
  sample
  /[slug]/+page.svelte
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
