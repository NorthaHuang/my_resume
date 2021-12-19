import { NextPage } from 'next';

import PageLayout from '@components/layout/PageLayout';

import Portfolio from '@views/Portfolio';

const pageMetadata = {
  title: '作品集',
  description: 'Northa 的前端作品集',
};

const PortfolioPage: NextPage = () => (
  <PageLayout {...pageMetadata}>
    <Portfolio />
  </PageLayout>
);

export default PortfolioPage;
