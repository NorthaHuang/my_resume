import styled, { css } from 'styled-components';

type FlexBoxProps = {
  gap?: string;
  align?: string;
  justify?: string;
};

export default {
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
    font-weight: bold;
  `,
};
