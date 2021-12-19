import styled, { css } from 'styled-components';
import { rgba } from 'polished';

type CardProps = {
  bgImage?: string;
};

export default {
  // gap: 12px;
  Wrapper: styled.div`
    width: 100%;
    @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
      width: calc(50% - 6px);
    }
  `,
  Card: styled.li<CardProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme: { palette } }) => palette.BLACK};
    border-radius: ${({ theme: { shape } }) => shape.borderRadius.standard}px;
    position: relative;

    ${({ bgImage }) =>
      bgImage &&
      css`
        background-image: url(${bgImage});
        background-size: cover;
        background-position: top center;
      `}

    &:hover {
      .hover-card-mask {
        opacity: 1;
        top: 0;
      }

      .hover-project-name {
        opacity: 1;
      }
    }
  `,

  ProjectName: styled.span`
    opacity: 0;
    transition: ${({ theme: { transitions } }) => transitions.duration.short}ms;
    color: ${({ theme: { palette } }) => palette.WHITE};
    z-index: ${({ theme: { zIndex } }) => zIndex.MERCURY};
    position: absolute;
    top: 16px;
    left: 24px;
  `,

  Mask: styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    opacity: 0;
    transition: ${({ theme: { transitions } }) => transitions.duration.short}ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 8px;
    background-color: ${({ theme: { palette } }) => rgba(palette.BLACK, 0.75)};
    backdrop-filter: blur(10px);
    position: absolute;
    top: 50%;
    left: 0;
  `,

  ALink: styled.a`
    cursor: pointer;
    color: ${({ theme: { palette } }) => palette.WHITE};
  `,

  IconWrapper: styled.div`
    padding: 2px;
    transition: ${({ theme: { transitions } }) => transitions.duration.short}ms;
    border-radius: 100em;
    background-color: ${({ theme: { palette } }) => palette.WHITE};

    > svg {
      transition: inherit;
      stroke: ${({ theme: { palette } }) => palette.BLACK};
    }

    &:hover {
      background-color: ${({ theme: { palette } }) => palette.BLACK};

      > svg {
        stroke: ${({ theme: { palette } }) => palette.WHITE};
      }
    }
  `,
};
