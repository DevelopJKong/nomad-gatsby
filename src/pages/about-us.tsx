import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const AboutUs = () => {
   return (
      <Layout title='About us'>
         <div>About us</div>
      </Layout>
   );
};

export const Head = () => <Seo title='About us' />;

export default AboutUs;
