import { writable, derived } from 'svelte/store';


// Ideally we would load this data from some DB and call onMount()
//
// https://www.eternaldev.com/blog/introduction-to-svelte-derived-store/
export const allPosts_store = writable([
    {title:"Nginx Config", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"linux nginx server"},
    {title:"Svelte Blog Post", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Svelte Data Bindings", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Ruby Code", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"}
])
export const allCategories_store = writable([
    {name:"Svelte", checked: false},
    {name:"Nginx", checked: false},
    {name:"NextJS", checked: false},
    {name:"Ruby", checked: false},
    {name:"Python", checked: false},
    {name:"General", checked: false},
    {name:"Thoughts", checked: false},
    {name:"Javascript", checked: false}
  ]);

export const filteredText_store = writable("")
export const checkedCategories_store = writable([]);

export const filteredPosts_store = derived([allPosts_store, filteredText_store], ([$allPosts_store, $filteredText_store]) => {
    return $allPosts_store.filter((post) => post.title.toLowerCase().includes($filteredText_store.toLowerCase()));
})

      // filteredPosts = posts.filter(
          // post => (
          // post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          // post.tags.toString().includes(searchTerm)
          // )
        // );
