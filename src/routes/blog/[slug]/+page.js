import { error } from '@sveltejs/kit';

export async function load({ params }){
  console.log("blog post", params.slug)

  const post = await import(`../${params.slug}.md`)

  if (post) {
    console.log("metadata" post)
    const { title, date } = post.metadata
    const content = post.default

    return {
      content,
      title,
      date,
    }
  }
  throw error(404, 'Not found bastard')
}
