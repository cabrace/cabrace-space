<script>
  /* import Panel from '$lib/components/Panel.svelte' */
  import BlogPosts from './BlogPosts.svelte'
  import BlogCategories from './BlogCategories.svelte'

  export let posts;
  export let categories;

  //Debounce functionality
  let val='';
  let timer;

  const debounce = v => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          val = v;
        }, 2000);
    }


  let searchTerm = "";
  let filteredPosts = []

  $: {
    if (searchTerm){
      filteredPosts = posts.filter(
          post => (  
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          post.tags.toString().includes(searchTerm)
          )
        );
    }
    else {
        filteredPosts = [...posts];
    }

  }
</script>

<div class="columns">
  <div class="column">
    <div class="field">
      <div class="control is-medium">
        <input  class="input is-medium" bind:value={searchTerm} type="text" placeholder="Search posts ....">
      </div>
    </div>
    {#each filteredPosts as post}
      <BlogPosts {post} />
    {/each}
  </div>
  <div class="column is-one-third">
    <BlogCategories {categories} />
  </div>
</div>

