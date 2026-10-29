const campaigns = [
    // =========================================================================
    // PRÓXIMAS CAMPANHAS E AÇÕES QUE VÃO CHEGAR (NOVEMBRO / DEZEMBRO 2026)
    // =========================================================================
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Novembro Azul: prevenção e cuidado integral à saúde do homem",
        summary: "As UBSs e unidades UNICA iniciam em novembro a intensificação de testes rápidos de ISTs, aferição de pressão e glicemia, triagem odontológica e atualização vacinal para o público masculino.",
        detail: "Mutirões urológicos e solicitações de exames preventivos (como PSA e ultrassom) seguem os protocolos do SUS e agendamento pelo SIS 160.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Acompanhar agenda na Prefeitura"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Campanha Novembro Azul terá coleta de PSA e Dia D nas UBSs",
        summary: "A Secretaria Municipal de Saúde prepara mobilização nas 24 UBSs e USFs com foco na coleta de exames preventivos (PSA), saúde bucal e controle de hipertensão e diabetes.",
        detail: "Está previsto plantão especial aos sábados (Dia D) no mês de novembro para atender trabalhadores que não conseguem ir ao posto durante a semana.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Ver portal da Saúde de Suzano"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Saúde do Homem e intensificação contra a dengue no pré-verão",
        summary: "A rede municipal prepara ações do Novembro Azul nas UBSs e USFs aliadas a mutirões de orientação e vistoria preventiva contra focos do Aedes aegypti antes do período chuvoso.",
        detail: "Procure a unidade de saúde mais próxima com RG, CPF e Cartão SUS para check-up masculino e atualização de doses pendentes.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Consultar portal de Itaquaquecetuba"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Mutirões de saúde masculina e prevenção nas USFs",
        summary: "A Secretaria de Saúde programa ações descentralizadas para novembro nas unidades do Parque Rodrigo Barreto, Mirante, Jardim Emília, Nova Arujá e Vila Pilar.",
        detail: "A programação prevê coleta de exames laboratoriais, testes rápidos, aferição de pressão arterial e atualização da carteira vacinal.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-saude/",
        linkLabel: "Ver notícias da Saúde de Arujá"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Mobilização de saúde do homem e multivacinação nas UBSs",
        summary: "Após o encerramento do Corujão de outubro, Poá direciona as equipes das UBSs (Calmon Viana, Nova Poá, Vila Varela e Jardim América) para os exames preventivos masculinos.",
        detail: "Acompanhe no site oficial a divulgação de pontos volantes na Praça da Bíblia e os horários de coleta laboratorial.",
        url: "https://poa.sp.gov.br/",
        linkLabel: "Acessar portal da Prefeitura de Poá"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Prevenção ao câncer de próstata e vacinação extramuros",
        summary: "As unidades CSII, Santo Antônio, Margarida e CDHU preparam ações educativas e triagem para o público masculino, além de campanhas de imunização em parceria com empresas locais.",
        detail: "Dúvidas sobre ações extramuros podem ser tratadas com a Vigilância Epidemiológica pelo telefone (11) 4674-7800.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver avisos da Secretaria de Saúde"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Vacina em Movimento",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Ações itinerantes e prevenção do Novembro Azul nos bairros",
        summary: "Guararema organiza para novembro o reforço de exames preventivos masculinos e novas etapas do programa 'Vacina em Movimento' em pontos comunitários.",
        detail: "O atendimento regular segue de segunda a sexta na UBS Lambari (7h às 17h), UBS Jardim Dulce e CESAP Nogueira. Informações: (11) 4693-8040.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Acompanhar notícias de Guararema"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Saúde preventiva do homem e atualização vacinal de fim de ano",
        summary: "As UBSs municipais iniciam em novembro o acolhimento direcionado ao diagnóstico precoce do câncer de próstata e revisão das cadernetas de vacinação de adultos e idosos.",
        detail: "Leve Cartão SUS, documento com foto e comprovante de residência à unidade de saúde de referência do seu bairro.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Consultar Secretaria de Saúde"
    },

    // =========================================================================
    // CAMPANHAS EM ANDAMENTO / SERVIÇOS VIGENTES ATUALMENTE
    // =========================================================================
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Vacinação HPV",
        status: "vigente",
        statusLabel: "Em andamento · Até 31/12",
        title: "Resgate vacinal contra HPV para jovens de 15 a 19 anos",
        summary: "Jovens de 15 a 19 anos que ainda não receberam a vacina contra o HPV podem procurar qualquer UBS até 31 de dezembro de 2026. A rotina segue fixa para a faixa de 9 a 14 anos.",
        detail: "Apresente RG, CPF, Cartão SUS e caderneta de vacinação. Menores de idade devem estar acompanhados por um responsável legal.",
        url: "https://www.itaquaquecetuba.sp.gov.br/noticias/ver.php?id=5711",
        linkLabel: "Ver orientações da Prefeitura"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Outubro Rosa",
        status: "vigente",
        statusLabel: "Em andamento · Reta final",
        title: "Corujão da Saúde da Mulher com atendimento até as 21h",
        summary: "Últimos dias do horário estendido de outubro no Centro de Saúde da Mulher Poaense, com oferta de Papanicolau, encaminhamento de mamografia e testes rápidos.",
        detail: "Atendimento noturno disponível até o encerramento de outubro. Confirme documentos necessários no comunicado oficial da Prefeitura.",
        url: "https://poa.sp.gov.br/prefeitura-de-poa-anuncia-corujao-da-saude-da-mulher-com-atendimento-ate-as-21h-durante-todo-o-mes-de-outubro/",
        linkLabel: "Ver comunicado da Prefeitura"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Vacinação",
        status: "vigente",
        statusLabel: "Em andamento · 2026/2027",
        title: "Calendário vacinal municipal 2026/2027 nas UBSs",
        summary: "A Secretaria Municipal de Saúde mantém ativo o cronograma do Programa Nacional de Imunizações (PNI) para crianças, adolescentes, gestantes e idosos em todas as UBSs.",
        detail: "Inclui doses contra poliomielite, tríplice viral, hepatites, febre amarela, influenza, dengue e HPV conforme faixa etária.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/calendario-vacinal-",
        linkLabel: "Ver calendário da Prefeitura"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Salas de vacinação abertas de segunda a sexta nas UBSs",
        summary: "A rede municipal disponibiliza imunização de rotina e atualização de cadernetas em atraso em todas as regiões da cidade, além da reta final das ações do Outubro Rosa.",
        detail: "Horário habitual das salas de vacina: das 8h às 16h. Leve documento oficial com foto, CPF, Cartão SUS e caderneta.",
        url: "https://suzano.sp.gov.br/saude/programacao-outubro-rosa/",
        linkLabel: "Consultar programação oficial"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Atendimento vacinal no CSIII e unidades ESF do município",
        summary: "A imunização de rotina acontece no Centro de Especialidades (CSIII – Jardim Takebe) e nas ESFs Jardim dos Eucaliptos, Cruz das Almas e Irohy.",
        detail: "Atenção: verifique avisos recentes antes de ir à ESF Jardim Yoneda, que passou por suspensão temporária na sala de vacina.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver notícias da Prefeitura"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Saúde Animal e Zoonoses",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação antirrábica para cães e gatos e vigilância contra dengue",
        summary: "A Prefeitura mantém ações permanentes de imunização antirrábica junto à Clínica Veterinária Municipal e postos fixos, além do monitoramento de arboviroses nos bairros.",
        detail: "Consulte na editoria de Saúde os dias de aplicação e critérios para agendamento de atendimento veterinário gratuito.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver notícias da Secretaria"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Imunização e Mamografia",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação nas UBSs Centro e Remédios e consulta às Carretas de SP",
        summary: "As vacinas do calendário SUS são aplicadas na UBS Centro (Rua N. Sra. de Fátima) e na UBS Nossa Sra. do Remédio. Para mamografia móvel estadual, consulte o roteiro Mulheres de Peito.",
        detail: "Contatos das unidades de Salesópolis: UBS Centro (11) 4696-1861 e UBS Remédios (11) 4696-5145.",
        url: "https://www.poupatempo.sp.gov.br/carta/B7ED6C20-6D1B-481B-8693-35AD62D16E42",
        linkLabel: "Consultar itinerário e informações"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Atenção Básica",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Imunização de rotina e acompanhamento preventivo nas UBSs",
        summary: "As salas de vacina da UBS Lambari, UBS Jardim Dulce e o atendimento especializado no CESAP Nogueira funcionam de segunda a sexta-feira para atualização vacinal.",
        detail: "A UBS Lambari (Av. Francisca Lerário, 955) atende das 7h às 17h. Telefone de suporte: (11) 4693-3448.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Saúde"
    },

    // =========================================================================
    // NOTÍCIAS E AÇÕES RECENTES / ANTERIORES (OUTUBRO E MESES ANTERIORES)
    // =========================================================================
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Realizada em 24/10",
        title: "Mutirão de ginecologia, Papanicolau e vacinação nas UBSs",
        summary: "No sábado de 24 de outubro de 2026, a Prefeitura realizou plantão das 8h às 17h nas UBSs Jundiapeba, Ponte Grande, Alto Ipiranga e Vila Suíssa com exames por livre demanda.",
        detail: "Mulheres que não puderam comparecer ao mutirão ainda podem agendar coleta de Papanicolau diretamente na UBS mais próxima.",
        url: "https://www.mogidascruzes.sp.gov.br/noticia/prefeitura-de-mogi-amplia-acoes-de-prevencao-e-cuidado-as-mulheres-durante-o-outubro-rosa",
        linkLabel: "Ver registro da ação na Prefeitura"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Realizada em 17/10",
        title: "Corre por Elas: corrida e caminhada de conscientização",
        summary: "Mobilização gratuita promovida em 17 de outubro de 2026 na Avenida Mário Covas reuniu moradores em prol da prevenção ao câncer de mama e do colo do útero.",
        detail: "Os exames preventivos de rotina continuam disponíveis durante todo o ano nas Unidades de Saúde da Família (USFs) de Arujá.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-esportes/",
        linkLabel: "Consultar arquivo da Prefeitura"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Comunicado",
        status: "recente",
        statusLabel: "Aviso recente",
        title: "Pausa técnica para capacitação e manutenção na ESF Jardim Yoneda",
        summary: "A Secretaria de Saúde emitiu comunicado informando a suspensão temporária da sala de vacinação da ESF Jardim Yoneda e treinamentos pontuais das equipes da rede.",
        detail: "Durante manutenções em unidades específicas, o atendimento vacinal é absorvido pelo CSIII no Jardim Takebe.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Conferir comunicados oficiais"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Multivacinação",
        status: "recente",
        statusLabel: "Ação recente",
        title: "Dia D de atualização vacinal e imunização de servidores públicos",
        summary: "A Vigilância Epidemiológica promoveu mobilizações recentes de resgate vacinal contra o HPV para jovens e campanhas internas de imunização para servidores municipais.",
        detail: "As doses remanescentes permanecem disponíveis de segunda a sexta-feira nas UBSs de referência do município.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver histórico na Secretaria"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Esclarecimento Oficial",
        status: "recente",
        statusLabel: "Comunicado recente",
        title: "Orientação sobre alertas de atraso vacinal e Dia D de Multivacinação",
        summary: "Após o Dia D de atualização de cadernetas, a Secretaria de Saúde orientou moradores que receberam notificações automáticas a conferirem o registro físico diretamente nas UBSs.",
        detail: "A checagem presencial na UBS garante a baixa correta das doses no sistema nacional do Ministério da Saúde.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Ler orientações no portal"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Portal VaciVida",
        status: "recente",
        statusLabel: "Orientação permanente",
        title: "Emissão digital de carteira vacinal pelo Meu SUS Digital e VaciVida",
        summary: "Moradores que participaram das campanhas anteriores de gripe, Covid-19 e febre amarela em Salesópolis podem emitir o certificado atualizado pelos portais oficiais.",
        detail: "Caso alguma dose aplicada nas UBSs locais não conste no aplicativo, apresente o comprovante físico na UBS Centro ou Remédios.",
        url: "https://www.salesopolis.sp.gov.br/",
        linkLabel: "Acessar Prefeitura de Salesópolis"
    }
];

const campaignGrid = document.querySelector("#campaign-grid");
const resultsCount = document.querySelector("#results-count");
const cityFilter = document.querySelector("#city-filter");
const statusPills = document.querySelectorAll(".status-pill[data-status]");
const campaignSearchForm = document.querySelector("#campaign-search-form");
const campaignSearch = document.querySelector("#campaign-search");
const regionTags = document.querySelectorAll(".region-tag[data-city]");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = themeToggle?.querySelector(".theme-toggle__label");
const themeStorageKey = "alto-tiete-theme";

let currentStatus = "todas";

function createCampaignCard(campaign) {
    const article = document.createElement("article");
    article.className = "campaign-card";
    article.dataset.status = campaign.status;

    const meta = document.createElement("div");
    meta.className = "card-meta";

    const city = document.createElement("span");
    city.className = "card-city";
    city.textContent = campaign.cityName;

    const statusBadge = document.createElement("span");
    statusBadge.className = `card-status card-status--${campaign.status}`;
    statusBadge.textContent = campaign.statusLabel;

    const category = document.createElement("span");
    category.className = `card-category ${campaign.status === "recente" ? "card-category--official" : "card-category--active"}`;
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

    meta.append(city, statusBadge, category);
    article.append(meta, title, summary, detail, link);
    return article;
}

function syncRegionTags(selectedCity) {
    regionTags.forEach((button) => {
        const isSelected = button.dataset.city === selectedCity;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    });
}

function syncStatusPills(selectedStatus) {
    statusPills.forEach((pill) => {
        const isSelected = pill.dataset.status === selectedStatus;
        pill.classList.toggle("is-active", isSelected);
        pill.setAttribute("aria-pressed", String(isSelected));
    });
}

function renderCampaigns(city = "todas", searchTerm = "", status = currentStatus) {
    if (!campaignGrid || !resultsCount) return;

    syncRegionTags(city);
    syncStatusPills(status);

    const byCity = city === "todas"
        ? campaigns
        : campaigns.filter((campaign) => campaign.city === city);

    const byStatus = status === "todas"
        ? byCity
        : byCity.filter((campaign) => campaign.status === status);

    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");
    const visibleCampaigns = normalizedSearch
        ? byStatus.filter((campaign) => [
            campaign.cityName,
            campaign.category,
            campaign.statusLabel,
            campaign.title,
            campaign.summary,
            campaign.detail
        ].some((value) => value.toLocaleLowerCase("pt-BR").includes(normalizedSearch)))
        : byStatus;

    const fragment = document.createDocumentFragment();
    visibleCampaigns.forEach((campaign) => {
        fragment.append(createCampaignCard(campaign));
    });

    campaignGrid.replaceChildren(fragment);
    const count = visibleCampaigns.length;
    if (count === 0) {
        resultsCount.textContent = "Nenhum resultado encontrado. Tente outro termo, período ou município.";
        return;
    }
    resultsCount.textContent = `${count} ${count === 1 ? "notícia ou campanha encontrada" : "notícias e campanhas encontradas"}.`;
}

cityFilter?.addEventListener("change", () => {
    renderCampaigns(cityFilter.value, campaignSearch?.value ?? "", currentStatus);
});

statusPills.forEach((pill) => {
    pill.addEventListener("click", () => {
        currentStatus = pill.dataset.status ?? "todas";
        renderCampaigns(cityFilter?.value ?? "todas", campaignSearch?.value ?? "", currentStatus);
    });
});

regionTags.forEach((button) => {
    button.addEventListener("click", () => {
        const clickedCity = button.dataset.city ?? "todas";
        const nextCity = cityFilter?.value === clickedCity ? "todas" : clickedCity;
        if (cityFilter) cityFilter.value = nextCity;
        renderCampaigns(nextCity, campaignSearch?.value ?? "", currentStatus);
        document.querySelector("#campanhas")?.scrollIntoView({ behavior: "smooth" });
    });
});

campaignSearch?.addEventListener("input", () => {
    renderCampaigns(cityFilter?.value ?? "todas", campaignSearch.value, currentStatus);
});

campaignSearchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderCampaigns(cityFilter?.value ?? "todas", campaignSearch?.value ?? "", currentStatus);
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

function initializeDeveloperCards() {
    const devCards = document.querySelectorAll(".dev-card");
    const fallbackExtensions = ["jpeg", "png", "webp"];

    devCards.forEach((card) => {
        const avatar = card.querySelector(".dev-avatar");
        const img = avatar?.querySelector("img");
        const fallback = avatar?.querySelector(".dev-avatar__fallback");
        const nameHeading = card.querySelector(".dev-name");

        if (nameHeading && fallback) {
            const nameText = nameHeading.textContent?.trim() ?? "";
            if (nameText && !nameText.toLocaleLowerCase("pt-BR").startsWith("nome do integrante")) {
                const parts = nameText.split(/\s+/).filter(Boolean);
                const initials = parts.length > 1
                    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
                    : parts[0].slice(0, 2);
                fallback.textContent = initials.toUpperCase();
            }
        }

        if (!img || !avatar) return;

        let extIndex = 0;
        const originalSrc = img.getAttribute("src") ?? "";
        const baseWithoutExt = originalSrc.replace(/\.(jpe?g|png|webp)$/i, "");

        const markLoaded = () => {
            if (img.naturalWidth > 0) {
                avatar.classList.add("has-photo");
                avatar.classList.remove("no-photo");
            } else {
                avatar.classList.add("no-photo");
                avatar.classList.remove("has-photo");
            }
        };

        const markError = () => {
            if (baseWithoutExt && originalSrc.startsWith("fotos/") && extIndex < fallbackExtensions.length) {
                const nextExt = fallbackExtensions[extIndex];
                extIndex += 1;
                img.src = `${baseWithoutExt}.${nextExt}`;
                return;
            }
            avatar.classList.add("no-photo");
            avatar.classList.remove("has-photo");
        };

        img.addEventListener("load", markLoaded);
        img.addEventListener("error", markError);

        if (img.complete) {
            if (img.naturalWidth > 0) {
                markLoaded();
            } else {
                markError();
            }
        }
    });
}

renderCampaigns();
initializeTheme();
initializeDeveloperCards();
