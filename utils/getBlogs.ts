import fs from 'fs'
import path from 'path'

export const getPosts = async () => {
  // Read posts in the blog dir
  const root = path.join(process.cwd(), 'pages/blog')
  const listing = await fs.promises.readdir(root)

  // Retrieve the content and the meta const of the posts
  const items = listing.filter((item) => item.endsWith('.mdx'))

  const postsWithMeta = []

  for (const item of items) {
    const { meta } = await import(`pages/blog/${item}`)
    const title = item.replace('.mdx', '')

    postsWithMeta.push({ title, meta })
  }

  return postsWithMeta
}
