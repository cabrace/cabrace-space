import {writable} from "svelte/store";

//Start out as empty array in the store 
export const posts = writable([])

const fetchPosts = async (num) => {
  
  // Locally set Data 
    let data =[ 
      {title:"Sample Title 1", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"linux svelte"},
      {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
      {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
      {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"},
      {title:"Sample Title something", summary:"A simple container to divide your page into sections, like the one you're currently reading.", tags:"Windows VSCode"}
    ]

    // const loadedPosts = data.results.map( (data, index) => {
    const loadedPosts = data.map( (data, index) => {
        return {
            id: index + 1,
            title: data.title,
            summary: data.summary,
            tags: data.tags,
            // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    });
    posts.set(loadedPosts);
};

fetchPosts(5);
