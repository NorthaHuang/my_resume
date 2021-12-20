import styled from 'styled-components';

export const S = {
  Wrapper: styled.footer`
    padding: 4px 0;
    border-top: 1px solid ${({ theme: { palette } }) => palette.GALLERY};
    line-height: 1;
  `,
  Copyright: styled.span`
    font-size: 12px;
  `,
};
