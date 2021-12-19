import { createGlobalStyle } from 'styled-components';

import bootstrapReboot from './vendors/bootstrap-reboot';
import bootstrapGrid from './vendors/bootstrap-grid';

const GlobalStyled = createGlobalStyle`
  /** Normalize */
  ${bootstrapReboot}

  /** Grid System */
  ${bootstrapGrid}

  /** Custom Setting */
  html, body {
    color: #444;
  }
  select {
    cursor: pointer;
  }
`;

export default GlobalStyled;
