# Alto Tietê em Rede

Página informativa estática sobre campanhas de saúde, vacinação e serviços públicos nos dez municípios do Alto Tietê. As notícias e orientações em destaque são acompanhadas de links para as prefeituras e órgãos oficiais.

## Municípios e informações consultadas

- **Arujá:** evento Corre por Elas anunciado para 17 de outubro de 2026.
- **Biritiba Mirim, Ferraz de Vasconcelos e Guararema:** links para notícias e avisos oficiais de saúde; campanhas sem programação atual confirmada não são apresentadas como vigentes.
- **Itaquaquecetuba:** resgate vacinal contra HPV para jovens de 15 a 19 anos até 31 de dezembro de 2026.
- **Mogi das Cruzes:** ações de Outubro Rosa e mutirão de ginecologia e vacinação em 24 de outubro de 2026.
- **Poá:** atendimento estendido de saúde da mulher durante outubro.
- **Salesópolis:** consulta ao itinerário estadual das Carretas da Mamografia; a passagem no município não foi confirmada nesta consulta.
- **Santa Isabel:** calendário vacinal municipal 2026/2027.
- **Suzano:** programação municipal de Outubro Rosa.

As informações foram consultadas em 16 de outubro de 2026. Programações, horários e disponibilidade podem mudar; confirme os detalhes nos canais oficiais antes de se deslocar. A página é uma iniciativa informativa independente e não representa as prefeituras.

## Executar

Abra `index.html` em um navegador. O projeto usa HTML, CSS e JavaScript sem dependências, servidor ou processo de build. A fonte tipográfica é carregada do Google Fonts; sem conexão, o navegador usa fontes locais alternativas.

## Recursos

- Layout responsivo para celulares, tablets e computadores.
- Tema claro/escuro, seguindo a preferência do sistema e salvando a escolha no navegador.
- Busca por texto e filtro por todos os dez municípios do Alto Tietê.
- Navegação por teclado, link para pular ao conteúdo, estados de foco e suporte a movimento reduzido.
- Paleta inspirada no Padrão Digital de Governo (gov.br), sem uso da marca ou do logotipo oficial.
- Links para as fontes municipais, estaduais e federais consultadas.

## Atualização das informações

As informações são cadastradas em `script.js`, no array `campaigns`. A busca filtra os cartões pelo nome do município, categoria, título e texto. Ao editar um item, atualize o município, a descrição, o período, os detalhes e o link da fonte oficial. Não trate um comunicado antigo como campanha vigente. Atualize também a data de consulta deste README e a data exibida no `index.html`.
