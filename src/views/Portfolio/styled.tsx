import styled from 'styled-components';

import { boxShadow } from '@styles/util';

export const S = {
  Section: styled.section`
    padding: 16px 24px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.shape.borderRadius.standard}px;
    background-color: ${({ theme: { palette } }) => palette.GALLERY};
    ${boxShadow}

    &:not(:last-of-type) {
      margin-bottom: 40px;
      padding-bottom: 20px;
    }
  `,
  SectionTitle: styled.h2`
    margin-bottom: 16px;
  `,
  List: styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    gap: 12px;
  `,
};
