# PLAN.md — Plano de execução do portfólio pessoal

> **Projeto:** Caleb Lopes — Personal Portfolio  
> **Versão:** 1.0.0 · **Data-base:** 16/11/2026  
> **Stack:** Astro + TypeScript + Tailwind CSS 4 · SSG · Cloudflare Pages  
> **Estado atual:** F0–F3 validadas localmente. O pré-deploy da F4 está pronto. A publicação foi autorizada e aguarda acesso ao Cloudflare Pages e os arquivos de fonte licenciados.
>
> **Função deste arquivo:** roadmap operacional, rastreabilidade de tarefas e critérios de passagem entre fases.

## 0. Como usar este documento

Este arquivo traduz em tarefas verificáveis as decisões aprovadas em `README.md`, `rules.md`, `initial.md` e `docs/design-system.json`. **Não substitui nenhum desses documentos.**

- **`README.md`:** define produto, stack, arquitetura, rotas e deploy.
- **`rules.md`:** define restrições e comportamento obrigatório do agente na IDE.
- **`docs/design-system.json`:** é a fonte de verdade de cores, tipografia, grid e motion.
- **`initial.md`:** é o comando para a **primeira execução**, limitado às Fases 0 e 1.
- **`plan.md` (este documento):** determina sequência, dependências, tarefas, resultados esperados e checkpoints.

**Ordem de precedência:** respeitar a ordem descrita em `rules.md` e `initial.md`. Em caso de divergência, este plano deve ser atualizado para refletir o documento de maior prioridade, não o contrário.

### Convenções

| Marcador | Significado |
| --- | --- |
| `[ ]` | Não iniciado ou ainda não validado |
| `[x]` | Concluído **e validado**, com evidência registrada |
| `[-]` | Bloqueado; descrever impedimento |
| `N/A` | Não aplicável; justificar |

- A IA deve **atualizar apenas os itens realmente executados e verificados**.
- Cada fase termina com **entregáveis**, **verificações** e um **gate de aprovação**.
- Não marcar tarefas como prontas só porque os arquivos foram criados; verificar comportamento e build.
- **Escopo autorizado pela primeira execução:** Fase 0 e Fase 1. Fases 2–4 são planejadas e exigem novo pedido do proprietário.
- O trabalho deve ocorrer no **repositório local**, sem deploy automático nesta primeira execução.

---

## 1. Objetivo, direção e limites

Construir um **portfólio pessoal premium** que complemente o currículo e apresente competências e projetos verificáveis nas áreas de:

1. **Artificial Intelligence**;
2. **Development** (incluindo Salesforce quando houver evidências);
3. **Business & Growth**.

### Princípio de design

**A tipografia é a identidade. A interface não compete com o conteúdo.**

Aproximadamente **70% da direção visual** deve se inspirar na linguagem da [IVERSON](https://iverson.inc/) — monocromia, escala tipográfica, espaço negativo e composição editorial — e **30%** deve expressar uma marca pessoal original. A divisão é **orientação criativa, não métrica técnica**.

| Aspecto | Decisão vinculante |
| --- | --- |
| Fundo | `#060606` |
| Texto principal | `#FCFCFC` |
| Tipografia display | **Söhne Breit** |
| Tipografia de leitura | **Söhne** |
| Grid | 16 colunas desktop / 8 tablet / 4 mobile |
| Gap | `12px` |
| Gutter | `20px` desktop / `16px` mobile |
| Projetos | Índice editorial com divisórias; **sem cards decorativos** |
| Motion | CSS discreto, adicionado após a homepage estática |
| Deploy | Cloudflare Pages, `npm run build` → `dist/` |

**Não fazer:** reproduzir layout, identidade, textos, imagens, vídeos, código compilado ou fontes da IVERSON; inventar projetos/experiências/métricas; adicionar framework de UI/SSR, CMS, banco, autenticação ou backend ao MVP; publicar sem aprovação explícita.

### Dependências externas que ainda precisam ser resolvidas

- [ ] Receber ou licenciar webfonts **Söhne Breit** e **Söhne** apropriadas para publicação. Enquanto indisponíveis, utilizar fallback identificado como temporário.
- [x] Revisar o posicionamento em inglês e alinhar o README com a homepage.
- [x] Confirmar projeto, classificação, evidências, link e papel de Caleb no PSF Predicts.
- [x] Confirmar o canal público inicial (WhatsApp).
- [x] Criar favicon e imagem Open Graph originais.
- [ ] Definir a URL pública definitiva.
- [x] Obter autorização para publicar no Cloudflare Pages.

Nenhuma dessas pendências autoriza a IA a criar informações biográficas ou ativos falsos.

---

## 2. Sequência resumida e gates

| ID | Fase | Dependência | Principal entrega | Status |
| --- | --- | --- | --- | --- |
| **F0** | Fundação | Documentos disponíveis | Astro estático, tokens, layout e componentes-base | Validada localmente |
| **F1** | Homepage | F0 validada | Home tipográfica, responsiva e navegável | Validada localmente, aguardando revisão |
| **F2** | Conteúdo e páginas | F1 + conteúdo real | Rotas de áreas, About, Contact e estudo de caso PSF Predicts | Validada localmente, com conteúdo complementar pendente |
| **F3** | Acabamento e QA | F2 suficiente | Motion discreto, SEO, testes e polimento | Validada localmente |
| **F4** | Publicação e evolução | F3 aprovada | Cloudflare Pages + domínio/monitoramento básico | Pré-deploy validado. Deploy aguarda o acesso ao Pages e as fontes. |

**Fluxo obrigatório:** `F0 → F1 → revisão → F2 → revisão → F3 → aprovação para publicação → F4`.

> **Regra de execução:** ao receber `initial.md` como instrução, a IA pode implementar **F0 e F1**, validar, registrar pendências e **parar**. Não iniciar F2–F4 por iniciativa própria.

---

## 3. F0 — Fundação técnica e visual

**Objetivo:** criar uma aplicação Astro mínima e uma base reutilizável consistente com o Design System.

### F0.1 — Inspeção e setup

- [x] Inspecionar a pasta atual e identificar arquivos existentes; **não sobrescrever** alterações do usuário.
- [x] Verificar presença de `README.md`, `rules.md`, `initial.md` e deste `plan.md`.
- [x] Garantir `docs/design-system.json` usando o **JSON adaptado** (`design-system-portfolio-v1.json`); não importar o JSON de extração técnica da IVERSON como tokens finais.
- [x] Inicializar **Astro + TypeScript** no diretório correto somente se o projeto ainda não existir.
- [x] Integrar **Tailwind CSS 4** pelo método suportado pelo Astro, sem padrões de Tailwind 3.
- [x] Configurar `output: 'static'`, `.node-version` com `22` e `package-lock.json` versionável.
- [x] Conferir scripts `dev`, `build`, `preview` e verificação de tipos quando configurada.
- [x] Confirmar que não há Next.js, SSR, React obrigatório nem `@astrojs/cloudflare`.

### F0.2 — Tokens e fundação de UI

- [x] Centralizar tokens em `src/styles/tokens.css`, preservando valores aprovados.
- [x] Criar `src/styles/fonts.css` e declarar **somente** fontes que estiverem licenciadas/disponíveis; caso contrário usar fallbacks temporários.
- [x] Criar `src/styles/global.css` com Tailwind 4, reset/base e importações consistentes.
- [x] Criar `src/layouts/BaseLayout.astro` com idioma, metadados básicos e CSS global importado uma vez.
- [x] Criar `SiteHeader.astro` e `SiteFooter.astro`. O contêiner e a tipografia compartilhada usam classes e tokens CSS.
- [x] Garantir contraste adequado, foco visível, HTML semântico e uma única tag `h1` por página.
- [x] Criar `src/content/profile.ts` e `src/content/projects.ts` com tipos claros e **sem dados fictícios**.

### Entregáveis F0

```text
.node-version
astro.config.mjs
package.json
package-lock.json
docs/design-system.json
src/layouts/BaseLayout.astro
src/styles/{global,fonts,tokens}.css
src/components/layout/*
src/components/typography/*
src/content/{profile,projects}.ts
```

A lista é indicativa: **não criar componentes ou pastas vazias apenas para satisfazer a árvore**.

### Validação e gate F0

- [x] `npm run build` executado com sucesso.
- [x] `dist/index.html` gerado.
- [x] Background, textos, tipografia/fallback e grid usam tokens centralizados.
- [x] Nenhum arquivo proprietário da IVERSON ou fonte sem licença entrou no projeto.
- [x] Relatório do agente registra arquivos, comandos realmente executados e bloqueios.

**Gate:** a aplicação estática compila e a fundação visual é confiável. A F1 pode começar durante a mesma primeira execução se a F0 estiver consistente.

---

## 4. F1 — Homepage e direção de arte

**Objetivo:** transformar a fundação em uma homepage pessoal reconhecível e de alta qualidade **sem depender de animações**.

### F1.1 — Estrutura e hierarquia

- [x] Implementar header tipográfico com marca pessoal discreta e navegação **somente para destinos existentes**.
- [x] Implementar hero monumental com **CALEB LOPES** e quebra controlada em desktop e mobile.
- [x] Incluir posicionamento curto e provisório, marcando-o para revisão de copy.
- N/A. Exibir entradas verificadas em **Selected Work** quando houver projetos reais. A página usa o estado vazio nesta entrega.
- [x] Se não houver projetos cadastrados, ocultar a listagem ou mostrar estado vazio intencional; **não inventar cases**.
- [x] Apresentar as três áreas: **Artificial Intelligence**, **Development** e **Business & Growth**.
- [x] Para rotas futuras não criadas, apontar para seções já existentes ou mostrar texto sem link. **Zero links quebrados**.
- [x] Incluir apresentação pessoal concisa com informações confirmadas e rodapé com links reais ou sem links indisponíveis.

### F1.2 — Responsividade e comportamento

- [x] Verificar larguras **360, 390, 768, 1024, 1440 e 1920px** quando houver navegador disponível.
- [x] Tratar viewport baixo e títulos grandes sem overflow horizontal.
- [x] Ajustar composição especificamente no mobile, em vez de apenas reduzir o desktop.
- [x] Garantir navegação por teclado e toque, `focus-visible` e contraste de textos pequenos.
- [x] Evitar vídeos, reveals e bibliotecas de animação nesta primeira versão.
- [x] Conferir semanticamente headings, links, landmarks e legibilidade.

### Entregáveis F1

- `src/pages/index.astro` funcional.
- Componentes utilizados na homepage (sem duplicações desnecessárias).
- Conteúdo provisório **explicitamente identificado** e preparado para substituição.
- Homepage que transmite **minimalismo editorial forte**, com Söhne Breit/Söhne ou fallback provisório.

### Validação e gate F1

- [x] `npm run build` e `npm run preview` executados quando o ambiente permitir.
- [x] A home é utilizável sem animações ou JS adicional.
- [x] Não há links mortos nem conteúdo profissional inventado.
- [x] Inspeção responsiva e visual registrada com **viewports realmente verificadas**.
- [x] Diferenças decorrentes de fonte fallback foram documentadas sem alegar fidelidade total.
- [x] Mudanças, testes e pendências foram relatados.

**Evidências da primeira execução**

- `npm ci`, `npm run check` e `npm run build` passaram com Node.js 22. O Astro Check analisou 9 arquivos com zero erros ou avisos. O build gerou `dist/index.html`.
- `npm run preview` retornou HTTP 200. O Chromium verificou a home sem JavaScript em 360, 390, 768, 1024, 1440 e 1920 px, além de 390 × 360 e 1920 × 351 px. Não houve overflow horizontal, links internos sem alvo ou erros no console. As capturas de 390 e 1440 px foram revisadas visualmente.
- Navegação por teclado, foco visível, link de pular para o conteúdo e links por toque verificados. O axe-core reportou zero violações nas regras WCAG A/AA executadas a 390 e 1440 px.
- O fallback de sistema altera o peso visual e as métricas dos tipos. As fontes licenciadas, a aprovação do texto em inglês e os projetos e contatos confirmados seguem pendentes.

**Gate:** apresentar a homepage para revisão visual do proprietário. **Parar após F1** na execução comandada por `initial.md`.

---

## 5. F2 — Conteúdo real e rotas internas

**Pré-requisito:** aprovação ou feedback da homepage e disponibilidade de conteúdo confirmado. **Não executar sem novo pedido.**

### F2.1 — Arquitetura e páginas

- [x] Implementar `/ai`, `/development` e `/business` com os temas de cada área. A página Development apresenta software, Salesforce e o estudo de caso disponível.
- [x] Implementar `/about` com apresentação pessoal e interesses.
- [x] Implementar `/contact` com o WhatsApp autorizado.
- [x] Ajustar a navegação e manter o layout editorial compartilhado entre as rotas.
- [ ] Acrescentar projetos de IA, histórico de negócios e detalhes da trajetória quando houver material confirmado.

### F2.2 — Estudos de caso

- [x] Definir schema local e tipado, com título, área, categoria, resumo, contexto, papel, processo, evidências e links.
- [x] Gerar `/projects/[slug]` com `getStaticPaths()` para projetos cadastrados.
- [x] Documentar contexto, processo, evidência e repositório público do PSF Predicts. A descrição usa o README e o código público como fontes.
- [x] Conferir o link do repositório e omitir métricas sem evidência.
- [x] Registrar a confirmação de Caleb de que desenvolveu o PSF Predicts de ponta a ponta.

### Gate F2

- [x] Rotas implementadas contêm informação útil e usam dados confirmados ou textos de interesse editorial.
- [x] A navegação funciona com acesso direto e recarregamento.
- [x] Os links internos têm destinos válidos e o build estático inclui as sete páginas do portfólio.

**Evidências:** `npm run check` e `npm run build` passaram com Node.js 22. `npm run preview` serviu as sete páginas. O Chromium verificou links, foco por teclado e largura sem overflow em 360, 390, 768, 1024, 1440 e 1920 px. O axe-core reportou zero violações nas regras WCAG A/AA executadas em 390 e 1440 px. O favicon segue previsto para F3.

---

## 6. F3 — Acabamento, SEO e Quality Assurance

**Pré-requisito:** estrutura/conteúdo principal suficientemente estáveis. **Não executar sem novo pedido.**

### F3.1 — Polimento visual e movimento

- [x] Refinar proporções dos títulos, espaços negativos, alinhamentos e ritmo entre seções.
- [x] Revisar estados `hover`, `active` e `focus` dos links editoriais.
- [x] Adicionar microinterações CSS **somente onde melhorarem orientação ou feedback**.
- N/A. O conteúdo aparece imediatamente. O feedback de interação usa transições CSS nos links.
- [x] Respeitar `prefers-reduced-motion: reduce` e evitar conteúdo invisível quando o JS falhar.
- [x] Verificar os fallbacks tipográficos. Os arquivos Söhne e Söhne Breit licenciados seguem pendentes.

### F3.2 — Metadados e entrega

- [x] Criar favicon/monograma **original**.
- [x] Definir `title` e `description` únicos para cada página.
- [x] Criar imagem Open Graph original e revisar preview de compartilhamento.
- [x] Preparar canonical e metadados sociais com a variável `SITE_URL` e verificar com domínio reservado de teste. O valor de produção será definido no Pages.
- [x] Validar os tamanhos do favicon e da imagem Open Graph. As páginas não carregam imagens no corpo.
- [x] Revisar semântica, contraste, teclado e links. O GitHub respondeu HTTP 200. O proxy retornou 403 no CONNECT para o WhatsApp, cujo endereço renderizado foi conferido.
- [x] Medir desempenho com ferramentas realmente disponíveis; registrar resultados e ambiente.
- [x] Garantir ausência de segredos, trackers não aprovados e assets de terceiros não autorizados.

### Checklist de QA

| Verificação | Critério |
| --- | --- |
| Build | Sem erro; saída correta em `dist/` |
| UI mobile | Sem overflow; hero legível em 360/390px |
| UI desktop | Escala e respiro equilibrados em 1024/1440/1920px |
| Navegação | Teclado, foco visível e toque |
| Movimento | Respeita preferência por movimento reduzido |
| Conteúdo | Verídico, atribuição correta, links válidos |
| SEO | Metadados e canonicals coerentes com URL verdadeira |
| Fontes | Arquivos licenciados ou pendência reconhecida |
| Performance | Avaliada com evidências, sem promessa de nota arbitrária |

**Evidências locais**

- `npm ci`, `npm run check` e `npm run build` passaram com Node.js 22. O build gerou sete páginas navegáveis, uma página 404 e os assets. O pacote ocupou 84 KB somando os arquivos e diretórios.
- Chromium passou em 360, 390, 768, 1024, 1440 e 1920 px, incluindo 1920 × 351. Foram verificados 23 destinos internos, além de teclado, foco, toque, estado pressionado e movimento reduzido. O axe-core apontou zero violações nas regras WCAG A/AA executadas em 390 e 1440 px.
- Lighthouse 13.6.0 em Chromium local. Na homepage com perfis móvel e desktop, Performance, Accessibility, Best Practices e SEO marcaram 100. LCP de 0,8 s em móvel e 0,2 s em desktop, com CLS de 0 nos dois perfis. Resultados de laboratório, antes da publicação.

**Gate F3:** entregar site pronto para aprovação final. **Não publicar** por conta própria.

---

## 7. F4 — Publicação no Cloudflare Pages

**Pré-requisito:** revisão final concluída e **autorização explícita** do proprietário. A publicação não faz parte da primeira execução da IDE.

### F4.1 — Pré-deploy

- [x] Revisar os arquivos candidatos à entrega. A busca por padrões comuns de credenciais não encontrou ocorrências e os únicos assets públicos são o favicon e a imagem Open Graph originais.
- [x] Confirmar que `main` é a branch padrão remota e que o lockfile local permite `npm ci`.
- [x] Enviar a versão do portfólio e `package-lock.json` à `main` do GitHub e conferir o commit remoto.
- [x] Rodar `npm run build` e verificar `dist/index.html` e as rotas publicáveis.
- [x] Confirmar configurações necessárias em `astro.config.mjs`, sem SSR.
- [ ] Confirmar URL pública, política de privacidade se aplicável e links finais.

### F4.2 — Cloudflare Pages

| Campo | Valor |
| --- | --- |
| Framework preset | `Astro` |
| Production branch | `main` |
| Root directory | `/` (projeto na raiz do repositório) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js | `22` (arquivo `.node-version` ou configuração equivalente) |
| Adapter SSR | **Não utilizar** no MVP |

- [ ] Conectar o repositório GitHub ao Cloudflare Pages com autorização do proprietário.
- [ ] Publicar a build estática e registrar a **URL real** recebida.
- [ ] Testar homepage, rotas profundas e refresh direto nas URLs publicadas.
- [ ] Verificar downloads das fontes, imagens, favicon e Open Graph no ambiente de produção.
- [ ] Verificar links externos, responsividade e erros de console/404 quando houver ferramentas disponíveis.
- [ ] Configurar domínio próprio e atualizar canonical somente quando confirmado.
- [ ] Validar previews de PR/branch, se habilitados na integração.
- [ ] Registrar a versão publicada e possíveis problemas remanescentes.

**Evidências do pré-deploy:** `wrangler pages dev dist` serviu as sete rotas e os dois assets com HTTP 200. Uma rota inexistente retornou HTTP 404 com a página personalizada. O processo rodou localmente, sem Functions. A configuração de produção está descrita no [README](README.md#cloudflare-pages).

**Pendência:** o proprietário confirmou que ainda vai configurar o acesso ao Pages e fornecer as fontes licenciadas. A publicação, a URL pública, a configuração de `SITE_URL` e os testes em produção permanecem em aberto.

### Gate F4

**Só declarar “publicado” quando houver URL de produção confirmada e testes realmente executados.** Não supor sucesso a partir de um build local.

---

## 8. Definition of Done global

Uma tarefa ou fase só pode ser marcada como concluída quando todos os itens relevantes abaixo forem atendidos ou justificados explicitamente:

- [ ] Mudanças respeitam a stack **Astro + TypeScript + Tailwind CSS 4 + SSG**.
- [ ] As decisões visuais correspondem a `docs/design-system.json`.
- [ ] O visual é **pessoal, monocromático, editorial e autoral**, não uma cópia da IVERSON.
- [ ] Não existe conteúdo profissional fabricado.
- [ ] As rotas incluídas são reais e funcionais; nenhuma navegação aponta para páginas inexistentes.
- [ ] A interface é utilizável no teclado e no toque, com HTML semântico.
- [ ] Nenhum overflow horizontal ou degradação crítica foi observado nas larguras verificadas.
- [ ] Nenhuma biblioteca/serviço foi adicionado sem justificativa.
- [ ] Build/checks executados foram documentados, com resultado real; testes não executados permanecem pendentes.
- [ ] Fontes e outros assets respeitam licenças e propriedade intelectual.
- [ ] O escopo foi respeitado; próximas fases não foram iniciadas sem pedido.

---

## 9. Registro de progresso — atualizar ao final de cada sessão

| Data | Fase/tarefa | Arquivos modificados | Validação realizada | Status/bloqueio |
| --- | --- | --- | --- | --- |
| 2026-11-16 | Criação do plano | `plan.md` | Revisão de consistência com README, rules, initial e JSON | Planejado; sem implementação |
| 2026-11-17 | F0 e F1 | Configuração Astro/TypeScript/npm, `docs/design-system.json`, `src/`, `plan.md` | Build estático, checagem de tipos, HTTP em dev e preview e testes no Chromium | Validado localmente. Aguardando revisão da homepage. |
| 2026-11-17 | F2 | Rotas e layout editorial em `src/`, conteúdo local e `plan.md` | Checagem de tipos, build de sete páginas, navegação direta e testes no Chromium | Validada localmente. Papel no PSF Predicts e conteúdo complementar pendentes. |
| 2026-11-17 | F3 e pré-deploy F4 | Metadados, estilos, página 404, assets próprios e instruções do Pages | Checagem de tipos, build, Chromium, axe-core, Lighthouse e Wrangler Pages local | F3 validada. Publicação aguarda configuração do proprietário. |
| 2026-11-17 | Revisão de publicação | Posicionamento da homepage, autoria no case PSF Predicts e documentação | Checagem de tipos sem diagnósticos e build de sete páginas e 404 | Autorizada. Aguardando fontes licenciadas e acesso ao Cloudflare Pages. |

### Modelo de atualização do agente

```text
Fase/tarefa: F0.1 — [resumo]
Estado: concluído | em andamento | bloqueado
Arquivos modificados: [...]
Implementado: [...]
Validação real: [comando/viewport + resultado, ou "não executada"]
Bloqueios/pendências: [...]
Próxima tarefa autorizada: [...]
```

Se houver problema bloqueante, registrar aqui a menor correção segura possível. Não mudar a arquitetura sem justificar a decisão.

---

## 10. Primeira ordem de execução para a IA da IDE

> Leia integralmente `rules.md`, `README.md`, `initial.md`, `plan.md` e `docs/design-system.json`. Inspecione o repositório e execute **apenas as Fases 0 e 1** deste plano, conforme `initial.md`. Trabalhe no projeto atual, preserve arquivos existentes e implemente Astro + TypeScript + Tailwind CSS 4 com saída estática. Construa primeiro a fundação visual e depois a homepage pessoal, minimalista e tipográfica. Use os tokens oficiais, não invente projetos, não copie a IVERSON, não inclua fontes sem licença e não publique o site. Ao concluir, rode as verificações disponíveis, atualize os checkboxes e o registro de progresso com evidências e pare para revisão da homepage.

**Critério de sucesso da primeira execução:** homepage estática responsiva, visual coerente, build local válido e relatório honesto de pendências. **Próxima fase potencial: F2 — somente quando solicitada.**
