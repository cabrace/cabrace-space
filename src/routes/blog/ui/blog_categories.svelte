<script>
  import { allCategories_store, allPosts_store, filteredCategories_store, selectedCategories_store, filteredCategoryPosts_store} from '$lib/stores/blog.js'

  /* export let categories; */

  //Checked categories array
  let selectedCategories = []

  //Scope Post listings based on selected categories
  const filterCategoryPosts = () => {

      let filteredPosts = []
      //For all categories selected, return posts whose titles also match
      selectedCategories.forEach(category => {
          $allPosts_store.filter((post) =>{

              let lTitle = post.title.toLowerCase()
              let lCategory = category.toLowerCase()
              if (lTitle.includes(lCategory)){
                  filteredPosts.push(post)
                }else{ //if no match, return
                return 
             }
          })
      })

      /* console.log(new Set(filteredPosts)) */
      /* $selectedCategories_store = $selectedCategories_store.concat(filteredPosts) */
     $selectedCategories_store = Array.from(new Set(filteredPosts)) // set resulting array here
      console.log("selected Categories", $filteredCategories_store)
  }
    

  function updateCategories() {
     selectedCategories_store.set(selectedCategories)
  }


</script>

<nav class="panel">
  <p class="panel-heading is-size-6">
    Filter By Category

  </p>
  {#each $allCategories_store as {name, checked}}
    <label class="panel-block">
      <input type="checkbox" bind:group={selectedCategories} bind:checked={checked} value={name} on:change={filterCategoryPosts} />
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
