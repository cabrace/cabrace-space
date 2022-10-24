export const siteName = 'CaBrace'
export const siteUrl = 'http://localhost:5137/'
export const siteTitle = 'CaBrace'
export const siteDescription =
	'Digital garden growing curious minds with articles about HTML, CSS, JavaScript and things related to web development and design.'
export const siteImage = `${siteUrl}social.png`
export const postImage = 'https://social-share-images.vercel.app/'

export const twitterHandle = '@joyofcodedev'
export const twitter = 'https://twitter.com/joyofcodedev'
export const youtube = 'https://www.youtube.com/c/joyofcodedev'
export const github = 'https://github.com/mattcroat'

export const api = 'https://api.github.com'
export const owner = 'cabrace'
export const repo = 'cabrace-space'
export const path = 'posts'
export const branch = 'integrate-gh-posts'

export const categories = {
	javascript: 'JavaScript',
	react: 'React',
	css: 'CSS',
	general: 'General',
	design: 'Design',
	git: 'Git & GitHub',
	next: 'Next.js',
	typescript: 'TypeScript',
	svelte: 'Svelte',
	sveltekit: 'SvelteKit',
  branch:'integrate-gh-posts'
}

// https://api.github.com/repos/user/repo/contents/data/posts.json
// https://api.github.com/repos/cabrace/cabrace-space/contents/posts?ref=integrate-gh-posts
export const postsDataUrl = `${api}/repos/${owner}/${repo}/contents/data/posts.json?ref=${branch}`
console.log("postsDataUrl :", postsDataUrl)
// export const postsDataUrl = `${api}/repos/${owner}/${repo}/contents/data/posts.json`

// https://api.github.com/repos/user/repo/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`
console.log("postsUrl :", postsUrl)

// https://github.com/user/repo/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts?ref=${branch}`
console.log("fileUrl :", fileUrl)

// https://raw.githubusercontent.com/user/repo/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts?ref=${branch}`
