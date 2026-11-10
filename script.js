const campaigns = [
    // =========================================================================
    // PRÓXIMAS CAMPANHAS E AÇÕES QUE VÃO CHEGAR (FIM DE NOVEMBRO / DEZEMBRO / VERÃO)
    // =========================================================================
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Dezembro Vermelho",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Dezembro Vermelho: prevenção ao HIV e ISTs",
        summary: "Mobilização nas UBSs, unidades UNICA e CTA com testagem rápida gratuita e sigilosa para HIV, sífilis e hepatites.",
        detail: "Programação prevista para todo o mês de dezembro.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Ver no site da Prefeitura"
    },
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Combate à Dengue",
        status: "proxima",
        statusLabel: "Vem aí · Pré-Verão",
        title: "Operação Verão contra o Aedes aegypti nos bairros",
        summary: "Mutirões da Vigilância Ambiental com vistorias domiciliares, eliminação de criadouros e orientação antes do período chuvoso.",
        detail: "Ações intensificadas entre novembro, dezembro e janeiro.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Acompanhar cronograma"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Dia D · Novembro Azul",
        status: "proxima",
        statusLabel: "Vem aí · Novembro",
        title: "Dia D de Saúde do Homem nas UBSs aos sábados",
        summary: "Plantão especial com coleta de PSA, testes rápidos, aferição de pressão/glicemia e atualização vacinal sem agendamento.",
        detail: "Consulte as unidades participantes no portal da Prefeitura.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Ver portal da Saúde"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Dezembro Vermelho",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Testagem rápida de ISTs e Operação Verão Sem Dengue",
        summary: "Ampliação de testes rápidos nas 24 UBSs/USFs e força-tarefa de agentes de endemias contra focos do mosquito da dengue.",
        detail: "Atendimento gratuito em toda a rede municipal em dezembro.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Acessar Secretaria"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Arboviroses",
        status: "proxima",
        statusLabel: "Vem aí · Pré-Verão",
        title: "Plano Verão 2026/2027 de combate à dengue",
        summary: "Mutirões nos bairros, bloqueio de criadouros pelo Controle de Zoonoses e orientação preventiva antes das chuvas de verão.",
        detail: "Denúncias de focos e orientações nas UBSs e Zoonoses.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Ver portal da Prefeitura"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Dezembro Vermelho",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Campanha Dezembro Vermelho nas UBSs e USFs",
        summary: "Intensificação de testes rápidos para HIV, sífilis e hepatites B e C, além de acolhimento e orientação preventiva na rede básica.",
        detail: "Leve documento com foto e Cartão SUS à sua unidade.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Consultar Prefeitura"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Dezembro Vermelho & Laranja",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Prevenção às ISTs e ao câncer de pele nas USFs",
        summary: "Ações educativas sobre proteção solar no início do verão e testagem rápida de HIV e sífilis nas Unidades de Saúde da Família.",
        detail: "Atendimento nas USFs Barreto, Mirante, Emília e Nova Arujá.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-saude/",
        linkLabel: "Ver notícias de Arujá"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Ação Comunitária",
        status: "proxima",
        statusLabel: "Vem aí · Nov/Dez",
        title: "Tenda da Saúde e multivacinação na Praça da Bíblia",
        summary: "Ação extramuros prevista com aferição de pressão arterial, teste de glicemia, orientação de saúde do homem e vacinação.",
        detail: "Acompanhe as datas confirmadas no site oficial de Poá.",
        url: "https://poa.sp.gov.br/",
        linkLabel: "Acessar Prefeitura de Poá"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Dezembro Vermelho",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Férias Sem Dengue e testagem rápida no CSII e UBSs",
        summary: "Mobilização preventiva contra arboviroses no período de férias escolares e campanha de prevenção ao HIV/ISTs em dezembro.",
        detail: "Informações na Vigilância Epidemiológica: (11) 4674-7800.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver avisos da Saúde"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Vacina em Movimento",
        status: "proxima",
        statusLabel: "Vem aí · Nov/Dez",
        title: "Novas etapas do Vacina em Movimento e Dezembro Vermelho",
        summary: "Atendimento itinerante nos bairros para atualização vacinal de fim de ano e testagem rápida preventiva nas unidades de saúde.",
        detail: "Informações da Secretaria de Saúde: (11) 4693-8040.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Guararema"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Combate à Dengue",
        status: "proxima",
        statusLabel: "Vem aí · Pré-Verão",
        title: "Mutirão Pré-Verão contra a dengue e Dezembro Vermelho",
        summary: "Vistorias de agentes de controle de vetores nos bairros e campanha de testagem rápida de ISTs nas UBSs em dezembro.",
        detail: "Confira o cronograma de bairros na Secretaria da Saúde.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Consultar Secretaria"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Dezembro Vermelho",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Prevenção ao HIV/ISTs e revisão vacinal de fim de ano",
        summary: "Testes rápidos gratuitos, orientação preventiva e atualização da carteira de vacinação antes das festas e férias de verão.",
        detail: "Atendimento programado no CSIII e unidades ESF.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver notícias"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Saúde Preventiva",
        status: "proxima",
        statusLabel: "Vem aí · Dezembro",
        title: "Operação Verão: prevenção à dengue e saúde nos bairros",
        summary: "Orientações sobre arboviroses e febre maculosa, além de testagem rápida do Dezembro Vermelho nas UBSs Centro e Remédios.",
        detail: "UBS Centro: (11) 4696-1861 · Remédios: (11) 4696-5145.",
        url: "https://www.salesopolis.sp.gov.br/",
        linkLabel: "Acessar Prefeitura"
    },

    // =========================================================================
    // CAMPANHAS EM ANDAMENTO / SERVIÇOS VIGENTES ATUALMENTE (NOVEMBRO 2026)
    // =========================================================================
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Novembro Azul: saúde integral do homem nas UBSs e UNICA",
        summary: "Testes rápidos, aferição de pressão e glicemia, solicitação de PSA e encaminhamento urológico em toda a rede municipal.",
        detail: "Agendamentos pelo SIS 160 ou diretamente na UBS mais próxima.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Ver no site da Prefeitura"
    },
    {
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação de rotina e atualização de cadernetas nas UBSs",
        summary: "Imunizantes do Calendário Nacional do SUS disponíveis de segunda a sexta-feira para crianças, adolescentes, adultos e idosos.",
        detail: "Leve documento com foto, CPF, Cartão SUS e caderneta.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Consultar unidades"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Coleta de PSA e prevenção ao câncer de próstata nas 24 UBSs",
        summary: "Mobilização durante todo o mês de novembro com exames preventivos masculinos, controle de hipertensão, diabetes e testes rápidos.",
        detail: "Procure a UBS ou USF do seu bairro com Cartão SUS e RG.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Ver portal da Saúde"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Salas de Vacina",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Salas de vacinação abertas nas UBSs e USFs",
        summary: "Imunização de rotina e atualização de cadernetas em todas as regiões da cidade, incluindo gripe, pólio, tríplice viral e HPV.",
        detail: "Segunda a sexta, das 8h às 16h, com Cartão SUS e RG.",
        url: "https://suzano.sp.gov.br/saude/",
        linkLabel: "Consultar programação"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Vacinação HPV",
        status: "vigente",
        statusLabel: "Em andamento · Até 31/12",
        title: "Resgate vacinal contra HPV (15 a 19 anos)",
        summary: "Jovens de 15 a 19 anos ainda não vacinados podem se imunizar nas UBSs até 31/12/2026. Rotina fixa mantida para 9 a 14 anos.",
        detail: "Leve RG, CPF, Cartão SUS e caderneta.",
        url: "https://www.itaquaquecetuba.sp.gov.br/noticias/ver.php?id=5711",
        linkLabel: "Ver orientações"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Saúde do Homem: check-up e prevenção nas UBSs",
        summary: "Atendimento preventivo masculino nas UBSs e USFs com solicitação de exames laboratoriais, testes rápidos e aferição de pressão.",
        detail: "Atendimento de segunda a sexta-feira em toda a rede básica.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Ver portal da Prefeitura"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Mutirões de saúde masculina e vacinação nas USFs",
        summary: "Exames laboratoriais, testes rápidos, avaliação preventiva e vacinação nas unidades do Barreto, Mirante, Emília e Nova Arujá.",
        detail: "Atendimento descentralizado nos bairros durante novembro.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-saude/",
        linkLabel: "Ver notícias de Arujá"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Saúde do homem e multivacinação nas UBSs de Poá",
        summary: "Exames preventivos masculinos, aferição de pressão/glicemia e vacinação nas UBSs Calmon Viana, Nova Poá, Vila Varela e Jardim América.",
        detail: "Atendimento de segunda a sexta nas unidades básicas.",
        url: "https://poa.sp.gov.br/",
        linkLabel: "Acessar Prefeitura de Poá"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Novembro Azul",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Prevenção ao câncer de próstata e vacinação nas UBSs",
        summary: "Triagem masculina, solicitação de exames e atualização vacinal nas unidades CSII, Santo Antônio, Margarida e CDHU.",
        detail: "Vigilância Epidemiológica: (11) 4674-7800.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver avisos da Saúde"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Zoonoses",
        status: "vigente",
        statusLabel: "Em andamento",
        title: "Vacinação antirrábica e combate à dengue",
        summary: "Imunização gratuita para cães e gatos na Clínica Veterinária Municipal e vigilância permanente contra arboviroses.",
        detail: "Confira dias e agendamentos no portal da Saúde.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver na Secretaria"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Novembro Azul & Vacina",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Novembro Azul e imunização de rotina nas UBSs",
        summary: "Exames preventivos masculinos e salas de vacina abertas de segunda a sexta na UBS Lambari, UBS Jardim Dulce e CESAP Nogueira.",
        detail: "UBS Lambari: 7h às 17h · Tel.: (11) 4693-3448.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Saúde"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Novembro Azul & PNI",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Saúde preventiva do homem e Calendário Vacinal 2026/2027",
        summary: "Acolhimento masculino do Novembro Azul e vacinas de rotina do PNI disponíveis para todas as faixas etárias nas UBSs.",
        detail: "Inclui pólio, tríplice viral, hepatites, gripe, dengue e HPV.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/calendario-vacinal-",
        linkLabel: "Ver calendário"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Novembro Azul & Vacina",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Saúde do homem e vacinação no CSIII e unidades ESF",
        summary: "Atendimento preventivo masculino e imunização no CSIII (Jardim Takebe) e nas ESFs Jardim dos Eucaliptos, Cruz das Almas e Irohy.",
        detail: "Procure sua unidade de referência com Cartão SUS e RG.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver notícias"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "Novembro Azul & Vacina",
        status: "vigente",
        statusLabel: "Em andamento · Novembro",
        title: "Novembro Azul e vacinação nas UBSs Centro e Remédios",
        summary: "Consultas e exames preventivos para homens e doses de rotina nas UBSs. Consulte também o roteiro estadual das Carretas da Saúde.",
        detail: "UBS Centro: (11) 4696-1861 · Remédios: (11) 4696-5145.",
        url: "https://www.poupatempo.sp.gov.br/carta/B7ED6C20-6D1B-481B-8693-35AD62D16E42",
        linkLabel: "Consultar itinerário"
    },

    // =========================================================================
    // NOTÍCIAS E AÇÕES REALIZADAS / ANTERIORES (SETEMBRO E OUTUBRO 2026)
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
        city: "mogi",
        cityName: "Mogi das Cruzes",
        category: "Setembro Amarelo",
        status: "recente",
        statusLabel: "Realizada · Setembro",
        title: "Rodas de conversa e acolhimento em Saúde Mental",
        summary: "Mobilização realizada nas UBSs e unidades CAPS com orientação psicológica e ações de valorização da vida.",
        detail: "Acolhimento em saúde mental segue permanente na rede municipal.",
        url: "https://www.mogidascruzes.sp.gov.br/servicos/saude",
        linkLabel: "Ver rede de saúde"
    },
    {
        city: "suzano",
        cityName: "Suzano",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Concluída · Outubro",
        title: "Programação Outubro Rosa nas 24 UBSs e USFs",
        summary: "Mutirões de coleta de Papanicolau, encaminhamento de mamografia, testes rápidos e palestras realizados durante outubro.",
        detail: "Atendimento ginecológico continua na rotina das unidades.",
        url: "https://suzano.sp.gov.br/saude/programacao-outubro-rosa/",
        linkLabel: "Ver balanço e rotina"
    },
    {
        city: "itaqua",
        cityName: "Itaquaquecetuba",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Concluída · Outubro",
        title: "Mutirões de saúde da mulher e exames preventivos",
        summary: "Ações intensificadas em outubro nas UBSs com coleta de citologia oncótica, solicitação de mamografia e atualização vacinal.",
        detail: "Exames de rotina podem ser agendados durante todo o ano.",
        url: "https://www.itaquaquecetuba.sp.gov.br/",
        linkLabel: "Ver portal da Prefeitura"
    },
    {
        city: "aruja",
        cityName: "Arujá",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Realizada · 17/10",
        title: "Corre por Elas: corrida e caminhada feminina",
        summary: "Mobilização gratuita na Av. Mário Covas reuniu moradores pela conscientização e diagnóstico precoce do câncer de mama.",
        detail: "Exames preventivos continuam disponíveis nas USFs.",
        url: "https://portaldenoticias.prefeituradearuja.sp.gov.br/noticias/category/secretaria-municipal-de-esportes/",
        linkLabel: "Ver no portal"
    },
    {
        city: "poa",
        cityName: "Poá",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Concluída · 31/10",
        title: "Corujão da Saúde da Mulher até as 21h em outubro",
        summary: "Horário estendido realizado durante outubro no Centro de Saúde da Mulher Poaense com Papanicolau, mamografia e testes rápidos.",
        detail: "Atendimento diurno segue normalmente na rede municipal.",
        url: "https://poa.sp.gov.br/prefeitura-de-poa-anuncia-corujao-da-saude-da-mulher-com-atendimento-ate-as-21h-durante-todo-o-mes-de-outubro/",
        linkLabel: "Ver comunicado"
    },
    {
        city: "ferraz",
        cityName: "Ferraz de Vasconcelos",
        category: "Multivacinação",
        status: "recente",
        statusLabel: "Realizada · Outubro",
        title: "Dia D de multivacinação e resgate contra HPV",
        summary: "Mobilização da Vigilância Epidemiológica para atualização da carteira de crianças, adolescentes e servidores municipais.",
        detail: "Doses seguem disponíveis de segunda a sexta nas UBSs.",
        url: "https://ferrazdevasconcelos.sp.gov.br/web/categoria/saude/",
        linkLabel: "Ver histórico"
    },
    {
        city: "guararema",
        cityName: "Guararema",
        category: "Outubro Rosa",
        status: "recente",
        statusLabel: "Concluída · Outubro",
        title: "Campanha Outubro Rosa nas UBSs e CESAP Nogueira",
        summary: "Atendimentos especiais voltados à saúde da mulher, prevenção ao câncer de mama e colo do útero realizados em outubro.",
        detail: "Agendamentos ginecológicos seguem abertos nas UBSs.",
        url: "https://guararema.sp.gov.br/noticias/saude",
        linkLabel: "Ver notícias de Saúde"
    },
    {
        city: "santa-isabel",
        cityName: "Santa Isabel",
        category: "Comunicado",
        status: "recente",
        statusLabel: "Realizada · Outubro",
        title: "Outubro Rosa e conferência pós-Dia D de cadernetas",
        summary: "Mutirões femininos de outubro e orientação para moradores validarem o registro físico de vacinação diretamente nos postos.",
        detail: "Garante a baixa correta no sistema do Ministério da Saúde.",
        url: "https://santaisabel.sp.gov.br/secretarias/secretaria-da-saude/",
        linkLabel: "Ler orientação"
    },
    {
        city: "biritiba",
        cityName: "Biritiba Mirim",
        category: "Comunicado",
        status: "recente",
        statusLabel: "Aviso de outubro",
        title: "Manutenção na sala de vacina da ESF Yoneda e Outubro Rosa",
        summary: "Adequação técnica realizada na sala de vacinação da ESF Jardim Yoneda e ações preventivas do Outubro Rosa nas unidades.",
        detail: "Atendimento vacinal absorvido pelo CSIII no Jardim Takebe.",
        url: "https://www.biritibamirim.sp.gov.br/site/news.php",
        linkLabel: "Ver comunicados"
    },
    {
        city: "salesopolis",
        cityName: "Salesópolis",
        category: "VaciVida & Outubro Rosa",
        status: "recente",
        statusLabel: "Realizada · Outubro",
        title: "Ações do Outubro Rosa e carteira digital VaciVida",
        summary: "Atendimentos preventivos da mulher em outubro e emissão online de certificados de vacinas aplicadas em campanhas anteriores.",
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

const statusLabelsBase = {
    todas: "Todas",
    proxima: "Próximas · Nov/Dez",
    vigente: "Em andamento",
    recente: "Realizadas / Anteriores"
};

function syncStatusPills(selectedStatus, itemsForCount = campaigns) {
    statusPills.forEach((pill) => {
        const pillStatus = pill.dataset.status ?? "todas";
        const isSelected = pillStatus === selectedStatus;
        pill.classList.toggle("is-active", isSelected);
        pill.setAttribute("aria-pressed", String(isSelected));

        const baseLabel = statusLabelsBase[pillStatus];
        if (baseLabel) {
            const countForStatus = pillStatus === "todas"
                ? itemsForCount.length
                : itemsForCount.filter((item) => item.status === pillStatus).length;
            pill.textContent = `${baseLabel} (${countForStatus})`;
        }
    });
}

function renderCampaigns(city = "todas", searchTerm = "", status = currentStatus) {
    if (!campaignGrid || !resultsCount) return;

    syncRegionTags(city);

    const byCity = city === "todas"
        ? campaigns
        : campaigns.filter((campaign) => campaign.city === city);

    const normalizedSearch = searchTerm.trim().toLocaleLowerCase("pt-BR");
    const byCityAndSearch = normalizedSearch
        ? byCity.filter((campaign) => [
            campaign.cityName,
            campaign.category,
            campaign.statusLabel,
            campaign.title,
            campaign.summary,
            campaign.detail
        ].some((value) => value.toLocaleLowerCase("pt-BR").includes(normalizedSearch)))
        : byCity;

    syncStatusPills(status, byCityAndSearch);

    const visibleCampaigns = status === "todas"
        ? byCityAndSearch
        : byCityAndSearch.filter((campaign) => campaign.status === status);

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
    const devCards = document.querySelectorAll(".dev-card, .coordinator-card");
    const extensions = ["jpg", "jpeg", "png", "webp"];

    devCards.forEach((card) => {
        const avatar = card.querySelector(".dev-avatar");
        const img = avatar?.querySelector("img");
        const fallback = avatar?.querySelector(".dev-avatar__fallback");
        const nameHeading = card.querySelector(".dev-name");

        if (nameHeading && fallback) {
            const nameText = nameHeading.textContent?.trim() ?? "";
            if (nameText && !nameText.toLocaleLowerCase("pt-BR").startsWith("nome do integrante")) {
                const parts = nameText
                    .split(/\s+/)
                    .filter((word) => word && !/^(profa?|dra?|me|ma)\.?$/i.test(word));
                if (parts.length > 0) {
                    const initials = parts.length > 1
                        ? `${parts[0][0]}${parts[parts.length - 1][0]}`
                        : parts[0].slice(0, 2);
                    fallback.textContent = initials.toUpperCase();
                }
            }
        }

        if (!img || !avatar) return;

        const originalSrc = img.getAttribute("src") ?? "";
        const fallbackSrc = img.dataset.fallbackSrc ?? "";

        const candidates = [];
        const addCandidates = (path) => {
            if (!path) return;
            if (!candidates.includes(path)) {
                candidates.push(path);
            }
            const base = path.replace(/\.(jpe?g|png|webp)$/i, "");
            extensions.forEach((ext) => {
                const candidate = `${base}.${ext}`;
                if (!candidates.includes(candidate)) {
                    candidates.push(candidate);
                }
            });
        };

        addCandidates(originalSrc);
        addCandidates(fallbackSrc);

        let candidateIndex = candidates.indexOf(originalSrc);
        if (candidateIndex === -1) candidateIndex = 0;

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
            candidateIndex += 1;
            if (candidateIndex < candidates.length) {
                img.src = candidates[candidateIndex];
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
    const initialStatus = params.get("status") ?? "todas";

    if (["todas", "proxima", "vigente", "recente"].includes(initialStatus)) {
        currentStatus = initialStatus;
    }

    if (cityFilter && initialCity !== "todas") {
        const hasOption = Array.from(cityFilter.options).some((opt) => opt.value === initialCity);
        if (hasOption) {
            cityFilter.value = initialCity;
            renderCampaigns(initialCity, campaignSearch?.value ?? "", currentStatus);
            return;
        }
    }
    renderCampaigns("todas", campaignSearch?.value ?? "", currentStatus);
}

initializeCampaignFiltersFromUrl();
renderVaccineCampaigns();
initializeTheme();
initializeDeveloperCards();
