import { writable, derived } from 'svelte/store';


// Ideally we would load this data from some DB and call onMount()
// https://www.eternaldev.com/blog/introduction-to-svelte-derived-store/
export const allPosts_store = writable([
    {title:"Nginx Config", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"linux nginx server"},
    {title:"Svelte Blog Post", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Svelte Data Bindings", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Ruby Code", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
    {title:"General Thoughts", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"}
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

//On update through bind: set derived filteredPosts, 
export const filteredText_store = writable("")

export const selectedCategories_store = writable([]);

export const filteredCategoryPosts_store = writable([]);


// Derived from allPosts, filteredText, checkedCategories
export const filteredPosts_store = derived(
  // All values passed in these arrays, trigger this function on update through assignment
  [allPosts_store, filteredText_store],([$allPosts_store, $filteredText_store]) => {
    // let filterList = $checkedCategories_store.concat(`${$filteredText_store}`)
    console.log('filteredPosts_store')
    return $allPosts_store.filter((post) => post.title.toLowerCase().includes($filteredText_store.toLowerCase()));
  }
)

export const filteredCategories_store = derived(
  // All values passed in these arrays, trigget this function on update through assignment
  [filteredPosts_store, selectedCategories_store],([$filteredPosts_store, $selectedCategories_store]) => {
    // let filterList = $checkedCategories_store.concat(`${$filteredText_store}`)
    console.log('filteredCat_storesss')
    return $filteredPosts_store = $selectedCategories_store
    // return $allPosts_store.filter((post) => post.title.toLowerCase().includes("Svelte".toLowerCase()));
  }
)

// Depends on above
export const filterCombinedPosts_store = derived(
  [filteredPosts_store,filteredCategories_store],([$filteredPosts_store,$filteredCategories_store]) => {
    console.log("combined triggered")
    return $filteredCategories_store
  }
)
