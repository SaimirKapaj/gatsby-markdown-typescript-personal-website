import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Gatsby Redux-Toolkit Starter</h1>
        <p className="mt-5">
          This is a starter for <span className="font-semibold">Gatsby</span> websites using{' '}
          <span className="font-semibold">Redux-Toolkit</span>, <span className="font-semibold">Typescript</span>,{' '}
          <span className="font-semibold">Styled Components</span>, <span className="font-semibold">Talwind CSS</span> &{' '}
          <span className="font-semibold">React Font Awesome</span>.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
