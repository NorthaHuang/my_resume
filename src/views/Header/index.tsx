import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import Grid from '@components/layout/Grid';
import { Util } from '@styles/util';

import { S } from './styled';
import { routes } from './menuRoutes';

const Header: React.FC = () => {
  const router = useRouter();
  const currentPathname = router.pathname;

  return (
    <S.Wrapper>
      <Grid>
        <Util.FlexBox>
          {/* Logo */}
          <Link passHref href="/">
            <S.AnchorLink noInteration>
              <Util.FlexBox gap="0 8px">
                <S.ImageWrapper>
                  <Image src="/images/logo.png" alt="Northa 的手繪大頭貼" width={32} height={32} />
                </S.ImageWrapper>
                <S.WebsiteName>Northa</S.WebsiteName>
              </Util.FlexBox>
            </S.AnchorLink>
          </Link>

          {/* Menu */}
          <S.MenuList as="ul" gap="0 12px">
            {routes.map((route) => (
              <li key={route.name}>
                <Link passHref href={route.path}>
                  <S.AnchorLink isActive={currentPathname === route.path}>
                    {route.name}
                  </S.AnchorLink>
                </Link>
              </li>
            ))}
          </S.MenuList>
        </Util.FlexBox>
      </Grid>
    </S.Wrapper>
  );
};

export default Header;
