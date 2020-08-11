/* eslint-disable */

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';
import '../styles/global.css';
import React from 'react';
import Layout from '../components/layout';

const App = ({ Component, pageProps, router }) => (
  <Layout url={router.route}>
    <Component {...pageProps} />
  </Layout>
);

export default App;