(() => {
  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";

  const dict = {
    en: {
      "nav.about": "about",
      "nav.projects": "projects",
      "nav.imobidesk": "imobidesk",
      "nav.ondine": "ondine",
      "nav.toggleTheme": "Toggle theme",
      "nav.toggleLang": "Language",
      "nav.menu": "Menu",

      "home.role": "AI Platform Engineer at Certta · Python Specialist · AWS · Backend Engineering · DevOps · GenAI Infrastructure",
      "home.location": "Recife, PE — Brazil",
      "home.welcome": "Welcome to my portfolio.",
      "home.p1":
        "I am an AI Platform Engineer and Computer Engineering student at CIn–UFPE, focused on backend systems, cloud infrastructure, DevOps, and GenAI platforms.",
      "home.p2":
        'I currently work at <a href="https://www.linkedin.com/company/certtahub" target="_blank" rel="noopener noreferrer">Certta</a> as AI Platform Engineer, building scalable AI platforms that span backend engineering, machine learning, computer vision, and cloud infrastructure. Day to day I design API Gateways, provision infrastructure with AWS CDK, and ship LLM and vision pipelines on SageMaker and Amazon Bedrock.',
      "home.p3":
        'Before Certta I spent over a year at <a href="https://www.neurotech.com.br/" target="_blank" rel="noopener noreferrer">Neurotech</a> (a B3 company), where I was promoted to Data Science II. There I worked on LLM applications, RAG with LangChain, and a scalable API Gateway used by credit-policy developers.',
      "home.p4":
        "Outside work I build products for real-estate workflows — from WhatsApp AI assistants to proposal generators and brokerage websites. Always happy to exchange ideas, collaborate, or help on a project.",
      "home.contactEmail": "Reach me at",
      "home.contactAlso": "or on",
      "home.updates": "Updates",
      "home.u1.date": "Jul 2026",
      "home.u1.text":
        "Building ImobiDesk and the Ondine Bezerra Imóveis platform (site + proposal engine).",
      "home.u2.date": "Oct 2025",
      "home.u2.text": "Joined Certta as AI Platform Engineer.",
      "home.u3.date": "Oct 2025",
      "home.u3.text": "Closed a 1 year 4 month chapter at Neurotech.",
      "home.u4.date": "Apr 2025",
      "home.u4.text": "Promoted to Data Science II at Neurotech.",
      "home.u5.date": "Dec 2024",
      "home.u5.text": "Deployed Ivy — a WhatsApp real-estate AI assistant — on AWS.",
      "home.u6.date": "Mar 2025",
      "home.u6.text": "Launched this personal site.",
      "home.contactNote": "Best way to reach me is LinkedIn.",

      "projects.title": "Projects",
      "projects.desc": "Selected work I care about.",
      "projects.featured": "Featured",
      "projects.ivy.title": "Ivy-Chat",
      "projects.ivy.desc": "Real-estate AI agent powered by LLMs",
      "projects.flappy.title": "Reinforcement Learning",
      "projects.flappy.desc": "Perceptron learning to play Flappy Bird",
      "projects.imobidesk.title": "ImobiDesk",
      "projects.imobidesk.desc": "Purchase & sale proposal generator",
      "projects.ondine.title": "Imobiliária Ondine",
      "projects.ondine.desc": "Public site + proposals platform",

      "ivy.title": "IvyChat — AI Agent",
      "ivy.desc": "Real-estate assistant powered by LLMs",
      "ivy.p1":
        "I built Ivy for my mother, a real-estate broker: a WhatsApp-integrated AI assistant hosted on AWS microservices. It answers questions about Brazil’s Tenant Law (Lei do Inquilinato), mortgage options (Caixa, Banco do Brasil, Santander), and manages leads — when a client wants a visit, Ivy notifies the right brokers and triages the request.",
      "ivy.stack": "Built in Python with Evolution API 2.0 on EC2. Stack highlights:",
      "ivy.deploy": "AWS deployment",
      "ivy.tech": "Technologies",
      "ivy.features": "Features",
      "ivy.f1": "Smart assistant for property and financing questions",
      "ivy.f2": "Bank APIs for credit conditions",
      "ivy.f3": "Lead routing to the right brokers",
      "ivy.f4": "Next: a contract agent to draft real-estate documents",
      "ivy.cta": "Message Ivy on WhatsApp to try it.",

      "flappy.title": "Flappy Bird with a Perceptron",
      "flappy.desc": "Reinforcement learning with a hand-rolled multilayer perceptron",
      "flappy.p1":
        "I recreated Flappy Bird and wrote my own perceptron — no PyTorch or TensorFlow — so each bird has its own network and learns to fly. The repo has multiple branches; take a look.",
      "flappy.repo": "Repository",
      "flappy.heading": "Flappy Bird with AI",
      "flappy.p2":
        "I wanted to implement reinforcement learning from scratch. Each bird carries a network and improves through real-time training.",
      "flappy.h1": "Multilayer perceptron with 3 input sensors, 5 hidden neurons, 1 output",
      "flappy.h2": "Custom learning algorithm without deep-learning frameworks",
      "flappy.h3": "Real-time training where the best birds keep evolving",
      "flappy.caption":
        "Training birds with reinforcement learning using a 3-5-1 perceptron per bird.",
      "flappy.cta": "View the code on GitHub",

      "imobidesk.title": "ImobiDesk",
      "imobidesk.desc": "Internal purchase & sale proposal generator for Ondine Bezerra Imóveis",
      "imobidesk.p1":
        "ImobiDesk is an internal tool that turns property listings into polished purchase and sale proposals in minutes. Brokers pick a template, select a listing, fill buyer/seller and commercial terms, preview the document, and export a versioned PDF.",
      "imobidesk.p2":
        "AI assists where it helps: Grok extracts party data from images or PDFs, and a Studio flow lets admins iterate on LaTeX templates with live PDF preview.",
      "imobidesk.cap1": "Proposal history with status, values, and quick open.",
      "imobidesk.cap2": "Local property catalog synced from the brokerage site.",
      "imobidesk.stack": "Stack",
      "imobidesk.features": "Highlights",
      "imobidesk.f1": "Guided proposal flow with drafts, preview, and immutable PDF versions",
      "imobidesk.f2": "Property catalog sync from the public brokerage site",
      "imobidesk.f3": "LaTeX (XeLaTeX) templates with Jinja placeholders and Grok Studio",
      "imobidesk.f4": "Document AI extraction for buyer, seller, and commercial conditions",
      "imobidesk.f5": "Auth with Argon2id, HttpOnly sessions, and CSRF on mutations",
      "imobidesk.s1": "Vue 3 + Vite + Pinia",
      "imobidesk.s2": "FastAPI + SQLAlchemy + Alembic + PostgreSQL",
      "imobidesk.s3": "Docker Compose",
      "imobidesk.s4": "LaTeX / XeLaTeX PDF generation",
      "imobidesk.s5": "xAI Grok for extraction & template studio",

      "ondine.title": "Imobiliária Ondine",
      "ondine.desc": "Public website and proposals platform for Ondine Bezerra Imóveis",
      "ondine.p1":
        "A monorepo that rebuilds the brokerage’s public presence and pairs it with an admin panel and API. The public site covers search, listing detail, favorites, compare, contact leads, and institutional pages — rebuilt from a clean-room inventory of the live catalog.",
      "ondine.p2":
        "Together with ImobiDesk, it forms an end-to-end real-estate stack: catalog on the web, operations and proposal generation inside the desk.",
      "ondine.stack": "Stack",
      "ondine.features": "Highlights",
      "ondine.f1": "Nuxt 3 public site with search, listing pages, favorites, and compare",
      "ondine.f2": "Vue 3 admin for inventory and operations",
      "ondine.f3": "FastAPI + PostgreSQL public and auth APIs",
      "ondine.f4": "Full catalog import (listings + media) without hotlinking",
      "ondine.f5": "Docker Compose for the whole platform",
      "ondine.s1": "Nuxt 3 (website)",
      "ondine.s2": "Vue 3 (admin)",
      "ondine.s3": "FastAPI + PostgreSQL",
      "ondine.s4": "Docker Compose",
      "ondine.live": "Reference site",

      "footer.copy": "© Copyright 2026 Antônio Lucena.",
      "footer.powered": "Built with static HTML. Hosted on",
    },
    pt: {
      "nav.about": "sobre",
      "nav.projects": "projetos",
      "nav.imobidesk": "imobidesk",
      "nav.ondine": "ondine",
      "nav.toggleTheme": "Alternar tema",
      "nav.toggleLang": "Idioma",
      "nav.menu": "Menu",

      "home.role": "AI Platform Engineer at Certta · Python Specialist · AWS · Backend Engineering · DevOps · GenAI Infrastructure",
      "home.location": "Recife, PE — Brasil",
      "home.welcome": "Bem-vindo ao meu portfólio.",
      "home.p1":
        "Sou AI Platform Engineer e estudante de Engenharia da Computação no CIn–UFPE, com foco em backend, infraestrutura cloud, DevOps e plataformas GenAI.",
      "home.p2":
        'Atualmente trabalho na <a href="https://www.linkedin.com/company/certtahub" target="_blank" rel="noopener noreferrer">Certta</a> como AI Platform Engineer, construindo plataformas de IA escaláveis que envolvem backend, machine learning, visão computacional e infraestrutura em nuvem. No dia a dia, desenho API Gateways, provisiono infraestrutura com AWS CDK e entrego pipelines de LLM e visão no SageMaker e Amazon Bedrock.',
      "home.p3":
        'Antes da Certta, passei mais de um ano na <a href="https://www.neurotech.com.br/" target="_blank" rel="noopener noreferrer">Neurotech</a> (empresa B3), onde fui promovido a Data Science II. Lá atuei em aplicações com LLMs, RAG com LangChain e um API Gateway escalável usado por desenvolvedores de políticas de crédito.',
      "home.p4":
        "Fora do trabalho, construo produtos para fluxos imobiliários — de assistentes de IA no WhatsApp a geradores de propostas e sites de imobiliária. Sempre aberto a trocar ideias, colaborar ou ajudar em um projeto.",
      "home.contactEmail": "Fale comigo em",
      "home.contactAlso": "ou no",
      "home.updates": "Atualizações",
      "home.u1.date": "Jul 2026",
      "home.u1.text":
        "Construindo o ImobiDesk e a plataforma da Ondine Bezerra Imóveis (site + motor de propostas).",
      "home.u2.date": "Out 2025",
      "home.u2.text": "Entrei na Certta como AI Platform Engineer.",
      "home.u3.date": "Out 2025",
      "home.u3.text": "Encerrei um ciclo de 1 ano e 4 meses na Neurotech.",
      "home.u4.date": "Abr 2025",
      "home.u4.text": "Promovido a Data Science II na Neurotech.",
      "home.u5.date": "Dez 2024",
      "home.u5.text": "Deploy da Ivy — assistente imobiliária no WhatsApp — na AWS.",
      "home.u6.date": "Mar 2025",
      "home.u6.text": "Lançamento deste site pessoal.",
      "home.contactNote": "A melhor forma de contato é pelo LinkedIn.",

      "projects.title": "Projetos",
      "projects.desc": "Trabalhos selecionados que me importam.",
      "projects.featured": "Destaques",
      "projects.ivy.title": "Ivy-Chat",
      "projects.ivy.desc": "Agente imobiliário com LLMs",
      "projects.flappy.title": "Aprendizado por Reforço",
      "projects.flappy.desc": "Perceptron aprendendo a jogar Flappy Bird",
      "projects.imobidesk.title": "ImobiDesk",
      "projects.imobidesk.desc": "Gerador de propostas de compra e venda",
      "projects.ondine.title": "Imobiliária Ondine",
      "projects.ondine.desc": "Site público + plataforma de propostas",

      "ivy.title": "IvyChat — Agente de IA",
      "ivy.desc": "Assistente imobiliária com LLMs",
      "ivy.p1":
        "Desenvolvi a Ivy para a minha mãe, corretora imobiliária: uma assistente virtual integrada ao WhatsApp e hospedada em microserviços na AWS. Ela responde dúvidas sobre a Lei do Inquilinato, financiamentos (Caixa, Banco do Brasil e Santander) e gerencia leads — quando um cliente quer agendar visita, a Ivy avisa os corretores e faz a triagem.",
      "ivy.stack": "Desenvolvido em Python com Evolution API 2.0 em EC2. Destaques da stack:",
      "ivy.deploy": "Deploy na AWS",
      "ivy.tech": "Tecnologias",
      "ivy.features": "Funcionalidades",
      "ivy.f1": "Assistente inteligente para imóveis e financiamentos",
      "ivy.f2": "APIs bancárias para condições de crédito",
      "ivy.f3": "Roteamento de leads aos corretores certos",
      "ivy.f4": "Próximo: agente de contratos para documentos imobiliários",
      "ivy.cta": "Chame a Ivy no WhatsApp para testar.",

      "flappy.title": "Flappy Bird com Perceptron",
      "flappy.desc": "Aprendizado por reforço com uma multilayer perceptron feita à mão",
      "flappy.p1":
        "Recriei o Flappy Bird e escrevi a minha própria perceptron — sem PyTorch nem TensorFlow — para que cada pássaro tenha a própria rede e aprenda a voar. O repositório tem várias branches; vale explorar.",
      "flappy.repo": "Repositório",
      "flappy.heading": "Flappy Bird com IA",
      "flappy.p2":
        "Queria implementar aprendizado por reforço do zero. Cada pássaro carrega uma rede e melhora com treinamento em tempo real.",
      "flappy.h1": "Multilayer perceptron com 3 sensores de entrada, 5 neurônios ocultos e 1 de saída",
      "flappy.h2": "Algoritmo de aprendizagem próprio, sem frameworks de deep learning",
      "flappy.h3": "Treinamento em tempo real em que os melhores pássaros evoluem",
      "flappy.caption":
        "Treinamento dos pássaros com reinforcement learning usando uma perceptron 3-5-1 por pássaro.",
      "flappy.cta": "Ver o código no GitHub",

      "imobidesk.title": "ImobiDesk",
      "imobidesk.desc": "Gerador interno de propostas de compra e venda para a Ondine Bezerra Imóveis",
      "imobidesk.p1":
        "O ImobiDesk transforma anúncios em propostas de compra e venda polidas em minutos. O corretor escolhe um template, seleciona o imóvel, preenche partes e condições comerciais, pré-visualiza e exporta um PDF versionado.",
      "imobidesk.p2":
        "A IA entra onde ajuda: o Grok extrai dados de imagens ou PDFs, e o Studio permite iterar templates LaTeX com prévia PDF ao vivo.",
      "imobidesk.cap1": "Histórico de propostas com status, valores e acesso rápido.",
      "imobidesk.cap2": "Catálogo local de imóveis sincronizado com o site da imobiliária.",
      "imobidesk.stack": "Stack",
      "imobidesk.features": "Destaques",
      "imobidesk.f1": "Fluxo guiado com rascunhos, prévia e versões imutáveis em PDF",
      "imobidesk.f2": "Sincronização do catálogo a partir do site público",
      "imobidesk.f3": "Templates LaTeX (XeLaTeX) com placeholders Jinja e Studio Grok",
      "imobidesk.f4": "Extração com IA para comprador, vendedor e condições comerciais",
      "imobidesk.f5": "Auth com Argon2id, sessão HttpOnly e CSRF em mutações",
      "imobidesk.s1": "Vue 3 + Vite + Pinia",
      "imobidesk.s2": "FastAPI + SQLAlchemy + Alembic + PostgreSQL",
      "imobidesk.s3": "Docker Compose",
      "imobidesk.s4": "Geração de PDF com LaTeX / XeLaTeX",
      "imobidesk.s5": "xAI Grok para extração e studio de templates",

      "ondine.title": "Imobiliária Ondine",
      "ondine.desc": "Site público e plataforma de propostas da Ondine Bezerra Imóveis",
      "ondine.p1":
        "Monorepo que reconstrói a presença pública da imobiliária e a combina com painel admin e API. O site cobre busca, detalhe do imóvel, favoritos, comparar, leads de contato e páginas institucionais — a partir de um inventário clean-room do catálogo ao vivo.",
      "ondine.p2":
        "Junto com o ImobiDesk, forma uma stack imobiliária de ponta a ponta: catálogo na web, operação e geração de propostas no desk.",
      "ondine.stack": "Stack",
      "ondine.features": "Destaques",
      "ondine.f1": "Site Nuxt 3 com busca, fichas, favoritos e comparar",
      "ondine.f2": "Admin Vue 3 para inventário e operação",
      "ondine.f3": "APIs públicas e de auth em FastAPI + PostgreSQL",
      "ondine.f4": "Importação completa do catálogo (anúncios + mídia) sem hotlink",
      "ondine.f5": "Docker Compose para a plataforma inteira",
      "ondine.s1": "Nuxt 3 (site)",
      "ondine.s2": "Vue 3 (admin)",
      "ondine.s3": "FastAPI + PostgreSQL",
      "ondine.s4": "Docker Compose",
      "ondine.live": "Site de referência",

      "footer.copy": "© Copyright 2026 Antônio Lucena.",
      "footer.powered": "HTML estático. Hospedado em",
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "pt" || stored === "en" ? stored : DEFAULT_LANG;
  }

  function applyLang(lang) {
    const table = dict[lang] || dict.en;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] == null) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = table[key];
      else el.textContent = table[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (table[key] != null) el.setAttribute("aria-label", table[key]);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangToggle);
  } else {
    initLangToggle();
  }
})();
