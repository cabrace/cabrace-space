<script>
  let categories = ["Svelte","Nginx","NextJS", "Ruby", "Python", "General", "Thoughts", "JavaScript"].sort()
</script>

<nav class="panel">
  <p class="panel-heading">
    Browse By Category
  </p>
  <!-- <div class="panel-block"> -->
    <!-- <p class="control has-icons-left"> -->
      <!-- <input class="input" type="text" placeholder="Search"> -->
      <!-- <span class="icon is-left"> -->
        <!-- <i class="fas fa-search" aria-hidden="true"></i> -->
      <!-- </span> -->
    <!-- </p> -->
  <!-- </div> -->

  <!-- <p class="panel-tabs"> -->
    <!-- <a class="is-active">All</a> -->
    <!-- <a>Public</a> -->
    <!-- <a>Private</a> -->
    <!-- <a>Sources</a> -->
    <!-- <a>Forks</a> -->
  <!-- </p> -->
  {#each categories as category}
    <label class="panel-block">
      <input type="checkbox" value="{category}" on:change={(item)=> console.log(item.target.value)}>
      {category}
    </label>
  {/each}

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset Filters
    </button>
  </div>
</nav>
