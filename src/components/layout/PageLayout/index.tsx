import Head from 'next/head';

import Footer from '@components/Footer';
import Header from '@components/Header';

import S from './styled';
import type { PageLayoutProps } from './type';

// Static Variables
const DEFAULT_DESCRIPTION = 'Northa 的履歷和作品集';

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, description }) => (
  <>
    {/* Page Metadata */}
    <Head>
      <title>
        {title && `${title} | `}
        {process.env.SITE_NAME}
      </title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
    </Head>

    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  </>
);

export default PageLayout;
