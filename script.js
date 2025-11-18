const actionsData = [
    {
        title: "Mutirão de Regularização de Documentos",
        description: "Atendimento gratuito para emissão de RG, CPF e carteira de trabalho para famílias em vulnerabilidade social.",
        category: "social",
        bairro: "Cidade Tiradentes",
        date: "13 de junho",
        icon: "🧾"
    },
    {
        title: "Vacina Móvel nos Bairros",
        description: "Equipe volante aplicando vacinas contra influenza e COVID-19 em praças e centros comunitários.",
        category: "saude",
        bairro: "M'Boi Mirim",
        date: "15 de junho",
        icon: "💉"
    },
    {
        title: "Oficina de Empreendedorismo Juvenil",
        description: "Curso rápido para jovens em busca de capacitação em economia criativa e inovação.",
        category: "social",
        bairro: "Brasilândia",
        date: "20 de junho",
        icon: "💼"
    },
    {
        title: "Força-Tarefa contra o Frio",
        description: "Distribuição de cobertores e acolhimento noturno para pessoas em situação de rua.",
        category: "solidariedade",
        bairro: "Sé",
        date: "Diariamente",
        icon: "🧣"
    },
    {
        title: "Dia D da Vacinação Infantil",
        description: "Todas as AMAs/UBSs abertas com atrações lúdicas para as crianças atualizarem o calendário vacinal.",
        category: "saude",
        bairro: "Tatuapé",
        date: "22 de junho",
        icon: "🎉"
    },
    {
        title: "Campanha Bairro Solidário",
        description: "Arrecadação de alimentos e itens de higiene para famílias atingidas pelas chuvas.",
        category: "solidariedade",
        bairro: "Itaquera",
        date: "Até 30 de junho",
        icon: "🤝"
    }
];

const agendaData = [
    {
        title: "Feira de Serviços Cidadania já",
        description: "Carreta da cidadania com atendimento jurídico, cadastro em programas sociais e recreação infantil.",
        bairro: "Capela do Socorro",
        date: "18 de junho"
    },
    {
        title: "Encontro de Lideranças Comunitárias",
        description: "Debate aberto com secretarias municipais sobre demandas emergenciais dos bairros.",
        bairro: "Freguesia do Ó",
        date: "24 de junho"
    },
    {
        title: "Mutirão de Castração Animal",
        description: "Atendimento veterinário gratuito para cães e gatos com agendamento prévio.",
        bairro: "São Mateus",
        date: "27 de junho"
    }
];

const cardsContainer = document.querySelector("#cards-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const timeline = document.querySelector("#timeline");
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterFeedback = document.querySelector("#newsletter-feedback");
const subscribeTrigger = document.querySelector("#subscribe-trigger");
const modal = document.querySelector("#subscribe-modal");
const modalClose = modal?.querySelector(".modal__close");
const modalForm = document.querySelector("#modal-form");
const modalFeedback = document.querySelector("#modal-feedback");

function renderCards(category = "todas") {
    if (!cardsContainer) return;
    const filtered = category === "todas" ? actionsData : actionsData.filter((item) => item.category === category);

    const fragment = document.createDocumentFragment();

    filtered.forEach((item) => {
        const article = document.createElement("article");
        article.className = "card";
        article.setAttribute("data-category", item.category);

        article.innerHTML = `
            <span class="card__badge">${item.icon} ${formatCategory(item.category)}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="card__meta">
                <span>📍 ${item.bairro}</span>
                <span>🗓️ ${item.date}</span>
            </div>
        `;
        fragment.appendChild(article);
    });

    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(fragment);
}

function renderTimeline() {
    if (!timeline) return;
    const fragment = document.createDocumentFragment();

    agendaData.forEach((item) => {
        const section = document.createElement("section");
        section.className = "timeline__item";
        section.innerHTML = `
            <header>
                <h3>${item.title}</h3>
                <time datetime="2025-06-01">${item.date}</time>
            </header>
            <p>${item.description}</p>
            <span>📍 ${item.bairro}</span>
        `;
        fragment.appendChild(section);
    });

    timeline.innerHTML = "";
    timeline.appendChild(fragment);
}

function formatCategory(category) {
    const map = {
        social: "Projeto social",
        saude: "Saúde",
        solidariedade: "Solidariedade"
    };
    return map[category] ?? "Ação";
}

function handleFilterClick(event) {
    const button = event.currentTarget;
    const category = button.dataset.category;

    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    renderCards(category);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilterClick);
});

renderCards();
renderTimeline();

newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newsletterForm);
    const email = formData.get("email")?.toString().trim();

    if (!email) {
        newsletterFeedback.textContent = "Por favor, informe um e-mail válido.";
        newsletterFeedback.style.color = "#b91c1c";
        return;
    }

    newsletterFeedback.textContent = "Obrigado! Você começará a receber as novidades.";
    newsletterFeedback.style.color = "#047857";
    newsletterForm.reset();
});

function toggleModal(show) {
    if (!modal) return;
    modal.setAttribute("aria-hidden", String(!show));
    modal.classList.toggle("is-visible", show);
    if (show) {
        modal.querySelector("input")?.focus();
    }
}

subscribeTrigger?.addEventListener("click", () => toggleModal(true));
modalClose?.addEventListener("click", () => toggleModal(false));

modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
        toggleModal(false);
    }
});

modalForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(modalForm);
    const bairro = formData.get("bairro")?.toString().trim();
    const temas = formData.getAll("tema");

    if (!bairro || temas.length === 0) {
        modalFeedback.textContent = "Selecione pelo menos um tema e informe seu bairro.";
        modalFeedback.style.color = "#b91c1c";
        return;
    }

    modalFeedback.textContent = "Preferências salvas! Em breve enviaremos novidades.";
    modalFeedback.style.color = "#047857";
    setTimeout(() => toggleModal(false), 1200);
    modalForm.reset();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("is-visible")) {
        toggleModal(false);
    }
});
