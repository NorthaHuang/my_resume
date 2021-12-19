import { NextPage } from 'next';

import PageLayout from '@components/layout/PageLayout';
import Resume from '@Src/views/Resume';

const pageMetadata = {
  title: '履歷',
  description: 'Northa 的履歷',
};

const IndexPage: NextPage = () => (
  <PageLayout {...pageMetadata}>
    <Resume />
  </PageLayout>
);

export default IndexPage;
