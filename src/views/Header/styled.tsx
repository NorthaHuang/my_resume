import styled from 'styled-components';

import Util from '@styles/util';

export default {
  Wrapper: styled.header`
    padding: 4px 0;
    border-bottom: 1px solid ${({ theme: { palette } }) => palette.GALLERY};
  `,

  // Logo
  ImageWrapper: styled.div`
    border-radius: 100%;
    line-height: 0;
  `,
  WebsiteName: styled.span`
    font-size: 20px;
  `,

  // Menu
  MenuList: styled(Util.FlexBox)`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
};
