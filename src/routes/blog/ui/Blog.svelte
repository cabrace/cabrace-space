<script>
  /* import Panel from '$lib/components/Panel.svelte' */
  import BlogPosts from './BlogPosts.svelte'
  import BlogCategories from './BlogCategories.svelte'
  import { checkedCategories } from '$lib/stores/blog.js'
  import { posts_store } from '$lib/stores/blog.js'

  export let posts;
  export let categories;

   // Example importing, and setting store value
  //  checkedCategories.set(["fgwqfwqfe"])
  //  console.log("$", $checkedCategories)

  // Debounce functionality
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
      checkedCategories.set(filteredPosts)
    }
    else {
        filteredPosts = [...posts];
    }

    // SAVE resulting filteredPosts
    posts_store.set(filteredPosts)
      // console.log("$", $checkedCategories)
      // console.log($posts_store)
  }
</script>

<div class="columns">
  <div class="column">
    <div class="field">
      <div class="control is-medium">
        <input  class="input is-medium" bind:value={searchTerm} type="text" placeholder="Search posts ....">
      </div>
    </div>
    {#each $posts_store as post}
      <BlogPosts {post} />
    {/each}
  </div>
  <div class="column is-one-third">
    <BlogCategories {categories} />
  { $checkedCategories }
  </div>
</div>

