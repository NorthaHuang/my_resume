import styled, { css } from 'styled-components';

import type { RatioBoxProps } from './type';

type WrapperProps = Pick<RatioBoxProps, 'width' | 'maxWidth'>;

type ContainerProps = {
  ratioValue: number;
};

export const S = {
  Wrapper: styled.div<WrapperProps>`
    width: ${({ width }) => width};
    ${({ maxWidth }) =>
      maxWidth &&
      css`
        max-width: ${maxWidth}px;
      `}
  `,
  Container: styled.div<ContainerProps>`
    width: 100%;
    height: 0;
    padding-bottom: ${({ ratioValue }) => ratioValue}%;
    position: relative;
  `,
  Main: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  `,
};
