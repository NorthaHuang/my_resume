import Grid from '@components/layout/Grid';

import { S } from './styled';

const startYear = 2021;
const thisYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <S.Wrapper>
    <Grid>
      <S.Copyright>
        Created by Northa. ©{startYear}
        {thisYear > startYear && `~${thisYear}`}
      </S.Copyright>
    </Grid>
  </S.Wrapper>
);

export default Footer;
