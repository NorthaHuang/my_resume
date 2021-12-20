import styled, { css } from 'styled-components';

type FlexBoxProps = {
  gap?: string;
  align?: string;
  justify?: string;
};

export const Util = {
  FlexBox: styled.div<FlexBoxProps>`
    display: flex;
    align-items: ${({ align }) => align || 'center'};
    justify-content: ${({ justify }) => justify || 'space-between'};

    ${({ gap }) =>
      !!gap &&
      css`
        gap: ${gap};
      `}
  `,
  PageTitle: styled.h1`
    margin-bottom: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
  `,
};

export const boxShadow = css`
  box-shadow: 1px 2px 8px ${({ theme: { palette } }) => palette.FORD_GRAY};
`;
