import React from 'react';

import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

import usePosts from '../hooks/usePosts';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
