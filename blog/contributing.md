---
layout: doc
---

# Contribute to the Feathers Blog

## Writing Posts

Put posts in the `website/blog/posts` directory. Author bios are located in the `website/blog/authors` directory. The author's name must match the `author` field in their posts' frontmatter.

## Post Frontmatter

Blog posts use frontmatter to define metadata about the post. The frontmatter is written in YAML and is located at the top of the file. Here is an example of a post's frontmatter:

```yaml
---
title: Create a Feathers Service Generator with Pinion
tagline: Learn to escape rigid templates and write your own Feathers generator with Pinion.
date: 2024-01-16
author: Marshall Thompson
category: FeathersJS
imgSrc: https://images.unsplash.com/photo-1563788929376-dd67b6218eef?q=80&w=1000&auto=format&fit=crop
---
```

Here's an explanation of each field:

- `title` - The title of the blog post.
- `tagline` - A short description of the blog post. This will be visible in the Blog Post Listing page.
- `date` - The date the blog post was published. This is used to sort the blog posts in the Blog Post Listing page.
- `author` - The author's name. It must match the author's frontmatter name in the blog/authors directory.
- `category` - The category of the blog post. See the list in the [Adding Categories](#adding-categories) section.
- `imgSrc` - The URL of the image to use as the blog post's thumbnail.

## Categories

The Feathers blog uses categories to organize posts.

## Managing Categories

Categories are setup in two places:

- `website/.vitepress/blog-categories.ts` - Add the category to the `categories` array.
- `website/blog/<category>.md` - Create an `.md` file with the name of the category. The file must implement the `BlogListings` component and pass the category name as a prop. Here's an example:

```vue
---
layout: home
---

<BlogListings category="Pinion" />
```
