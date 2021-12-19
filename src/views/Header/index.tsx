import Link from 'next/link';
import Image from 'next/image';

import Grid from '@components/layout/Grid';
import Util from '@styles/util';

import S from './styled';

const routes = [
  {
    name: '履歷',
    path: '/',
  },
  {
    name: '作品集',
    path: '/portfolio',
  },
];

const Header: React.FC = () => (
  <S.Wrapper>
    <Grid>
      <Util.FlexBox>
        {/* Logo */}
        <Util.FlexBox gap="0 4px">
          <S.ImageWrapper>
            <Image src="/images/logo.png" alt="Northa 的手繪大頭貼" width={32} height={32} />
          </S.ImageWrapper>
          <S.WebsiteName>Northa</S.WebsiteName>
        </Util.FlexBox>

        {/* Menu */}
        <S.MenuList as="ul" gap="0 8px">
          {routes.map((route) => (
            <li key={route.name}>
              <Link href={route.path}>
                <a>{route.name}</a>
              </Link>
            </li>
          ))}
        </S.MenuList>
      </Util.FlexBox>
    </Grid>
  </S.Wrapper>
);

export default Header;
