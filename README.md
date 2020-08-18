sistema web Reactjs com Typescript

Dados para:

1- Cadastro de cliente com Nome, Nascimento, CPF, Celular, E-mail, Endereço e Observação (textarea) e com máscaras nos campos.

Validações:
0) Todos os campos são obrigatórios, exceto observações. (validar antes de tudo);

1) Nome: Não permitir caracteres especiais (somente letras com ou sem acento).

2) Nascimento: Validar datas impossíveis (ex.: 32/13/123). Não precisa validar meses com 28, 30, 31 dias.

3) CPF: Detectar CPF inválido (pode pegar uma função pronta da internet).

4) Celular: Verificar se possui o dígito 9 no começo. formato: (XX) 9XXXX-XXXX

5) E-mail: Verificar se possui somente um @, com texto antes e depois.

Observação: Máximo de 300 caracteres.


2 - Listagem de clientes com possibilidade de edição e exclusão de registros;

Filtro textual que efetua a busca em todos os campos por substring case-insensitive;
Paginada com 10 registros por página.

JSON server
entrar na pasta server => cd server
executar => json-server --watch db.json

- icons
yarn add react-icons

- hover
yarn add polished

- Lib unform

- lib para validações no formulário -> yup
yarn add yup
yarn add @types/yup - D
