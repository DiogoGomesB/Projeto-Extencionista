const campaigns = [
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Outubro Rosa",
        title: "Corre por Elas: corrida e caminhada",
        summary: "Arujá promove uma mobilização gratuita de corrida e caminhada em alusão ao Outubro Rosa.",
        detail: "A atividade está anunciada para 17 de outubro de 2026, na Avenida Mário Covas. Confira orientações e possíveis atualizações no portal municipal.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-esportes/",
        linkLabel: "Consultar notícias da Prefeitura"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Canal oficial",
        title: "Acompanhe avisos de saúde e vacinação",
        summary: "O portal municipal reúne comunicados e notícias locais. Nesta consulta, não encontrei uma campanha de vacinação com programação atual confirmada para destacar.",
        detail: "Confirme nas notícias oficiais quais salas de vacina estão abertas, os horários e as doses disponíveis antes de ir à unidade.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver notícias da Prefeitura"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Canal oficial",
        title: "Acompanhe as ações da Secretaria de Saúde",
        summary: "A Prefeitura publica avisos e atividades municipais na seção de Saúde. Não encontrei uma programação atual de campanha que pudesse confirmar nesta consulta.",
        detail: "Consulte os comunicados municipais para verificar atividades nas UBSs, horários e necessidade de agendamento.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver notícias da Secretaria"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Canal oficial",
        title: "Consulte os avisos municipais de saúde",
        summary: "A Prefeitura mantém uma página de notícias da Saúde. As publicações localizadas sobre campanhas específicas eram de períodos anteriores, então não as apresento como programação atual.",
        detail: "Confira o portal municipal para obter informações recentes sobre vacinação, unidades e ações locais.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Saúde"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Vacinação HPV",
        title: "Resgate vacinal contra HPV vai até dezembro",
        summary: "Jovens de 15 a 19 anos que não receberam a vacina podem procurar uma UBS até 31 de dezembro de 2026. A vacinação de rotina segue indicada para meninas e meninos de 9 a 14 anos.",
        detail: "Leve documento com foto, CPF, Cartão SUS e, se possível, a caderneta. Menores devem estar com responsável.",
        url: "https://www.itaquaquecetuba.sp.gov.br/noticias/ver.php?id=5711",
        linkLabel: "Ver orientações da Prefeitura"
    },
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Outubro Rosa",
        title: "Outubro Rosa amplia prevenção e acesso à saúde",
        summary: "A programação municipal reúne a Carreta da Saúde da Mulher, exames, ações educativas nas UBSs e atualização vacinal ao longo de outubro.",
        detail: "Em 24/10, haverá mutirão de ginecologia e vacinação, das 8h às 17h, nas UBSs Jundiapeba, Ponte Grande e Alto Ipiranga.",
        url: "https://www.mogidascruzes.sp.gov.br/noticia/prefeitura-de-mogi-amplia-acoes-de-prevencao-e-cuidado-as-mulheres-durante-o-outubro-rosa",
        linkLabel: "Ver notícia da Prefeitura"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Outubro Rosa",
        title: "Corujão da Saúde da Mulher até as 21h",
        summary: "O Centro de Saúde da Mulher Poaense amplia o atendimento durante outubro, com serviços de prevenção e exames voltados à saúde da mulher.",
        detail: "A Prefeitura informa atendimento estendido até as 21h durante o mês. Confirme no comunicado oficial os serviços, critérios e disponibilidade.",
        url: "https://poa.sp.gov.br/prefeitura-de-poa-anuncia-corujao-da-saude-da-mulher-com-atendimento-ate-as-21h-durante-todo-o-mes-de-outubro/",
        linkLabel: "Ver comunicado da Prefeitura"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Mamografia",
        title: "Consulte o itinerário das Carretas da Mamografia",
        summary: "O Governo de São Paulo publica o roteiro do programa Mulheres de Peito, que oferece mamografias gratuitas. A passagem por Salesópolis não foi confirmada nesta consulta.",
        detail: "Confira no itinerário oficial as cidades atendidas, datas, documentação e condições antes de se deslocar.",
        url: "https://www.poupatempo.sp.gov.br/carta/B7ED6C20-6D1B-481B-8693-35AD62D16E42",
        linkLabel: "Consultar itinerário oficial"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Vacinação",
        title: "Calendário vacinal municipal 2026/2027",
        summary: "A Secretaria Municipal de Saúde publicou orientações sobre as vacinas do Programa Nacional de Imunizações para crianças e adolescentes.",
        detail: "Leve a caderneta à UBS para conferir quais doses são indicadas para cada idade e atualizar o esquema vacinal.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/calendario-vacinal-",
        linkLabel: "Ver calendário da Prefeitura"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Outubro Rosa",
        title: "Programação municipal de prevenção e cuidado",
        summary: "A Prefeitura de Suzano publicou a agenda de Outubro Rosa, com atividades de prevenção, atendimento e orientação em unidades e espaços da cidade.",
        detail: "Consulte a programação oficial para confirmar as datas, os locais e os serviços disponíveis em cada ação.",
        url: "https://suzano.sp.gov.br/saude/programacao-outubro-rosa/",
        linkLabel: "Consultar programação oficial"
    }
];

const campaignGrid = document.querySelector("#campaign-grid");
const resultsCount = document.querySelector("#results-count");
const cityFilter = document.querySelector("#city-filter");
const campaignSearchForm = document.querySelector("#campaign-search-form");
const campaignSearch = document.querySelector("#campaign-search");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = themeToggle?.querySelector(".theme-toggle__label");
const themeStorageKey = "alto-tiete-theme";

function createCampaignCard(campaign) {
    const article = document.createElement("article");
    article.className = "campaign-card";

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const city = document.createElement("span");
    city.className = "card-city";
    city.textContent = campaign.cityName;

    const category = document.createElement("span");
    category.className = "card-category";
    category.textContent = campaign.category;

    const title = document.createElement("h3");
    title.textContent = campaign.title;

    const summary = document.createElement("p");
    summary.className = "campaign-card__summary";
    summary.textContent = campaign.summary;

    const detail = document.createElement("p");
    detail.className = "campaign-card__detail";
    detail.textContent = campaign.detail;

    const link = document.createElement("a");
    link.className = "campaign-card__link";
    link.href = campaign.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(document.createTextNode(campaign.linkLabel));

    const externalIcon = document.createElement("span");
    externalIcon.setAttribute("aria-hidden", "true");
    externalIcon.textContent = "↗";
    link.append(externalIcon);

    meta.append(city, category);
    article.append(meta, title, summary, detail, link);
    return article;
}

function renderCampaigns(city = "todas", searchTerm = "") {
    if (!campaignGrid || !resultsCount) return;

    const selectedCampaigns = city === "todas"
        ? campaigns
        : campaigns.filter((campaign) => campaign.city === city);
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");
    const visibleCampaigns = normalizedSearch
        ? selectedCampaigns.filter((campaign) => [
            campaign.cityName,
            campaign.category,
            campaign.title,
            campaign.summary,
            campaign.detail
        ].some((value) => value.toLocaleLowerCase("pt-BR").includes(normalizedSearch)))
        : selectedCampaigns;

    const fragment = document.createDocumentFragment();
    visibleCampaigns.forEach((campaign) => {
        fragment.append(createCampaignCard(campaign));
    });

    campaignGrid.replaceChildren(fragment);
    const count = visibleCampaigns.length;
    if (count === 0) {
        resultsCount.textContent = "Nenhum resultado encontrado. Tente outro termo ou município.";
        return;
    }
    resultsCount.textContent = `${count} ${count === 1 ? "resultado encontrado" : "resultados encontrados"}.`;
}

cityFilter?.addEventListener("change", () => {
    renderCampaigns(cityFilter.value, campaignSearch?.value ?? "");
});

campaignSearch?.addEventListener("input", () => {
    renderCampaigns(cityFilter?.value ?? "todas", campaignSearch.value);
});

campaignSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderCampaigns(cityFilter?.value ?? "todas", campaignSearch?.value ?? "");
});

function getCurrentTheme() {
    const explicitTheme = document.documentElement.dataset.theme;
    if (explicitTheme) return explicitTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeControl(theme) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const accessibleLabel = `Ativar tema ${nextTheme === "dark" ? "escuro" : "claro"}`;
    themeToggle?.setAttribute("aria-label", accessibleLabel);
    themeToggle?.setAttribute("title", accessibleLabel);
    if (themeLabel) themeLabel.textContent = theme === "dark" ? "Escuro" : "Claro";
}

function applyTheme(theme, persist = false) {
    document.documentElement.dataset.theme = theme;
    updateThemeControl(theme);

    if (!persist) return;
    try {
        window.localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
        console.warn("Não foi possível salvar a preferência de tema neste navegador.", error);
    }
}

function initializeTheme() {
    let savedTheme;
    try {
        savedTheme = window.localStorage.getItem(themeStorageKey);
    } catch (error) {
        console.warn("Não foi possível ler a preferência de tema neste navegador.", error);
    }

    if (savedTheme === "light" || savedTheme === "dark") {
        applyTheme(savedTheme);
    } else {
        updateThemeControl(getCurrentTheme());
    }
}

themeToggle?.addEventListener("click", () => {
    const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
});

renderCampaigns();
initializeTheme();
