import Link from 'next/link';

import Grid from '@components/layout/Grid';

import type { ErrorProps } from './type';

const Error: React.FC<ErrorProps> = ({ statusCode }) => (
  <Grid>
    <h1>{statusCode}</h1>
    <h2>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </h2>

    <Link href="/">
      <a>Take me back home</a>
    </Link>
  </Grid>
);

export default Error;
