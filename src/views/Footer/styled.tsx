import styled from 'styled-components';
import { rgba } from 'polished';

export const S = {
  Wrapper: styled.footer`
    padding: 4px 0;
    line-height: 1;
    background-color: ${({ theme: { palette } }) => rgba(palette.BLACK, 0.8)};
  `,
  Text: styled.span`
    color: ${({ theme: { palette } }) => palette.WHITE};
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    display: block;
  `,
};
