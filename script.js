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
        title: "Novembro Azul: prevenção à saúde do homem",
        summary: "Testes rápidos, aferição de pressão/glicemia e atualização vacinal nas UBSs e unidades UNICA.",
        detail: "Agendamentos urológicos pelo SIS 160 e nas UBSs.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Ver no site da Prefeitura"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Coleta de PSA e Dia D nas UBSs em novembro",
        summary: "Mobilização nas 24 UBSs e USFs com foco em exames preventivos masculinos e controle de pressão e diabetes.",
        detail: "Previsão de plantão aos sábados (Dia D) em novembro.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Ver portal da Saúde"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Saúde do Homem e prevenção contra a dengue",
        summary: "Check-up masculino nas UBSs/USFs aliado a mutirões preventivos contra o Aedes aegypti.",
        detail: "Leve RG, CPF e Cartão SUS à unidade mais próxima.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Ver portal da Prefeitura"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Mutirões de saúde masculina nas USFs",
        summary: "Exames laboratoriais, testes rápidos e vacinação nas unidades do Barreto, Mirante, Emília e Nova Arujá.",
        detail: "Atendimento descentralizado nos bairros em novembro.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-saude/",
        linkLabel: "Ver notícias de Arujá"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Saúde do homem e multivacinação nas UBSs",
        summary: "Exames preventivos masculinos nas UBSs Calmon Viana, Nova Poá, Vila Varela e Jardim América.",
        detail: "Ações também previstas na Praça da Bíblia.",
        url: "https://poa.sp.gov.br/",
        linkLabel: "Acessar Prefeitura de Poá"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Prevenção ao câncer de próstata e vacinação",
        summary: "Triagem masculina nas unidades CSII, Santo Antônio, Margarida e CDHU e ações em empresas.",
        detail: "Vigilância Epidemiológica: (11) 4674-7800.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver avisos da Saúde"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Vacina em Movimento",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Vacina em Movimento e Novembro Azul",
        summary: "Ações itinerantes nos bairros e atendimento na UBS Lambari, UBS Jardim Dulce e CESAP Nogueira.",
        detail: "Informações da Saúde: (11) 4693-8040.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Guararema"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Saúde preventiva do homem e revisão vacinal",
        summary: "Acolhimento preventivo masculino e atualização da carteira vacinal de adultos e idosos nas UBSs.",
        detail: "Leve Cartão SUS e documento com foto à sua UBS.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Consultar Secretaria"
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
        title: "Resgate vacinal contra HPV (15 a 19 anos)",
        summary: "Jovens de 15 a 19 anos ainda não vacinados podem se imunizar nas UBSs até 31/12/2026. Rotina fixa de 9 a 14 anos.",
        detail: "Leve RG, CPF, Cartão SUS e caderneta.",
        url: "https://www.itaquaquecetuba.sp.gov.br/noticias/ver.php?id=5711",
        linkLabel: "Ver orientações"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Outubro Rosa",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Corujão da Saúde da Mulher até as 21h",
        summary: "Horário estendido no Centro de Saúde da Mulher Poaense com Papanicolau, mamografia e testes rápidos.",
        detail: "Atendimento noturno até o fim de outubro.",
        url: "https://poa.sp.gov.br/prefeitura-de-poa-anuncia-corujao-da-saude-da-mulher-com-atendimento-ate-as-21h-durante-todo-o-mes-de-outubro/",
        linkLabel: "Ver comunicado"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Vacinação",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Calendário vacinal municipal 2026/2027",
        summary: "Vacinas de rotina do PNI disponíveis para crianças, adolescentes, gestantes e idosos nas UBSs.",
        detail: "Inclui pólio, tríplice viral, hepatites, gripe, dengue e HPV.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/calendario-vacinal-",
        linkLabel: "Ver calendário"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Salas de vacinação abertas nas UBSs",
        summary: "Imunização de rotina e atualização de cadernetas em todas as regiões da cidade.",
        detail: "Segunda a sexta, das 8h às 16h, com Cartão SUS e RG.",
        url: "https://suzano.sp.gov.br/saude/programacao-outubro-rosa/",
        linkLabel: "Consultar programação"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação no CSIII e unidades ESF",
        summary: "Atendimento no CSIII (Jardim Takebe) e nas ESFs Jardim dos Eucaliptos, Cruz das Almas e Irohy.",
        detail: "Atenção: verifique avisos sobre a ESF Jardim Yoneda.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver notícias"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Zoonoses",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação antirrábica e combate à dengue",
        summary: "Imunização gratuita para cães e gatos na Clínica Veterinária Municipal e vigilância contra arboviroses.",
        detail: "Confira dias e agendamentos no portal da Saúde.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver na Secretaria"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Imunização",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação nas UBSs e Carretas da Mamografia",
        summary: "Doses de rotina aplicadas nas UBSs Centro e Nossa Sra. do Remédio. Consulte também o roteiro Mulheres de Peito.",
        detail: "UBS Centro: (11) 4696-1861 · Remédios: (11) 4696-5145.",
        url: "https://www.poupatempo.sp.gov.br/carta/B7ED6C20-6D1B-481B-8693-35AD62D16E42",
        linkLabel: "Consultar itinerário"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Atenção Básica",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Imunização de rotina nas UBSs",
        summary: "Salas de vacina abertas de segunda a sexta na UBS Lambari, UBS Jardim Dulce e CESAP Nogueira.",
        detail: "UBS Lambari: 7h às 17h · Tel.: (11) 4693-3448.",
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
        statusLabel: "Realizada · 24/10",
        title: "Mutirão de ginecologia e vacinação nas UBSs",
        summary: "Plantão realizado nas UBSs Jundiapeba, Ponte Grande, Alto Ipiranga e Vila Suíssa com Papanicolau sem agendamento.",
        detail: "Exames preventivos seguem disponíveis na rotina das UBSs.",
        url: "https://www.mogidascruzes.sp.gov.br/noticia/prefeitura-de-mogi-amplia-acoes-de-prevencao-e-cuidado-as-mulheres-durante-o-outubro-rosa",
        linkLabel: "Ver notícia oficial"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Realizada · 17/10",
        title: "Corre por Elas: corrida e caminhada",
        summary: "Mobilização gratuita na Av. Mário Covas reuniu moradores pela prevenção ao câncer de mama.",
        detail: "Exames preventivos continuam disponíveis nas USFs.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-esportes/",
        linkLabel: "Ver no portal"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Comunicado",
        status: "recente",
        statusLabel: "Aviso recente",
        title: "Manutenção na sala de vacina da ESF Yoneda",
        summary: "Suspensão temporária para manutenção e capacitação na sala de vacinação da ESF Jardim Yoneda.",
        detail: "Atendimento absorvido pelo CSIII no Jardim Takebe.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver comunicados"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Multivacinação",
        status: "recente",
        statusLabel: "Ação recente",
        title: "Dia D de multivacinação e resgate HPV",
        summary: "Mobilização recente da Vigilância Epidemiológica para jovens e servidores municipais.",
        detail: "Doses seguem disponíveis de segunda a sexta nas UBSs.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver histórico"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Comunicado",
        status: "recente",
        statusLabel: "Aviso recente",
        title: "Conferência presencial de cadernetas nas UBSs",
        summary: "Orientação pós-Dia D para moradores validarem o registro físico de vacinação diretamente nos postos.",
        detail: "Garante a baixa correta no sistema do Ministério da Saúde.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Ler orientação"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "VaciVida",
        status: "recente",
        statusLabel: "Serviço digital",
        title: "Carteira digital pelo Meu SUS Digital e VaciVida",
        summary: "Emissão online do certificado de vacinas aplicadas em campanhas anteriores no município.",
        detail: "Dúvidas presenciais nas UBSs Centro e Remédios.",
        url: "https://www.salesopolis.sp.gov.br/",
        linkLabel: "Acessar Prefeitura"
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
        if (!campaignGrid) {
            window.location.href = `campanhas.html?cidade=${encodeURIComponent(clickedCity)}`;
            return;
        }
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

function renderVaccineCampaigns() {
    const vaccineGrid = document.querySelector("#vaccine-grid");
    if (!vaccineGrid) return;

    const vaccineKeywords = ["vacina", "imuniza", "hpv", "vacivida", "antirrábica"];
    const vaccineItems = campaigns.filter((campaign) =>
        [campaign.category, campaign.title, campaign.summary, campaign.detail].some((text) =>
            vaccineKeywords.some((kw) => text.toLocaleLowerCase("pt-BR").includes(kw))
        )
    );

    const fragment = document.createDocumentFragment();
    vaccineItems.forEach((campaign) => {
        fragment.append(createCampaignCard(campaign));
    });
    vaccineGrid.replaceChildren(fragment);
}

function initializeCampaignFiltersFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const initialCity = params.get("cidade") ?? "todas";
    if (cityFilter && initialCity !== "todas") {
        const hasOption = Array.from(cityFilter.options).some((opt) => opt.value === initialCity);
        if (hasOption) {
            cityFilter.value = initialCity;
            renderCampaigns(initialCity, campaignSearch?.value ?? "", currentStatus);
            return;
        }
    }
    renderCampaigns();
}

initializeCampaignFiltersFromUrl();
renderVaccineCampaigns();
initializeTheme();
initializeDeveloperCards();
