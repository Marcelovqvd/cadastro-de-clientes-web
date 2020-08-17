import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

// este componente input recebe todas as propriedades q um input html tradicional receberia -> InputHTMLAttributes
// O InputHTMLAttributes recebe um parâmetro de tipagem HTMLInputElement que está global na aplicação
// Aqui vai sobrescrever o name, tornando-o obrigatório
// desabilitar a regra em eslintrc.json: Prop spreading is forbiddeneslintreact/jsx-props-no-spreading

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...rest}) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
