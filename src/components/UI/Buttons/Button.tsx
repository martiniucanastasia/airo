import { buttonStyled as S } from './styles/buttonStyles';
import { ButtonProps } from './types';

const Button = ({ ...props }: ButtonProps) => {
  return <S.Button {...props} />;
};

export default Button;
