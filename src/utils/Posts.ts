import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  return posts
    .filter((value) => value.frontmatter.title.length > 3)
    .sort(
      (a, b) =>
        new Date(a.frontmatter.pubDate).valueOf() -
        new Date(b.frontmatter.pubDate).valueOf()
    );
};
