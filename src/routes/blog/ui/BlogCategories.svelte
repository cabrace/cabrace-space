<script>
  import { allCategories_store, allPosts_store, checkedCategories_store} from '$lib/stores/blog.js'

  export let categories;

  //working array
  let checkedCategories = []

  // Store checked values into checkedCategories array.
  function setCategory(event){
      let item = event.target.value
      let checked = event.target.checked // if checked is true
      let exist = checkedCategories.includes(item)

        // Determine which state category is in
        //if item is checked and not in the list
        if (checked && !exist) {
            // add item
            checkedCategories.push(item)
            //otherwise, if unchecked and in the list then , remove

            //Apply Posts Filter
            /* filterCategoryPosts(item) */
          }
        else if (!checked && exist){
              /* console.log("removing", item) */
              let index = checkedCategories.indexOf(item)
              checkedCategories.splice(index, 1)
        }

      //This store updates filteredPosts_store because its derived from its value
      checkedCategories_store.set(checkedCategories)

      console.log("$", $checkedCategories_store)
      /* filterCategoryPosts(); */
      getCheckedCategories()
    }

  // Get a difinitive list of checked values by name on every update
  function getCheckedCategories(){
      /* console.log("checked categories") */
      let filterList = []
      $allCategories_store.filter((category) => {
          if (category.checked == true) {
              filterList = [...filterList, category.name]
          }
          // One Liner?
          /* category.checked ? (filterList = [...filterList, category.name]) : (filterList = [...filterList]) */
        })
      /* console.log(filterList) */
      checkedCategories_store.set(filterList)
      return filterList;
    }

  /* getCheckedCategories() */

</script>

<nav class="panel">
  <p class="panel-heading">
    Browse By Category
  </p>
  {#each $allCategories_store as {name, checked}}
    <label class="panel-block">
      <input type="checkbox" bind:checked bind:value="{name}" on:change={getCheckedCategories}>
      {name}
    </label>
  {/each}

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset Filters
    </button>
  </div>
</nav>
