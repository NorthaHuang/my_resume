import styled from 'styled-components';
import { rgba } from 'polished';

export default {
  // gap: 12px;
  Wrapper: styled.div`
    width: 100%;
    @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
      width: calc(50% - 6px);
    }
    @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
      width: calc(33% - 8px);
    }
  `,
  Card: styled.li`
    width: 100%;
    height: 100%;
    padding: 4px 8px;
    overflow: hidden;
    border: 1px solid ${({ theme: { palette } }) => palette.BLACK};
    border-radius: ${({ theme: { shape } }) => shape.borderRadius.standard}px;
    position: relative;

    &:hover {
      .hover-card-mask {
        opacity: 1;
        top: 0;
      }

      .hover-project-name {
        color: ${({ theme: { palette } }) => palette.WHITE};
      }
    }
  `,

  ProjectName: styled.span`
    transition: ${({ theme: { transitions } }) => transitions.duration.short}ms;
    color: ${({ theme: { palette } }) => palette.BLACK};
    z-index: ${({ theme: { zIndex } }) => zIndex.MERCURY};
    position: relative;
  `,

  Mask: styled.div`
    width: 100%;
    height: 100%;
    padding: inherit;
    opacity: 0;
    transition: ${({ theme: { transitions } }) => transitions.duration.short}ms;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
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
