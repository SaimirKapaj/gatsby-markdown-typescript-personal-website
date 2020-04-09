import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const ResumePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <p className="mt-5">Welcome to Resume Page.</p>
      </div>
    </Layout>
  );
};

export default ResumePage;
