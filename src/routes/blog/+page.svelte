<script lang="ts"> 
  import Blog from "./ui/blog.svelte"
  import { onMount } from 'svelte';
  import {allPosts_store, allCategories_store} from "$lib/stores/blog.js"
  import { fade } from 'svelte/transition';
	// import Posts from '$lib/shared/ui/posts_restyle.svelte'

  //DATA 
  let posts = $allPosts_store

  //Added sample
  import type { PostType } from '$lib/types'
  // export let posts: PostType[] // for blog
  // export let data: PageServerData;

  /* let categories = ["Svelte","Nginx","NextJS", "Ruby", "Python", "General", "Thoughts", "JavaScript", "Something else"].sort() */
  let categories = $allCategories_store;

  onMount(() => {
      /* postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json()).then((post) => { */
          /* $allPosts_store = post; */
        /* }); */
        console.log(data)
    console.log("Mounted()")
    })

</script>

<Blog {posts} {categories} />

<!-- <Posts posts={data.posts.posts}> -->
  <!-- <h3 class="picks" slot="title">Picks</h3> -->
<!-- </Posts> -->

<style lang="scss">
  .post-tag button {
    margin-left: 10px;
    font-family: "FuzzyBubbles"
  }

  .border-dashed{
    border-style:dashed;
    &:hover{
      border: 2px;
      border-style:solid;
      color:#777;
    }
  }

  .summary {
    font-family: "UbuntuMono"
  }

  .title {
    font-family: "FuzzyBubbles"
  }

  .posts{
    transition: 0.3s;
    border: 1px solid white;
    &:hover{
      border: 1px solid #777;
    }
  }
</style>
