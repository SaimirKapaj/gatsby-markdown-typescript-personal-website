import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="mt-5">Welcome to About Page.</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
