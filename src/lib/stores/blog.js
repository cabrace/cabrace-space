import { writable, derived } from 'svelte/store';


// Ideally we would load this data from some DB and call onMount()
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
    {name:"Ruby", checked: true},
    {name:"Python", checked: false},
    {name:"General", checked: false},
    {name:"Thoughts", checked: false},
    {name:"Javascript", checked: false}
  ]);

//On update through bind: set derived postsListings 
export const filteredText_store = writable("")

export const checkedCategories_store = writable([]);
// export const filteredCategories_store = writable([]);
export const filteredCategoryPosts_store = writable([]);

// export const combinedFilterList_store = derived(
  // [allPosts_store, filteredText_store, checkedCategories_store],([$allPosts_store, $filteredText_store, $checkedCategories_store]) => {
    // let filterList = $checkedCategories_store.concat($filteredText_store)
    // console.log("Hello")
  // }
// )

// Derived from allPosts, filteredText, checkedCategories
export const filteredPosts_store = derived(
            // All values passed in these arrays, trigget this function on update through assignment
  [allPosts_store, filteredText_store, checkedCategories_store],([$allPosts_store, $filteredText_store, $checkedCategories_store]) => {
    // let filterList = $checkedCategories_store.concat(`${$filteredText_store}`)
  console.log("fPosts")
    return $allPosts_store.filter((post) => post.title.toLowerCase().includes($filteredText_store.toLowerCase()));
  }
)

