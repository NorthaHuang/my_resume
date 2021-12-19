import { NextPage } from 'next';
import Link from 'next/link';

import PageLayout from '@components/layout/PageLayout';
import Grid from '@components/layout/Grid';

const pageMetadata = {
  title: 'Page Not Found',
  description: 'Something went wrong',
};

const Custom404: NextPage = () => (
  <PageLayout {...pageMetadata}>
    <Grid>
      <h1>404</h1>
      <h2>Oops... Page not found!</h2>

      <Link href="/">
        <a>Take me back home</a>
      </Link>
    </Grid>
  </PageLayout>
);

export default Custom404;
