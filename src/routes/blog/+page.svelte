<script lang="ts"> 
  import Blog from "./ui/blog.svelte"
  import {allPosts_store, allCategories_store} from "$lib/stores/blog.js"

  //DATA 
  /* let posts = $allPosts_store */

  //Added sample
  import type { PostType } from '$lib/types'
  export let posts: PostType[]

  /* let categories = ["Svelte","Nginx","NextJS", "Ruby", "Python", "General", "Thoughts", "JavaScript", "Something else"].sort() */
  let categories = $allCategories_store;

</script>

<Blog {posts} {categories} />

