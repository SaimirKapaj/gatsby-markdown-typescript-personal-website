import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">About Me</h1>
        <p className="mt-5">Welcome to Home Page.</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
