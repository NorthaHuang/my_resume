import { NextPage } from 'next';

import PageLayout from '@components/layout/PageLayout';
import Error from '@Src/views/Error';
import type { ErrorProps } from '@Src/views/Error/type';

const pageMetadata = {
  title: '',
  description: 'Something went wrong',
};

const ErrorPage: NextPage<ErrorProps> = (props) => (
  <PageLayout {...pageMetadata}>
    <Error {...props} />
  </PageLayout>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};

export default ErrorPage;
