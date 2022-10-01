<script>
  export let categories;

  let checkedCategories = []

  // Store checked values into checkedCategories array.
  function handleCategories(event){
      let item = event.target.value
      let checked = event.target.checked // if checked is true
      let exist = checkedCategories.includes(item)

      //if item is checked and not in the list
      if (checked && !exist) {
          // add item
          checkedCategories.push(item)
          //otherwise, if unchecked and in the list then , remove
        }else if (!checked && exist){

            /* console.log("removing", item) */
            let index = checkedCategories.indexOf(item)
            checkedCategories.splice(index, 1)
          }
      console.log(checkedCategories)
    }

</script>

<nav class="panel">
  <p class="panel-heading">
    Browse By Category
  </p>
  {#each categories as {name, checked}}
    <label class="panel-block">
      <input type="checkbox" value="{name}" bind:checked on:change={handleCategories}>
      {name}
    </label>
  {/each}

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset Filters
    </button>
  </div>
</nav>
