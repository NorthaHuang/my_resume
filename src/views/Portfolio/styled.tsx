import styled from 'styled-components';
import { rgba } from 'polished';

export default {
  Section: styled.section`
    &:not(:last-of-type) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${({ theme: { palette } }) => rgba(palette.BLACK, 0.25)};
    }
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
