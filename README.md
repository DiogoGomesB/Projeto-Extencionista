[README.md](https://github.com/user-attachments/files/23595774/README.md)
# Rede de Ações Municipais

Landing page estática desenvolvida para divulgar projetos sociais, campanhas de vacinação e ações de solidariedade das prefeituras de São Paulo. O objetivo é oferecer um painel único, atualizado e acessível para que cidadãos conheçam iniciativas em andamento, consultem eventos futuros e recebam convites personalizados.

## Funcionalidades

- **Sessão Hero**: resumo dos números de impacto e chamadas para ações em destaque.
- **Filtro de Ações**: cartões dinâmicos por categoria (projetos sociais, saúde, solidariedade) renderizados via JavaScript.
- **Agenda**: linha do tempo com próximos eventos presenciais nas subprefeituras.
- **Campanha do Agasalho**: destaque institucional com dados de arrecadação e pontos de coleta.
- **Newsletter**: formulário com feedback em tempo real para cadastro de e-mails.
- **Modal de Preferências**: permite selecionar temas de interesse e informar o bairro para receber notificações segmentadas.

## Estrutura do projeto

```
Extencionista/
├── index.html    # Estrutura HTML da página
├── styles.css    # Tema visual, responsividade e componentes reutilizáveis
└── script.js     # Lógica de filtros, renderização dinâmica e interações
```

## Tecnologias utilizadas

- **HTML5** semântico com foco em acessibilidade (aria-labels, aria-live, modal com foco).
- **CSS3** moderno: variáveis, grid/flexbox, gradientes e responsividade.
- **JavaScript** vanilla para manipulação do DOM e gerenciamento de estados de interface.
- **Google Fonts**: famílias Montserrat e Source Serif 4.

## Como executar

1. Faça o clone ou download deste repositório.
2. Abra o arquivo `index.html` diretamente no navegador de sua preferência.
3. Interaja com os botões de filtro, teste o envio do formulário de newsletter e abra o modal "Receber novidades" para conferir as interações.

> Não há dependências externas nem necessidade de servidor local. A página é totalmente estática.

## Próximos passos sugeridos

1. Integrar APIs municipais ou planilhas para atualizar ações dinamicamente.
2. Adicionar formulário de contato real, enviando dados para um backend ou serviço de formulários.
3. Disponibilizar versão em inglês/espanhol para ampliar o alcance das campanhas.
4. Otimizar SEO com metadados, sitemap e uso de dados estruturados (JSON-LD).

## Licença

Defina aqui a licença do projeto (ex.: MIT, Apache 2.0, CC-BY). Caso não tenha uma política definida, considere adicionar posteriormente.
