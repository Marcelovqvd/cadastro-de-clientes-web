import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

// este componente input recebe todas as propriedades q um input html tradicional receberia -> InputHTMLAttributes
// O InputHTMLAttributes recebe um parâmetro de tipagem HTMLInputElement que está global na aplicação
// Aqui vai sobrescrever o name, tornando-o obrigatório
// desabilitar a regra em eslintrc.json: Prop spreading is forbiddeneslintreact/jsx-props-no-spreading

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = props => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};

export default Input;
