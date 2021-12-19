import styled, { css } from 'styled-components';

type FlexBoxProps = {
  gap?: string;
};

export default {
  FlexBox: styled.div<FlexBoxProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ gap }) =>
      !!gap &&
      css`
        gap: ${gap};
      `}
  `,
};
