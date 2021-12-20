import { useState } from 'react';

import { S } from './styled';

export const ExpandParagraph: React.FC = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <S.Wrapper onClick={() => setIsExpand((prevState) => !prevState)}>
      <S.ArrowIcon isExpand={isExpand} />
      <S.Box isExpand={isExpand}>{children}</S.Box>
    </S.Wrapper>
  );
};
