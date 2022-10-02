<script>
  import { checkedCategories_store } from '$lib/stores/blog.js'
  import { allCategories_store } from '$lib/stores/blog.js'

  export let categories;

  let filteredCategories = []

  // Store checked values into filteredCategories array.
  function storeCategories(event){
      let item = event.target.value
      let checked = event.target.checked // if checked is true
      let exist = filteredCategories.includes(item)

        //if item is checked and not in the list
        if (checked && !exist) {
            // add item
            filteredCategories.push(item)
            //otherwise, if unchecked and in the list then , remove

            //Apply Posts Filter
            filterPosts(item)
          }
        else if (!checked && exist){
              /* console.log("removing", item) */
              let index = filteredCategories.indexOf(item)
              filteredCategories.splice(index, 1)
              
              
        }
      console.log(filteredCategories)
      /* checkedCategories.set(filteredCategories) */
    }

  function filterPosts(item){
    
      filteredPosts = $posts_store.filter(
          post => (  
          post.title.toLowerCase().includes(item.toLowerCase()) || 
          post.tags.toString().includes(item)
          )
        );
      posts_store.set(filteredPosts)
  }

</script>

<nav class="panel">
  <p class="panel-heading">
    Browse By Category
  </p>
  {#each categories as {name, checked}}
    <label class="panel-block">
      <input type="checkbox" bind:value="{name}" bind:checked on:change={storeCategories}>
      {name}
    </label>
  {/each}

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset Filters
    </button>
  </div>
</nav>
