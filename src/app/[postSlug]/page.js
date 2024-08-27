import React from 'react';
import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/helpers/file-helpers';
import { BLOG_TITLE } from '@/constants';
import BlogHero from '@/components/BlogHero';
import styles from './postSlug.module.css';
import components from '@/helpers/mdx-components'

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);
  const metadata = (frontmatter) ? {
    title: `${frontmatter.title} - ${BLOG_TITLE}`,
    description: frontmatter.abstract
  } : { title: '404 - Not Found'};
  return metadata;
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote 
        source={content} 
        components={components}
        />
      </div>
    </article>
  );
}

export default BlogPost;
