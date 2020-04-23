import React from 'react';

import Layout from '../components/layout';

import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>This is my personal website</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
