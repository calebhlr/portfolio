# RULES.md — Caleb Lopes / Personal Portfolio

> **Instruções obrigatórias para o assistente de código na IDE.**  
> Projeto: portfólio pessoal · **Astro + TypeScript + Tailwind CSS 4** · publicação no **Cloudflare Pages**.  
> Versão: 1.0 · Idioma das regras: português.

Este documento define **como implementar, modificar e revisar** o projeto. Ele complementa o `README.md` (visão, arquitetura, plano e deploy) e `docs/design-system.json` (tokens e decisões visuais). **Não é um pedido para implementar tudo de uma vez.**

## 1. Ordem de autoridade

Em toda tarefa, respeite esta prioridade:

1. Pedido explícito mais recente do proprietário do projeto.
2. Segurança, privacidade, acessibilidade e veracidade do conteúdo.
3. `docs/design-system.json` para **valores visuais e design tokens**.
4. `README.md` para **stack, estrutura, rotas, fluxo de implementação e deploy**.
5. Este `rules.md` para **comportamento do agente e qualidade das mudanças**.
6. Sites externos como **referências de linguagem**, não como especificações a copiar.

Se houver conflito entre fontes do mesmo nível ou uma decisão estiver indefinida, **aponte o conflito e adote a opção de menor impacto reversível**, sem reescrever arbitrariamente requisitos já aprovados. Não substitua decisões explícitas por preferências próprias.

**Antes de alterar código:** leia o `README.md`, `docs/design-system.json` e os arquivos envolvidos na tarefa. Se o JSON ainda não estiver em `docs/`, solicite que seja colocado ali ou use o arquivo `design-system-portfolio-v1.json` disponível na raiz; não invente tokens ausentes.

## 2. Objetivo inegociável

Construir um **portfólio pessoal**, não um site de agência nem um dashboard. Deve comunicar com clareza a atuação e os projetos na interseção entre:

- **Artificial Intelligence**;
- **Development** (incluindo aprendizado/projetos Salesforce quando houver evidências);
- **Business & Growth** (marketing, vendas e comercial).

**Princípio central:** *a tipografia é a identidade; a interface não compete com o conteúdo.*

### Direção criativa

- **70% de inspiração conceitual na IVERSON** — https://iverson.inc/ — pela atmosfera monocromática, tipografia monumental, ritmo editorial, composição e espaço negativo.
- **30% de identidade própria**, com tipografia Söhne, arquitetura de marca pessoal e conteúdo original.
- A relação **70/30 é uma orientação de direção de arte**, não uma métrica verificável.
- Referências adicionais (Vercel, Perry Wang etc.) **não substituem** a IVERSON como referência dominante.

**Não copiar** logo, nome visual, composições exatas, textos, imagens, vídeos, animações proprietárias nem arquivos compilados (CSS/JS) da IVERSON. `design-system.json` extraído, HTML e `site-source.zip` são **materiais de análise**, não código pronto nem assets de produção.

## 3. Stack obrigatória e restrições

| Camada | Decisão |
| --- | --- |
| Framework | **Astro**, com componentes `.astro` |
| Linguagem | **TypeScript**, tipando dados e props relevantes |
| Estilos | **Tailwind CSS 4** + CSS nativo e tokens centralizados |
| Renderização | **SSG estático** (`output: 'static'`) |
| Conteúdo | Dados locais tipados; Markdown/MDX apenas quando justificar |
| Animações | CSS primeiro; JavaScript mínimo quando necessário |
| Hospedagem | **Cloudflare Pages** |
| Build | `npm run build` → diretório **`dist/`** |
| Runtime de build | Node.js **22** (`.node-version` ou configuração equivalente) |

### Proibições técnicas no MVP

- **Não migrar para Next.js**, não introduzir SSR, autenticação, banco de dados, CMS ou API sem requisito explícito.
- **Não instalar `@astrojs/cloudflare`** para site inteiramente estático.
- **Não adicionar React, Vue, Svelte, bibliotecas de motion, carrosséis, UI kits ou icon packs** apenas por conveniência; justificar qualquer dependência nova.
- **Não usar `next/font`, `next/image`, APIs de servidor Next.js** ou padrões de Tailwind 3 incompatíveis com o Tailwind 4.
- Não criar componentes hidratados ou carregar JS cliente quando HTML/CSS resolver.
- Não configurar servidor Node.js para atender o site publicado: o Cloudflare Pages serve os artefatos gerados.
- Não depender de assets ou scripts hospedados no domínio da IVERSON.

Quando um requisito futuro exigir funcionalidade de servidor, trate como **decisão de arquitetura nova**. Não esconda SSR/Pages Functions em uma alteração visual.

## 4. Design tokens: utilizar, não improvisar

O arquivo `docs/design-system.json` é a fonte de verdade para os tokens. Valores-base aprovados:

| Papel | Token / valor |
| --- | --- |
| Fundo principal | `#060606` |
| Branco principal | `#FCFCFC` |
| Texto secundário | `#A5A5A5` |
| Texto terciário | `#858585` |
| Superfície | `#141414` |
| Superfície elevada | `#1C1C1C` |
| Divisória | `#292929` |
| Divisória forte | `#454545` |
| Foco | `#FCFCFC` |
| Grid | **16 desktop / 8 tablet / 4 mobile** |
| Gap do grid | **12px** |
| Margens | **20px desktop / 16px mobile** |
| Largura máxima | **1600px** |

Escala de espaçamento: `4, 8, 12, 16, 24, 32, 48, 64, 96, 144px`. Breakpoints propostos: `768px`, `1024px` e `1920px`. Essas escolhas responsivas são do **novo portfólio**, não são necessariamente idênticas às da IVERSON.

### Regras visuais

1. **Preto, branco e cinzas** são suficientes. Não introduzir cor de destaque sem aprovação.
2. Preferir **espaço negativo, escala tipográfica e contraste** a elementos decorativos.
3. **Evitar cards**; projetos devem aparecer como **lista/índice editorial**, com números, linhas e metadados.
4. Usar divisórias finas (`1px`), poucos contornos, cantos predominantemente retos e no máximo `2px` de raio quando necessário.
5. **Não usar** gradientes decorativos, glassmorphism, neon, glow, sombras ostensivas, botões coloridos, barras de skills, nuvens de logos ou efeitos 3D.
6. Ícones apenas se comunicarem uma função real. Preferir texto tipográfico.
7. Não inventar padrões visuais para uma página isolada que destoem do restante.

## 5. Tipografia: assinatura do projeto

A tipografia **aprovada** é:

- **Söhne Breit** para hero e headings monumentais.
- **Söhne** para headings menores, parágrafos, navegação e etiquetas.
- **Monoespaçada de sistema** para metadados pontuais, quando melhorar a hierarquia.

Pontos de partida (ver JSON para todos os detalhes):

| Uso | Família | Referência inicial |
| --- | --- | --- |
| Display / nome | Söhne Breit | `800`, `clamp(4rem, 11vw, 11rem)`, line-height `0.89` |
| H1 | Söhne Breit | `800`, `clamp(3rem, 7vw, 7rem)` |
| H2 | Söhne Breit | `700`, `clamp(2rem, 4.4vw, 4.75rem)` |
| H3 | Söhne | `500`, `clamp(1.5rem, 2.6vw, 2.75rem)` |
| Corpo | Söhne | `400`, `clamp(1rem, 1.25vw, 1.25rem)` |
| Navegação | Söhne | `500`, `0.875rem` |

- Hero em caixa alta, com **tracking negativo moderado** (referência inicial `-0.055em`) e quebras controladas; ajustar para evitar clipping/overflow.
- **Não esticar, comprimir ou falsificar** pesos/larguras com transformações CSS.
- **Não substituir Söhne por Die Grotesk** nem por Senes como identidade do projeto.
- Söhne e Söhne Breit são **fontes comerciais**: **não baixar, extrair, redistribuir ou versionar** arquivos sem licença aplicável. Se ausentes, use fallbacks claramente sinalizados como **temporários**. Jamais declare que o resultado visual é fiel às fontes enquanto não houver arquivos licenciados.
- Carregar fontes locais autorizadas com `@font-face` em `src/styles/fonts.css`, evitando pesos sintéticos e `font-display` que bloqueie conteúdo.

## 6. Arquitetura de páginas e conteúdo

Rotas aprovadas:

```text
/                    Home
/ai                  Artificial Intelligence
/development         Development / Salesforce
/business            Business & Growth
/about               Sobre / trajetória
/contact             Contato
/projects/[slug]     Case real, gerado via getStaticPaths()
```

### Homepage

Ordem preferencial: header discreto → hero tipográfico **CALEB LOPES** → posicionamento curto → **Selected Work** → três disciplinas → introdução pessoal → footer. Não trocar a hierarquia por um template de landing page de agência.

### Conteúdo

- **Nunca inventar** cargos, clientes, métricas, diplomas, empresas, certificações, cases, depoimentos, links, e-mails ou resultados.
- Distinguir claramente **trabalho profissional, projeto pessoal, experimento, conceito e estudo**.
- Frases exploratórias do README são *placeholders*, não fatos biográficos validados.
- Se não houver projetos suficientes, usar **estado vazio intencional** ou trabalho comprovado; jamais preencher com cards fictícios.
- Cases, quando existirem: **contexto → papel → processo → evidência/resultado → links reais**.
- Manter dados de projetos em arquivo(s) tipado(s), separado(s) do markup, conforme o README.
- Rotas dinâmicas em SSG precisam de **`getStaticPaths()`** e URLs somente para conteúdo existente.
- Não expor informações privadas, chaves, logs, tokens ou dados de terceiros.

## 7. Componentes e CSS

- Preferir **HTML semântico** e componentes `.astro` simples com props tipadas.
- Criar componente somente quando houver **reuso real** ou ganho inequívoco de clareza.
- Usar `BaseLayout.astro` para `<head>`, metadata, navegação estrutural e import do CSS global **uma vez**.
- Centralizar tokens em `src/styles/tokens.css` e tipografia em `src/styles/fonts.css`; **não repetir valores mágicos** ao longo do projeto.
- Usar Tailwind para composição e CSS nativo para tipografia, tokens e efeitos específicos; evitar estilos duplicados ou conflitantes.
- Não inserir CSS global dentro de componentes sem motivo documentado.
- Mantenha projeto organizado e pequeno. Não criar diretórios, abstrações, hooks, stores ou helpers antecipadamente.
- Não introduzir dependências de componentes apenas para um botão, link, divider ou heading.

## 8. Interações e movimento

Movimento deve **reforçar a tipografia**, não ofuscar o conteúdo.

| Classe | Tempo / easing sugerido |
| --- | --- |
| Microinteração | `150ms cubic-bezier(.4, 0, .2, 1)` |
| Transição | `320ms cubic-bezier(.22, 1, .36, 1)` |
| Reveal pontual | `700ms cubic-bezier(.22, 1, .36, 1)` |

- Começar com **site estático plenamente funcional** e adicionar movimento só depois.
- Preferir animação de `opacity` e `transform`; não animar propriedades que causem reflow contínuo sem necessidade.
- **Respeitar `prefers-reduced-motion: reduce`**. Não esconder o conteúdo quando scripts falharem ou JS estiver indisponível.
- Proibir preloaders fictícios, smooth scroll intrusivo, parallax agressivo, cursores customizados que prejudicam usabilidade e animações em cada elemento.
- Hover **não é** a única forma de descobrir conteúdo ou interagir; garantir equivalência para teclado e toque.

## 9. Responsividade e acessibilidade

- Implementar **mobile-first** e testar larguras de `360`, `390`, `768`, `1024`, `1440` e `1920px`, incluindo altura reduzida.
- O título monumental precisa **refluir**, não cortar letras ou provocar rolagem horizontal.
- Permitir ajustes tipográficos por breakpoint para preservar composição editorial, não apenas escalonar tudo proporcionalmente.
- Priorizar legibilidade, áreas clicáveis adequadas e navegação compreensível.
- Usar `header`, `nav`, `main`, `section`, `footer`, headings coerentes e **um único `h1` por página**.
- Fornecer `alt` útil ou `alt=""` para decoração, labels acessíveis, foco visível e navegação por teclado.
- Buscar contraste **WCAG AA**, considerando que cinza discreto nem sempre pode ser usado para texto pequeno.
- Respeitar `prefers-reduced-motion` e não depender de animações para revelar conteúdo essencial.
- Não marcar checklists como concluídos sem teste real.

## 10. Performance e SEO

- Site estático e rápido: **HTML primeiro, JavaScript mínimo**.
- Usar `astro:assets` quando útil para otimização de imagens; manter proporções para evitar layout shift.
- Otimizar imagens, mídia e fontes; evitar vídeos/autoplay pesados e bibliotecas não essenciais.
- Definir `title`, `description`, `lang`, canonical e Open Graph relevantes, sem inventar URL de domínio final.
- Usar URLs reais para links externos e marcar itens temporários claramente.
- Conferir que todo conteúdo importante esteja no HTML renderizado e indexável.
- Avaliar performance e Core Web Vitals **após medir**, nunca prometer nota 100 sem auditoria.

## 11. Cloudflare Pages: contrato de deploy

Não alterar estas decisões sem solicitação explícita:

```text
Framework preset: Astro
Production branch: main
Build command: npm run build
Output directory: dist
Rendering: static (SSG)
Node.js: 22
Backend no MVP: nenhum
```

- Projeto na raiz do repositório, salvo se houver instrução contrária.
- Manter `package-lock.json` versionado para builds reproduzíveis.
- Confirmar que `npm run build` produz `dist/index.html` e rotas estáticas esperadas.
- Confirmar navegação direta e refresh das rotas no ambiente publicado.
- Não configurar `@astrojs/cloudflare`/SSR para resolver erro que tem origem em build ou paths.
- Não armazenar segredos em `PUBLIC_` (variáveis públicas podem ir para o bundle).
- Formulário com processamento server-side só mediante novo requisito e plano específico (Pages Functions ou serviço externo).
- Não declarar deploy concluído sem uma URL de deploy fornecida/confirmada e testes realizados.

## 12. Segurança, propriedade intelectual e integridade

- Nunca copiar assets, código compilado, fontes proprietárias ou branding da IVERSON para produção.
- Não adicionar SDKs de analytics, pixels, trackers, cookies de terceiros ou scripts externos sem necessidade aprovada.
- Não commitar `.env`, tokens, chaves, arquivos privados ou fontes não licenciadas.
- Não instalar pacotes obscuros, executar scripts remotos ou modificar configurações sensíveis sem justificar a origem e o impacto.
- Evitar comandos destrutivos (`git reset --hard`, exclusão em massa, sobrescrita de arquivos do usuário) sem aprovação explícita.
- Não executar refatorações grandes em resposta a um pedido pequeno. Preservar alterações existentes.

## 13. Fluxo obrigatório do agente na IDE

Para **cada tarefa**, seguir esta sequência:

1. **Ler** o pedido atual, este arquivo, o README, o JSON e os arquivos afetados.
2. **Resumir** em 2–4 frases o objetivo, a abordagem e os arquivos que serão modificados.
3. **Implementar o menor conjunto de mudanças** que entregue o pedido; evitar tarefas paralelas e escopo não solicitado.
4. **Validar** o que for possível: TypeScript/Astro Check se configurado, `npm run build`, rotas e layout em diferentes viewports quando houver browser disponível.
5. **Revisar** regressões visuais, erros de console, overflow horizontal, semântica e links.
6. **Responder com evidências**: arquivos alterados, o que mudou, comandos/testes executados e pendências reais.

### Comportamentos exigidos

- **Não alegar** ter executado build, testes ou deploy se não executou.
- **Não prometer** inspeção visual em mobile/desktop se não dispuser de navegador; registrar como pendência.
- Evitar comentários redundantes, código morto, mocks não solicitados e TODOs silenciosos.
- Quando um valor for provisório, marcar como **temporário** em comentário ou documentação pertinente.
- Não remover funcionalidades existentes ou alterar tokens aprovados sem justificar o efeito.
- Pedir esclarecimento **apenas quando uma decisão realmente bloquear** a implementação; caso contrário, escolher o caminho reversível mais conservador e registrá-lo.

### Formato esperado da resposta do agente

```text
Objetivo: [o que foi solicitado]
Alterações: [arquivos modificados + resultado observável]
Validação: [comandos executados e seus resultados; ou não executados]
Pendências: [licença de fontes, conteúdo verdadeiro, URL final etc., quando aplicável]
```

## 14. Definition of Done (critérios de aceite)

Uma tarefa só está concluída quando:

- [ ] Cumpre **exatamente** o escopo solicitado.
- [ ] Preserva Astro + TypeScript + Tailwind 4 + Cloudflare Pages SSG.
- [ ] Segue os tokens e a tipografia aprovados, ou registra fallback claramente.
- [ ] A interface continua minimalista, editorial, pessoal e original.
- [ ] Não cria conteúdo profissional fictício.
- [ ] Funciona por teclado e não depende de hover ou animação para informação crítica.
- [ ] Não introduz overflow horizontal nas larguras revisadas.
- [ ] Não adiciona dependências, código complexo ou serviços sem justificativa.
- [ ] `npm run build` passa **quando o ambiente permitir executar**; caso contrário, isso é declarado.
- [ ] Documenta testes realmente feitos e pendências relevantes.

---

## Instrução curta para iniciar uma sessão na IDE

> Leia `rules.md`, `README.md` e `docs/design-system.json` antes de implementar qualquer mudança. Este é um portfólio pessoal em Astro/TypeScript/Tailwind 4 com saída estática para Cloudflare Pages. O visual usa 70% da linguagem editorial da IVERSON como inspiração, sem copiar seus assets, e 30% de identidade própria com Söhne Breit + Söhne. Obedeça aos tokens, mantenha o site minimalista e acessível, não invente conteúdo ou resultados e trabalhe em etapas pequenas. Antes de alterar arquivos, diga o que fará; depois, informe exatamente o que testou e o que falta validar.
