<script> 
  import Blog from "./ui/blog.svelte"
  import {allPosts_store, allCategories_store} from "$lib/stores/blog.js"

  //DATA 
  let posts = $allPosts_store
  /* let categories = ["Svelte","Nginx","NextJS", "Ruby", "Python", "General", "Thoughts", "JavaScript", "Something else"].sort() */
  let categories = $allCategories_store;

</script>

<Blog {posts} {categories} />

