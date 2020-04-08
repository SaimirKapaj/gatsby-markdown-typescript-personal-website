import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <p className="mt-5">Welcome to Blog Page.</p>
      </div>
    </Layout>
  );
};

export default BlogPage;
