import styled, { css } from 'styled-components';

type IsExpandProps = {
  isExpand: boolean;
};

export const S = {
  Wrapper: styled.div`
    cursor: pointer;
    display: flex;
    gap: 0 8px;
  `,
  ArrowIcon: styled.div<IsExpandProps>`
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: ${({ theme: { palette } }) =>
      `transparent transparent transparent ${palette.BLACK}`};
    position: relative;
    top: 1px;
    left: 8px;

    ${({ isExpand }) =>
      isExpand &&
      css`
        transform: rotate(90deg);
        top: 5px;
        left: 0;
      `}
  `,
  Box: styled.p<IsExpandProps>`
    line-height: 1;
    white-space: pre-wrap;

    ${({ isExpand }) =>
      !isExpand &&
      css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `}
  `,
};
