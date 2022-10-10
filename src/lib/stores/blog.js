import { writable, derived } from 'svelte/store';
import { fade } from 'svelte/transition';
import postData from '$lib/data/posts.json'
import categoryData from '$lib/data/categories.json'

// Ideally we would load this data from some DB and call onMount()
// https://www.eternaldev.com/blog/introduction-to-svelte-derived-store/

//moved posts hard-coded data to json file instead
export const allPosts_store = writable(postData)
export const allCategories_store = writable(categoryData);

//On update through bind: set derived filteredPosts, 
export const filteredText_store = writable("")

export const selectedCategories_store = writable([]);

export const filteredCategoryPosts_store = writable([]);

// const total = derived([counter1, counter2], ([c1,c2], set) => {
    // const timeoutId = setTimeout(() => {
        // console.log(c1, c2);
        // return set(c1+c2);
    // }, 1000);
//
    // return () => clearTimeout(timeoutId)
// }, 0);
export const filteredPosts_store = derived([allPosts_store, filteredText_store],([$allPosts_store, $filteredText_store], set) => {

    let speed = 350;
    const timeoutId = setTimeout(() => {
        console.log("delayed");
        // return $allPosts_store
     return set($allPosts_store.filter((post) => post.title.toLowerCase().includes($filteredText_store.toLowerCase())));
    }, speed);

    return () => clearTimeout(timeoutId)
}, [{title:"Loading...", summary:"Loading", tags:"none" }]);

// Derived from allPosts, filteredText, checkedCategories
// export const filteredPosts_store = derived(
  // All values passed in these arrays, trigger this function on update through assignment
  // [allPosts_store, filteredText_store],([$allPosts_store, $filteredText_store]) => {
    // let filterList = $checkedCategories_store.concat(`${$filteredText_store}`)
    // console.log('filteredPosts_store')
    // return $allPosts_store.filter((post) => post.title.toLowerCase().includes($filteredText_store.toLowerCase()));
  // }
// )

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
    return $filteredPosts_store
  }
)
