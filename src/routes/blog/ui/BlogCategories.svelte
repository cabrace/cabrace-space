<script>
  import { allCategories_store, allPosts_store, selectedCategories_store, filteredCategories_store} from '$lib/stores/blog.js'

  /* export let categories; */
  //Store selected categories here
  let selectedCategories = []

  //Update posts filtered by category
  function filterCategoryPosts() {
      let filteredCategoryPosts = []
      let categories = selectedCategories

      categories.forEach(category => {
          $allPosts_store.filter((post) =>{

              let lTitle = post.title.toLowerCase()
              let lCategory = category.toLowerCase()
              if (lTitle.includes(lCategory)){
                  filteredCategoryPosts.push(post)
                }else{
                return 
             }
          })
      })

      console.log(new Set(filteredCategoryPosts))
      /* console.log(filteredCategoryPosts) */
      selectedCategories_store.set(new Set(filteredCategoryPosts))
  }
    

  function updateCategories() {
     selectedCategories_store.set(selectedCategories)
  }


</script>

<nav class="panel">
  <p class="panel-heading">
    Browse By Category

  </p>
  {#each $allCategories_store as {name}}
    <label class="panel-block">
      <input type="checkbox" bind:group={selectedCategories} value={name} on:change={filterCategoryPosts} />
      {name}
    </label>
  {/each}

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset Filters
    </button>
  </div>
    { selectedCategories }
</nav>
