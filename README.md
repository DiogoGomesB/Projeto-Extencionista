# Alto Tietê em Rede

Página informativa estática sobre campanhas de saúde, vacinação e serviços públicos nos dez municípios do Alto Tietê. As notícias e orientações em destaque são classificadas por período (**Vão chegar · Novembro**, **Em andamento** e **Recentes / Anteriores**) e acompanhadas de links para as prefeituras e órgãos oficiais.

## Municípios e informações consultadas

- **Mogi das Cruzes:** preparação para o Novembro Azul (testes rápidos, aferição de pressão/glicemia, reforço vacinal nas UBSs e UNICAs e mutirões urológicos via SIS 160) e registro do mutirão de ginecologia, Papanicolau e vacinação realizado em 24 de outubro de 2026.
- **Suzano:** mobilização do Novembro Azul com coleta de PSA e previsão de Dia D nas 24 UBSs/USFs, além das salas de vacinação de rotina (8h às 16h) e encerramento do Outubro Rosa.
- **Itaquaquecetuba:** resgate vacinal contra HPV para jovens de 15 a 19 anos vigente até 31 de dezembro de 2026 e preparação de ações de saúde do homem (Novembro Azul) e combate preventivo à dengue no pré-verão.
- **Arujá:** mutirões descentralizados de saúde masculina e prevenção nas USFs para novembro e registro da mobilização Corre por Elas realizada em 17 de outubro de 2026.
- **Poá:** reta final do Corujão da Saúde da Mulher (atendimento até as 21h em outubro) e transição para as ações do Novembro Azul e multivacinação nas UBSs e Praça da Bíblia.
- **Ferraz de Vasconcelos:** programação de Novembro Azul e vacinação extramuros, vacinação antirrábica permanente junto à Clínica Veterinária Municipal e registro das ações recentes da Vigilância Epidemiológica.
- **Guararema:** novas etapas do programa itinerante "Vacina em Movimento" e Novembro Azul, somadas à rotina de imunização na UBS Lambari, UBS Jardim Dulce e CESAP Nogueira.
- **Santa Isabel:** calendário vacinal municipal 2026/2027 ativo, preparação do Novembro Azul nas UBSs e orientações recentes sobre conferência presencial da caderneta vacinal.
- **Biritiba Mirim:** rotina de vacinação no CSIII (Jardim Takebe) e unidades ESF, além do aviso recente sobre manutenção/suspensão temporária na sala de vacina da ESF Jardim Yoneda.
- **Salesópolis:** vacinação de rotina nas UBSs Centro e Nossa Sra. do Remédio, consulta ao itinerário estadual das Carretas da Mamografia (Mulheres de Peito) e emissão digital via VaciVida / Meu SUS Digital.

As informações foram consultadas e atualizadas em 28 de outubro de 2026. Programações, horários e disponibilidade podem mudar; confirme os detalhes nos canais oficiais antes de se deslocar. A página é uma iniciativa informativa independente e não representa as prefeituras.

## Executar

Abra `index.html` em um navegador. O projeto usa HTML, CSS e JavaScript sem dependências, servidor ou processo de build. As fontes tipográficas (`Plus Jakarta Sans` e `Noto Sans`) são carregadas do Google Fonts; sem conexão, o navegador usa fontes locais alternativas.

## Recursos

- Layout moderno e responsivo para celulares, tablets e computadores.
- Identidade visual inspirada no Padrão Digital de Governo (gov.br) com as cores do Brasil (azul, verde e amarelo-ouro), sem uso da marca ou do logotipo oficial.
- Tema claro/escuro, seguindo a preferência do sistema e salvando a escolha no navegador.
- Busca por texto, filtro rápido pelos 10 municípios do Alto Tietê (via seletor ou painel regional interativo) e filtro por período (`Todas`, `Vão chegar · Novembro`, `Em andamento`, `Recentes / Anteriores`).
- Navegação por teclado, link para pular ao conteúdo, estados de foco e suporte a movimento reduzido.
- Links para as fontes municipais, estaduais e federais consultadas.

## Atualização das informações

As informações são cadastradas em `script.js`, no array `campaigns`. Cada item possui `city`, `cityName`, `category`, `status` (`"proxima"`, `"vigente"` ou `"recente"`), `statusLabel`, `title`, `summary`, `detail`, `url` e `linkLabel`. Atualize também a data de consulta deste README e a data exibida no `index.html`.
