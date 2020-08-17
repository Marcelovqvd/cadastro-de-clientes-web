import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// este componente Button recebe todas as propriedades q um button html tradicional receberia -> ButtonHTMLAttributes
// O ButtonHTMLAttributes recebe um parâmetro de tipagem HTMLButtonElement que está global na aplicação
// Aqui não vai sobrescrever nada e entao o próprio esLint transforma a interface em type, pois seria uma interface vazia

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};
export default Button;
