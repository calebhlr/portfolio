# Caleb Lopes — Personal Portfolio

> **Guia de implementação do site pessoal** · Design System v1.0 · Idioma do projeto: português (documentação), inglês (copy inicial do site, revisável)

Portfólio pessoal com identidade **minimalista, monocromática e tipograficamente forte**, desenvolvido para apresentar projetos e competências na interseção entre **Artificial Intelligence, Development e Business & Growth**.

Este README é a especificação inicial para construir o projeto em uma IDE (VS Code, Cursor, Windsurf ou equivalente). **Não é um repositório já implementado.** O objetivo é orientar a construção por etapas, mantendo consistência visual, desempenho e clareza para quem visita o portfólio.

---

## 1. Visão do produto

### Objetivo

Criar um site pessoal que funcione como uma extensão do currículo, mas com liberdade para mostrar **projetos, raciocínio, processo e evidências de competência** — especialmente para oportunidades em IA, desenvolvimento/Salesforce e áreas de negócios.

**Princípio central:** _A tipografia é a identidade. A interface não compete com o conteúdo._

### Direção criativa

- **70% de inspiração na linguagem visual da [IVERSON](https://iverson.inc/):** estética editorial, preto profundo, escala tipográfica monumental, ritmo de composição, muito espaço negativo e movimento discreto.
- **30% de identidade própria:** tipografia **Söhne Breit + Söhne**, assinatura visual e narrativa pessoais, arquitetura por competências e estudos de caso voltados à trajetória profissional.
- A proporção **70/30 é uma diretriz criativa**, não um percentual técnico verificável.
- O resultado deve parecer **um site pessoal premium**, e **não** o site de uma agência, um dashboard SaaS ou um template genérico de desenvolvedor.

### Não fazer

- Não copiar o logo, os textos, as imagens, os vídeos, as animações completas nem a composição exata da IVERSON.
- Não reutilizar o JavaScript/CSS compilado da referência como código-fonte do novo site.
- Não usar gradientes decorativos, neon, botões chamativos, cards coloridos, sombras pesadas, vitrines de logos ou barras de habilidade.
- Não inventar clientes, números, resultados ou experiências profissionais.
- Não colocar interações acima de acessibilidade, velocidade ou legibilidade.

---

## 2. Material de referência

Os arquivos abaixo vieram da inspeção da referência e da adaptação do Design System:

| Arquivo | Papel | Orientação |
| --- | --- | --- |
| `design-system-portfolio-v1.json` | **Fonte de verdade inicial** para tokens, componentes e estrutura de páginas | Copiar para `docs/design-system.json` no projeto |
| `design-system.json` | Extração técnica do site IVERSON | Consultar apenas como referência; não importar integralmente |
| `Iverson - Brand, Product, Web & Video Agency.html` | HTML salvo da referência | Consultar estrutura visual, sem reutilizar conteúdo/propriedade intelectual |
| `site-source.zip` | Assets CSS/JS compilados extraídos da referência | Material de análise, **não** é código-fonte editável do projeto |

> **Importante:** este `README.md` não incorpora nem redistribui arquivos de fontes. Söhne e Söhne Breit são fontes comerciais; adquirir/verificar a licença de uso web antes de publicar.

### O que veio da inspeção da IVERSON

A inspeção técnica identificou, entre outros itens: fundo `#060606`, branco secundário `#FCFCFC`, cinzas `#727272`, `#545454`, `#1C1C1C`, grid desktop de **16 colunas**, espaçamento entre colunas de **12px** e margem-base de **20px**. A referência emprega Die Grotesk C, Die Grotesk B, ABC Repro Mono e Senes. **Essas fontes não são as escolhidas para o novo portfólio.**

> A inspeção foi feita com viewport de 1920 × 351 px. Não pressupor que todos os comportamentos responsivos ou estados de interação foram capturados. Breakpoints e comportamento móvel abaixo são **decisões propostas para o novo projeto**, não valores comprovadamente iguais aos da IVERSON.

---

## 3. Stack de implementação (proposta)

- **Next.js** com App Router, **React** e **TypeScript**.
- **Tailwind CSS** para utilitários; **CSS variables** para os tokens de design.
- **CSS nativo** para transições e efeitos simples. Instalar uma biblioteca de animação somente se uma interação justificar.
- **MDX ou dados TypeScript** para os estudos de caso e projetos. Começar com dados locais; não é necessário CMS no MVP.
- **Vercel** como opção de publicação, por afinidade com a stack; outros hosts compatíveis são aceitáveis.

### Preparação

Pré-requisitos: Node.js LTS, Git, um gerenciador de pacotes e uma IDE.

No terminal, em uma pasta vazia:

```bash
npx create-next-app@latest caleb-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd caleb-portfolio
npm run dev
```

Abrir `http://localhost:3000` no navegador. Caso o assistente do `create-next-app` faça perguntas adicionais, manter TypeScript, App Router, Tailwind e ESLint ativados. Use as versões estáveis compatíveis instaladas pelo assistente — não dependa de uma versão fixada neste README.

### Pastas sugeridas

```text
caleb-portfolio/
├── public/
│   ├── images/
│   └── fonts/                 # somente arquivos licenciados
├── docs/
│   └── design-system.json    # cópia de design-system-portfolio-v1.json
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # /
│   │   ├── globals.css
│   │   ├── ai/page.tsx
│   │   ├── development/page.tsx
│   │   ├── business/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── projects/[slug]/page.tsx
│   ├── components/
│   │   ├── layout/           # Header, Footer, Container, Section
│   │   ├── typography/       # DisplayHeading, Eyebrow, BodyText
│   │   ├── projects/         # ProjectIndex, ProjectRow, CaseStudy
│   │   └── ui/               # Link, Divider, Reveal (se necessário)
│   ├── content/
│   │   ├── projects.ts
│   │   └── profile.ts
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── tokens.css
├── README.md
└── package.json
```

Use esta estrutura como ponto de partida, sem criar arquivos ou abstrações sem necessidade.

---

## 4. Design System

**Prioridade:** `docs/design-system.json` deve ser a referência principal de valores e decisões. Os exemplos abaixo resumem os tokens para facilitar a implementação.

### 4.1 Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-background` | `#060606` | Fundo principal |
| `--color-surface` | `#141414` | Superfícies ocasionais |
| `--color-surface-elevated` | `#1C1C1C` | Estado elevado, quando necessário |
| `--color-text-primary` | `#FCFCFC` | Títulos e texto principal |
| `--color-text-secondary` | `#A5A5A5` | Descrições |
| `--color-text-tertiary` | `#858585` | Metadados |
| `--color-border` | `#292929` | Divisórias de 1px |
| `--color-border-strong` | `#454545` | Divisórias com maior contraste |
| `--color-focus` | `#FCFCFC` | Indicador de foco |

A cor não deve ser o principal recurso expressivo. O destaque vem de **escala, peso, largura, composição e contraste tipográficos**.

### 4.2 Tipografia — decisão aprovada

| Contexto | Família | Peso sugerido | Escala inicial |
| --- | --- | --- | --- |
| Nome no hero / display | **Söhne Breit** | 800 (ou peso equivalente licenciado) | `clamp(4rem, 11vw, 11rem)` |
| Heading 1 | **Söhne Breit** | 800 | `clamp(3rem, 7vw, 7rem)` |
| Heading 2 | **Söhne Breit** | 700 | `clamp(2rem, 4.4vw, 4.75rem)` |
| Heading 3 | **Söhne** | 500 | `clamp(1.5rem, 2.6vw, 2.75rem)` |
| Corpo | **Söhne** | 400 | `clamp(1rem, 1.25vw, 1.25rem)` |
| Navegação | **Söhne** | 500 | `0.875rem` |
| Etiquetas / eyebrow | **Söhne** | 500 | `0.75rem` |
| Metadados | Mono de sistema | 400 | `0.75rem` |

Regras para o hero: caixa alta, line-height aproximado de `0.89` e tracking inicial `-0.055em`, **ajustados visualmente para evitar corte de glifos**. Não achatar ou esticar fontes por CSS para simular variantes. Testar em larguras reais de tela.

**Uso das fontes:** incluir arquivos licenciados em `public/fonts/` e carregá-los com `next/font/local`. Se a licença ainda não estiver resolvida, trabalhar com fontes de sistema temporárias, sem alegar equivalência visual com Söhne. Pesos devem refletir os arquivos efetivamente disponíveis; evitar negrito sintético.

### 4.3 Grid, margens e espaçamento

- Desktop: **16 colunas**; tablet: **8**; mobile: **4**.
- Gap base: **12px**.
- Margens laterais: **20px desktop**, **16px mobile**.
- Largura máxima recomendada: **1600px**.
- Seções: respiro vertical `clamp(96px, 13vw, 220px)`, com ajustes para páginas curtas.
- Hero: altura mínima proposta `min(860px, 100svh)`, sem esconder conteúdo em telas baixas.
- Escala de espaçamento: `4, 8, 12, 16, 24, 32, 48, 64, 96, 144px`.
- Breakpoints propostos: `768px`, `1024px` e `1920px`. Não tratá-los como valores extraídos da referência.

### 4.4 Forma e componentes

- Preferir conteúdo **sem cards** e sem containers destacados.
- Divisórias finas (`1px`) com espaçamento generoso.
- Cantos retos por padrão; raio máximo discreto (`2px`) quando necessário.
- Ícones apenas quando esclarecem a ação; evitar decoração gratuita.
- Links com estados visíveis de hover, focus e active.
- Header pequeno, tipográfico, com **Work / About / Contact**.
- Footer com contato direto e links profissionais, sem conteúdo inventado.

### 4.5 Movimento

| Tipo | Duração orientativa | Uso |
| --- | --- | --- |
| Microinteração | `150ms` | Hover e estados de links |
| Transição | `320ms` | Mudança leve de estado |
| Reveal | `700ms` | Entrada pontual de conteúdo |

Easings sugeridos: `cubic-bezier(.4, 0, .2, 1)` para microinterações; `cubic-bezier(.22, 1, .36, 1)` para transições e reveals.

**Restrições:** evitar animação em todos os elementos, parallax agressivo, cursor customizado que atrapalhe usabilidade e loaders artificiais. Respeitar `prefers-reduced-motion: reduce`.

### 4.6 Ponto de partida para CSS

```css
/* src/styles/tokens.css — proposta adaptada, não CSS copiado da IVERSON */
:root {
  --color-background: #060606;
  --color-surface: #141414;
  --color-surface-elevated: #1c1c1c;
  --color-text-primary: #fcfcfc;
  --color-text-secondary: #a5a5a5;
  --color-text-tertiary: #858585;
  --color-border: #292929;
  --color-border-strong: #454545;
  --color-focus: #fcfcfc;

  --font-display: "Sohne Breit", Arial, sans-serif;
  --font-body: "Sohne", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Consolas, monospace;

  --gutter: 20px;
  --grid-gap: 12px;
  --max-width: 1600px;
}

@media (max-width: 767px) {
  :root { --gutter: 16px; }
}

body {
  margin: 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}

::selection { background: #fcfcfc; color: #060606; }
:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 4px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

> Se utilizar `next/font/local`, vincular os nomes das famílias ou as variáveis geradas pelo Next.js aos tokens acima. Os nomes `Sohne`/`Sohne Breit` no snippet são **placeholders de implementação** até que a configuração real de fontes exista.

---

## 5. Arquitetura de informação

### Rotas mínimas

| Rota | Função |
| --- | --- |
| `/` | Home, posicionamento pessoal, projetos selecionados e caminhos profissionais |
| `/ai` | Projetos e experimentos de Inteligência Artificial |
| `/development` | Desenvolvimento, software e aprendizado/projetos Salesforce |
| `/business` | Marketing, vendas, comercial e growth |
| `/about` | Trajetória, competências, formação e abordagem de trabalho |
| `/contact` | Contato e links profissionais |
| `/projects/[slug]` | Estudo de caso detalhado (criar conforme projetos reais existirem) |

### Hierarquia da homepage

1. **Header discreto:** marca tipográfica curta à esquerda, navegação à direita.
2. **Hero monumental:** nome **CALEB LOPES** em Söhne Breit, com composição responsiva.
3. **Posicionamento:** uma frase curta, clara e verificável que conecte tecnologia, IA e negócios.
4. **Selected Work:** índice editorial com projeto, área, papel e link para detalhes; sem cards coloridos.
5. **Explore by discipline:** acesso às três rotas `AI`, `Development` e `Business & Growth`.
6. **About teaser:** resumo profissional conciso, sem inflar experiência.
7. **Footer:** contato e links sociais/profissionais validados.

**Copy exploratória** (não tratar como currículo definitivo):

> Building at the intersection of technology, artificial intelligence and business.

Essa frase é um **placeholder editorial** e deve ser revisada antes da publicação. O conteúdo final depende de experiências, projetos e links confirmados pelo proprietário.

### Modelo de estudo de caso

Cada projeto real deve ter:

- **Contexto:** problema ou oportunidade.
- **Papel:** o que foi feito pessoalmente.
- **Processo:** decisões, ferramentas, experimentos e trade-offs.
- **Resultado:** evidência concreta, demo, repositório ou métrica verificável; se não houver, explicar aprendizados sem fabricar números.
- **Links:** repositório, demo, documentação ou material de apoio, quando autorizados.

Distinguir projetos profissionais, pessoais, estudos e experimentos. Um experimento com IA não deve ser apresentado como produto em produção se não for.

### Conteúdo como dados

No MVP, manter projetos separados do JSX, em `src/content/projects.ts`. Estrutura sugerida:

```ts
export type Project = {
  slug: string;
  title: string;
  category: "ai" | "development" | "business";
  summary: string;
  role?: string;
  year?: number;
  status?: "concept" | "experiment" | "completed" | "ongoing";
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = []; // preencher apenas com projetos reais
```

Não criar projetos fictícios para preencher o layout. Se faltarem cases, valorizar trajetória, habilidades e estudos existentes.

---

## 6. Páginas e componentes

### Componentes iniciais (MVP)

- `SiteHeader`: marca pessoal + links, responsivo e acessível.
- `SiteFooter`: contato e fechamento editorial.
- `Container` / `Section`: layout consistente e espaçamento.
- `DisplayHeading`: títulos com Söhne Breit, quebra controlada e escala fluida.
- `Eyebrow`: rótulos curtos e discretos.
- `ProjectIndex` / `ProjectRow`: lista de projetos com divisórias, hover e links.
- `DisciplineLink`: acesso às áreas profissionais.
- `CaseStudy`: narrativa reutilizável para projetos reais.

**Regra de composição:** componentes devem resolver necessidades recorrentes. Evitar sistemas complexos de componentes antes de haver telas suficientes para justificá-los.

### Responsividade

- Começar pelo **mobile** na implementação e validar também em desktop largo.
- Evitar overflow lateral em títulos grandes; permitir quebra de linha planejada.
- Manter navegação funcional por toque e teclado.
- Em telas pequenas, simplificar a composição, não reduzir tudo proporcionalmente.
- Verificar em 360px, 390px, 768px, 1024px, 1440px e 1920px; incluir viewport de altura pequena.

---

## 7. Ordem de desenvolvimento na IDE

### Fase 0 — Fundação

- [ ] Criar o projeto Next.js + TypeScript.
- [ ] Copiar este README para a raiz.
- [ ] Copiar `design-system-portfolio-v1.json` para `docs/design-system.json`.
- [ ] Definir tokens globais e reset/base CSS.
- [ ] Configurar fontes licenciadas ou fallbacks provisórios.
- [ ] Criar Header, Footer, Container e componentes tipográficos.

**Entrega:** tela básica em fundo `#060606`, tipografia e navegação funcionando sem erros.

### Fase 1 — Homepage

- [ ] Construir hero com nome monumental e tagline curta.
- [ ] Implementar grid e espaçamentos responsivos.
- [ ] Criar índice de projetos com conteúdo verdadeiro (ou estado vazio intencional).
- [ ] Implementar links para as três áreas profissionais.
- [ ] Refinar hierarquia visual comparando com as **características**, não com uma cópia da IVERSON.

**Entrega:** homepage responsiva e visualmente consistente, mesmo sem animações.

### Fase 2 — Conteúdo e páginas

- [ ] Implementar `/ai`, `/development`, `/business` e `/about`.
- [ ] Adicionar `/contact` com meios de contato efetivamente escolhidos.
- [ ] Estruturar cases em `/projects/[slug]` quando houver material.
- [ ] Ajustar títulos, descrições e CTAs para recrutadores e visitantes.

**Entrega:** navegação completa e conteúdos claros, sem seções vazias ou links quebrados.

### Fase 3 — Acabamento

- [ ] Criar hover/focus refinados em links e índice editorial.
- [ ] Adicionar no máximo alguns reveals pontuais, sem comprometer desempenho.
- [ ] Revisar espaçamentos, quebras de títulos, contraste e tratamento mobile.
- [ ] Adicionar metadata, favicon próprio e Open Graph original.
- [ ] Conferir licença e carregamento das fontes em produção.

**Entrega:** site estável, rápido e pronto para revisão final.

### Fase 4 — Publicação e evolução

- [ ] Rodar lint e build: `npm run lint` e `npm run build` (se os scripts estiverem disponíveis).
- [ ] Revisar links, textos e conteúdo em dispositivos reais.
- [ ] Publicar em um host compatível e configurar domínio, se houver.
- [ ] Atualizar casos de uso e projetos progressivamente.

---

## 8. Requisitos de qualidade

### Acessibilidade

- Usar semântica HTML correta (`header`, `nav`, `main`, `section`, `footer`, headings).
- Usar `h1` único e estrutura hierárquica coerente.
- Garantir navegação por teclado, foco visível, rótulos e `alt` úteis.
- Respeitar preferência por movimento reduzido.
- Verificar contraste adequado (alvo: WCAG AA) e tamanho confortável para leitura.

### Performance

- Evitar animações JavaScript onde CSS resolve.
- Otimizar imagens e carregar apenas as necessárias.
- Usar `next/image` quando apropriado e preferir fontes locais licenciadas com carregamento eficiente.
- Minimizar bibliotecas e não bloquear a renderização por efeitos decorativos.
- Avaliar Core Web Vitals após a publicação; não prometer notas antes de medir.

### SEO e apresentação

- Definir títulos e descrições únicos por página.
- Incluir metadata Open Graph com arte original.
- Usar links claros e identificáveis para projetos.
- Garantir conteúdo relevante disponível no HTML; não esconder a maior parte da página atrás de animações.

### Critérios de aceitação do MVP

- [ ] O site é identificável como **portfólio pessoal**, não como agência.
- [ ] A inspiração IVERSON é perceptível no minimalismo e no ritmo editorial, **sem copiar sua composição**.
- [ ] Söhne Breit é a assinatura tipográfica dos títulos e Söhne dá suporte ao conteúdo (ou fallbacks estão claramente marcados como temporários).
- [ ] Não existem gradientes, cards decorativos ou ruído visual desnecessário.
- [ ] AI, Development e Business possuem rotas próprias e uma narrativa coerente.
- [ ] A homepage funciona em celular, tablet e desktop.
- [ ] Navegação por teclado, foco e movimento reduzido funcionam.
- [ ] Não há projetos, resultados, depoimentos ou experiências inventados.
- [ ] Não há erros de build nem links internos quebrados.

---

## 9. Instruções para usar uma IA dentro da IDE

Copie o contexto abaixo para o assistente de código da sua IDE **depois** de colocar este README e `docs/design-system.json` no repositório:

```text
Você está implementando meu portfólio pessoal em Next.js, TypeScript e Tailwind CSS.
Leia o README.md e docs/design-system.json antes de modificar qualquer arquivo.

Objetivo: site pessoal minimalista, fundo #060606, tipografia forte,
inspirado na linguagem editorial da IVERSON (70% de direção criativa),
mas com identidade e conteúdo próprios (30%).

Tipografia escolhida: Söhne Breit para títulos e Söhne para textos.
Não inclua fontes comerciais sem arquivos e licença fornecidos.

Trabalhe em etapas pequenas, começando por tokens, layout e homepage.
Priorize responsividade, acessibilidade, performance e fidelidade aos tokens.
Não copie o site de referência nem seus CSS/JS compilados.
Não invente projetos, experiências profissionais ou resultados.

Antes de cada etapa:
1. Explique os arquivos que serão criados ou alterados.
2. Implemente só o escopo solicitado.
3. Aponte decisões que não estejam definidas neste README.
4. Valide o código com lint/build quando possível.

Primeira tarefa: preparar a estrutura do projeto, os tokens do Design System,
o layout global e uma homepage estática responsiva, sem animações complexas.
```

### Regra para decisões futuras

Em caso de conflito, seguir esta ordem:

1. **Conteúdo real, acessibilidade e integridade dos dados.**
2. **Decisões explícitas do proprietário do portfólio.**
3. **`docs/design-system.json`** e este README.
4. Referências visuais (IVERSON, Vercel e portfólios estudados).
5. Preferências estéticas ou padrões sugeridos automaticamente pela IDE.

---

## 10. Pendências antes de publicar

- Confirmar tagline e demais textos finais em inglês ou português.
- Selecionar e documentar projetos verdadeiros por categoria.
- Confirmar links (GitHub, LinkedIn, e-mail, currículo, demos).
- Licenciar e fornecer arquivos webfont de Söhne / Söhne Breit ou aprovar uma alternativa.
- Definir favicon/monograma próprio, domínio e imagem Open Graph.

**Estado atual:** especificação de design e desenvolvimento. O produto final deve ser validado visualmente após a primeira implementação.
