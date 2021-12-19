import S from './styled';
import type { RatioBoxProps } from './type';

const DEFAULT_RATIO = {
  width: 16,
  height: 9,
};

export const RatioBox: React.FC<RatioBoxProps> = ({
  children,
  width = '100%',
  maxWidth,
  ratio = DEFAULT_RATIO,
}) => {
  const ratioValue = (ratio.height / ratio.width) * 100;

  return (
    <S.Wrapper width={width} maxWidth={maxWidth}>
      <S.Container ratioValue={ratioValue}>
        <S.Main>{children}</S.Main>
      </S.Container>
    </S.Wrapper>
  );
};
