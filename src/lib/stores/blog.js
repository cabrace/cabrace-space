import { writable, derived } from 'svelte/store';


export const checkedCategories = writable([]);
export const posts_store = writable([]);

export const categoryList = writable([
    {name:"Svelte", checked: false},
    {name:"Nginx", checked: false},
    {name:"NextJS", checked: false},
    {name:"Ruby", checked: false},
    {name:"Python", checked: false},
    {name:"General", checked: false},
    {name:"Thoughts", checked: false},
    {name:"Javascript", checked: false}
  ]);
