<script> 
  import Blog from "./ui/Blog.svelte"

  //DATA 
  let posts = [ 
    {title:"Nginx Config", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"linux nginx server"},
    {title:"Svelte Blog Post", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Svelte Data Bindings", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Ruby Code", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"}
  ]

  /* let categories = ["Svelte","Nginx","NextJS", "Ruby", "Python", "General", "Thoughts", "JavaScript", "Something else"].sort() */
  let categories = [
          {name:"Svelte", checked: false},
          {name:"Nginx", checked: false},
          {name:"NextJS", checked: false},
          {name:"Ruby", checked: false},
          {name:"Python", checked: false},
          {name:"General", checked: false},
          {name:"Thoughts", checked: false},
          {name:"Javascript", checked: false}
    ]

</script>

<Blog {posts} {categories} />

