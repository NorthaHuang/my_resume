import { NextPage } from 'next';

import PageLayout from '@components/layout/PageLayout';

const pageMetadata = {
  title: '作品集',
  description: 'Northa 的前端作品集',
};

const PortfolioPage: NextPage = () => (
  <PageLayout {...pageMetadata}>
    <h1>Portfolio</h1>
  </PageLayout>
);

export default PortfolioPage;
