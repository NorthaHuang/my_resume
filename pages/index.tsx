import { NextPage } from 'next';

import PageLayout from '@components/layout/PageLayout';
import Home from '@Src/views/Home';

const pageMetadata = {
  title: 'Home',
  description: 'My Portfolio',
};

const IndexPage: NextPage = () => (
  <PageLayout {...pageMetadata}>
    <Home />
  </PageLayout>
);

export default IndexPage;
