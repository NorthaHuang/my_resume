import Grid from '@components/layout/Grid';

import { S } from './styled';

const startYear = 2021;
const thisYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <S.Wrapper>
    <Grid>
      <S.Text>
        Created by Northa. ©{startYear}
        {thisYear > startYear && `~${thisYear}`}
      </S.Text>
      <S.Text>
        Powered by <strong>Next.js</strong>
      </S.Text>
    </Grid>
  </S.Wrapper>
);

export default Footer;
