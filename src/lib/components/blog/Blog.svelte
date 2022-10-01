<script>
  import Panel from '$lib/components/Panel.svelte'
  import BlogListItem from './ui/BlogListItem.svelte'
  import { filteredPosts } from '../stores/blog.js'

  //Debounce functionality
  let val='';
  let timer;

  const debounce = v => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          val = v;
        }, 2000);
    }

  let posts = [ 
    {title:"Nginx Config", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"linux nginx server"},
    {title:"Svelte Blog Post", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Svelte Data Bindings", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Ruby Code", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"}
  ]

  let searchTerm = "";
  // let filteredPosts = []

  $: {
    if (searchTerm){
      $filteredPosts.update(posts.filter(
          post => (  
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          post.tags.toString().includes(searchTerm)
          )
        )
      )
    }
    else {
        $filteredPosts.update([...posts]);
    }

  }

</script>

Blog
<div class="columns">
  <div class="column">
    <div class="field">
      <div class="control is-medium">
        <input  class="input is-medium" bind:value={searchTerm} type="text" placeholder="Search posts ....">
      </div>
    </div>
    {#each filteredPosts as post}
      <BlogListItem post={post} />
    {/each}
  </div>
  <div class="column is-one-third">
    <Panel />
  </div>
</div>
