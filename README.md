•	Implemente um sistema web usando Reactjs com Typescript

Dados para:

1-  Um cadastro de cliente com Nome, Nascimento, CPF, Celular, E-mail,
Endereço e Observação (textarea) e com máscaras nos campos.
- Validações:
0) Todos os campos são obrigatórios, exceto observações. (validar antes
de tudo)
1) Nome: Não permitir caracteres especiais (somente letras com ou sem
acento).
2) Nascimento: Validar datas impossíveis (ex.: 32/13/123). Não precisa
validar meses com 28, 30, 31 dias.
3) CPF: Detectar CPF inválido (pode pegar uma função pronta da
internet).
4) Celular: Verificar se possui o dígito 9 no começo. formato: (XX)
9XXXX-XXXX
5) E-mail: Verificar se possui somente um @, com texto antes e depois.
6) Observação: Máximo de 300 caracteres.
*) Implementar outras validações são um diferencial.
2 -  Uma listagem de clientes com possibilidade de edição e exclusão de
registros;
- A listagem deverá¡ ter um filtro textual que efetua a busca em todos os
campos por substring case-insensitive;
- A lista deve possuir sempre 10 registros e ser paginada.
Considerações finais:
- Todos os dados devem ser salvos localmente, porém deve se ter efeito de requisição
- Comentários no código não são obrigatórios, porém ajudam a validar o seu conhecimento sobre o assunto.
- Opcional: Criar um README com instruções de setup do sistema para podermos
executá-lo e avaliar o resultado
