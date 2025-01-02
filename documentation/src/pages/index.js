import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


import React from 'react';
import { Redirect } from '@docusaurus/router';

function Home() {
  return (
    <Layout
      title={`Docs`}
      description="Docs for StackGuardian Platform">
      <main>
        <Redirect to="/tirith/docs/getting-started-with-tirith/" />
      </main>
    </Layout>
  );
}

export default Home;

