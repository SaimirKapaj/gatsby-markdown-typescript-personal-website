import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-5">Welcome to Contact Page.</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
