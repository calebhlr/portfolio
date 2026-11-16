# PLAN.md — Plano de execução do portfólio pessoal

> **Projeto:** Caleb Lopes — Personal Portfolio  
> **Versão:** 1.0.0 · **Data-base:** 16/11/2026  
> **Stack:** Astro + TypeScript + Tailwind CSS 4 · SSG · Cloudflare Pages  
> **Estado inicial:** planejamento concluído; implementação **não verificada**  
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
- [ ] Aprovar copy pessoal final (a frase de posicionamento do README é um placeholder).
- [ ] Confirmar projetos, classificação, evidências e links verdadeiros.
- [ ] Confirmar e-mail, GitHub, LinkedIn, currículo e demais links públicos.
- [ ] Definir domínio, favicon/monograma e imagem Open Graph próprios.
- [ ] Autorizar a publicação no Cloudflare Pages ao final das fases locais.

Nenhuma dessas pendências autoriza a IA a criar informações biográficas ou ativos falsos.

---

## 2. Sequência resumida e gates

| ID | Fase | Dependência | Principal entrega | Status |
| --- | --- | --- | --- | --- |
| **F0** | Fundação | Documentos disponíveis | Astro estático, tokens, layout e componentes-base | Não iniciada |
| **F1** | Homepage | F0 validada | Home tipográfica, responsiva e navegável | Não iniciada |
| **F2** | Conteúdo e páginas | F1 + conteúdo real | Rotas de competências, About, Contact e cases existentes | Não autorizada |
| **F3** | Acabamento e QA | F2 suficiente | Motion discreto, SEO, testes e polimento | Não autorizada |
| **F4** | Publicação e evolução | F3 aprovada | Cloudflare Pages + domínio/monitoramento básico | Não autorizada |

**Fluxo obrigatório:** `F0 → F1 → revisão → F2 → revisão → F3 → aprovação para publicação → F4`.

> **Regra de execução:** ao receber `initial.md` como instrução, a IA pode implementar **F0 e F1**, validar, registrar pendências e **parar**. Não iniciar F2–F4 por iniciativa própria.

---

## 3. F0 — Fundação técnica e visual

**Objetivo:** criar uma aplicação Astro mínima e uma base reutilizável consistente com o Design System.

### F0.1 — Inspeção e setup

- [ ] Inspecionar a pasta atual e identificar arquivos existentes; **não sobrescrever** alterações do usuário.
- [ ] Verificar presença de `README.md`, `rules.md`, `initial.md` e deste `plan.md`.
- [ ] Garantir `docs/design-system.json` usando o **JSON adaptado** (`design-system-portfolio-v1.json`); não importar o JSON de extração técnica da IVERSON como tokens finais.
- [ ] Inicializar **Astro + TypeScript** no diretório correto somente se o projeto ainda não existir.
- [ ] Integrar **Tailwind CSS 4** pelo método suportado pelo Astro, sem padrões de Tailwind 3.
- [ ] Configurar `output: 'static'`, `.node-version` com `22` e `package-lock.json` versionável.
- [ ] Conferir scripts `dev`, `build`, `preview` e verificação de tipos quando configurada.
- [ ] Confirmar que não há Next.js, SSR, React obrigatório nem `@astrojs/cloudflare`.

### F0.2 — Tokens e fundação de UI

- [ ] Centralizar tokens em `src/styles/tokens.css`, preservando valores aprovados.
- [ ] Criar `src/styles/fonts.css` e declarar **somente** fontes que estiverem licenciadas/disponíveis; caso contrário usar fallbacks temporários.
- [ ] Criar `src/styles/global.css` com Tailwind 4, reset/base e importações consistentes.
- [ ] Criar `src/layouts/BaseLayout.astro` com idioma, metadados básicos e CSS global importado uma vez.
- [ ] Criar `SiteHeader.astro`, `SiteFooter.astro`, `Container.astro` e os componentes tipográficos **que tenham uso real**.
- [ ] Garantir contraste adequado, foco visível, HTML semântico e uma única tag `h1` por página.
- [ ] Criar `src/content/profile.ts` e `src/content/projects.ts` com tipos claros e **sem dados fictícios**.

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

- [ ] `npm run build` executado com sucesso.
- [ ] `dist/index.html` gerado.
- [ ] Background, textos, tipografia/fallback e grid usam tokens centralizados.
- [ ] Nenhum arquivo proprietário da IVERSON ou fonte sem licença entrou no projeto.
- [ ] Relatório do agente registra arquivos, comandos realmente executados e bloqueios.

**Gate:** a aplicação estática compila e a fundação visual é confiável. A F1 pode começar durante a mesma primeira execução se a F0 estiver consistente.

---

## 4. F1 — Homepage e direção de arte

**Objetivo:** transformar a fundação em uma homepage pessoal reconhecível e de alta qualidade **sem depender de animações**.

### F1.1 — Estrutura e hierarquia

- [ ] Implementar header tipográfico com marca pessoal discreta e navegação **somente para destinos existentes**.
- [ ] Implementar hero monumental com **CALEB LOPES** e quebra controlada em desktop e mobile.
- [ ] Incluir posicionamento curto e provisório, marcando-o para revisão de copy.
- [ ] Implementar **Selected Work** como lista editorial com números/linhas/metadados **apenas se houver projetos reais**.
- [ ] Se não houver projetos cadastrados, ocultar a listagem ou mostrar estado vazio intencional; **não inventar cases**.
- [ ] Apresentar as três áreas: **Artificial Intelligence**, **Development** e **Business & Growth**.
- [ ] Para rotas futuras não criadas, apontar para seções já existentes ou mostrar texto sem link. **Zero links quebrados**.
- [ ] Incluir apresentação pessoal concisa com informações confirmadas e rodapé com links reais ou sem links indisponíveis.

### F1.2 — Responsividade e comportamento

- [ ] Verificar larguras **360, 390, 768, 1024, 1440 e 1920px** quando houver navegador disponível.
- [ ] Tratar viewport baixo e títulos grandes sem overflow horizontal.
- [ ] Ajustar composição especificamente no mobile, em vez de apenas reduzir o desktop.
- [ ] Garantir navegação por teclado e toque, `focus-visible` e contraste de textos pequenos.
- [ ] Evitar vídeos, reveals e bibliotecas de animação nesta primeira versão.
- [ ] Conferir semanticamente headings, links, landmarks e legibilidade.

### Entregáveis F1

- `src/pages/index.astro` funcional.
- Componentes utilizados na homepage (sem duplicações desnecessárias).
- Conteúdo provisório **explicitamente identificado** e preparado para substituição.
- Homepage que transmite **minimalismo editorial forte**, com Söhne Breit/Söhne ou fallback provisório.

### Validação e gate F1

- [ ] `npm run build` e `npm run preview` executados quando o ambiente permitir.
- [ ] A home é utilizável sem animações ou JS adicional.
- [ ] Não há links mortos nem conteúdo profissional inventado.
- [ ] Inspeção responsiva e visual registrada com **viewports realmente verificadas**.
- [ ] Diferenças decorrentes de fonte fallback foram documentadas sem alegar fidelidade total.
- [ ] Mudanças, testes e pendências foram relatados.

**Gate:** apresentar a homepage para revisão visual do proprietário. **Parar após F1** na execução comandada por `initial.md`.

---

## 5. F2 — Conteúdo real e rotas internas

**Pré-requisito:** aprovação ou feedback da homepage e disponibilidade de conteúdo confirmado. **Não executar sem novo pedido.**

### F2.1 — Arquitetura e páginas

- [ ] Implementar `/ai` com projetos/experimentos e contexto verificável.
- [ ] Implementar `/development` para software e Salesforce, sem afirmar competências não comprovadas.
- [ ] Implementar `/business` para marketing, vendas e growth com histórico e resultados documentáveis.
- [ ] Implementar `/about` com narrativa profissional consistente e informações validadas.
- [ ] Implementar `/contact` com meios de contato autorizados.
- [ ] Ajustar navegação para incluir **somente** rotas concluídas.
- [ ] Manter design coerente entre todas as rotas, sem templates visuais distintos por área.

### F2.2 — Estudos de caso

- [ ] Definir schema de projeto local e tipado: título, área, categoria (profissional/pessoal/experimento/estudo), resumo, papel, evidências, links e conteúdo.
- [ ] Criar `/projects/[slug]` com **`getStaticPaths()`** apenas para casos reais cadastrados.
- [ ] Estruturar cada case em **contexto → papel → processo → evidência/resultado → links**.
- [ ] Conferir que projetos sem métricas reais não exibam números estimados como fatos.
- [ ] Verificar que toda URL de projeto/demonstração funcione e que a autoria esteja correta.
- [ ] Incluir imagens/prints de autoria própria ou com direitos de uso, otimizados quando necessário.

### Gate F2

- [ ] Rotas planejadas têm conteúdo útil e não são páginas vazias.
- [ ] A navegação funciona inclusive acessando as rotas diretamente.
- [ ] Não existem placeholders enganosos, experiências inventadas ou links internos quebrados.
- [ ] Build estático inclui todas as rotas realmente implementadas.

---

## 6. F3 — Acabamento, SEO e Quality Assurance

**Pré-requisito:** estrutura/conteúdo principal suficientemente estáveis. **Não executar sem novo pedido.**

### F3.1 — Polimento visual e movimento

- [ ] Refinar proporções dos títulos, espaços negativos, alinhamentos e ritmo entre seções.
- [ ] Revisar estados `hover`, `active` e `focus` dos links editoriais.
- [ ] Adicionar microinterações CSS **somente onde melhorarem orientação ou feedback**.
- [ ] Adicionar reveals pontuais somente se a interface funcionar perfeitamente sem eles.
- [ ] Respeitar `prefers-reduced-motion: reduce` e evitar conteúdo invisível quando o JS falhar.
- [ ] Verificar carregamento de fontes licenciadas, pesos reais, FOUT/CLS e fallback.

### F3.2 — Metadados e entrega

- [ ] Criar favicon/monograma **original**.
- [ ] Definir `title` e `description` únicos para cada página.
- [ ] Criar imagem Open Graph original e revisar preview de compartilhamento.
- [ ] Configurar canonical/`site` **apenas com URL real definida**.
- [ ] Tratar imagens responsivas, tamanhos intrínsecos e carregamento eficiente.
- [ ] Revisar semântica, contraste com alvo **WCAG AA**, teclado e links externos.
- [ ] Medir desempenho com ferramentas realmente disponíveis; registrar resultados e ambiente.
- [ ] Garantir ausência de segredos, trackers não aprovados e assets de terceiros não autorizados.

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

**Gate F3:** entregar site pronto para aprovação final. **Não publicar** por conta própria.

---

## 7. F4 — Publicação no Cloudflare Pages

**Pré-requisito:** revisão final concluída e **autorização explícita** do proprietário. A publicação não faz parte da primeira execução da IDE.

### F4.1 — Pré-deploy

- [ ] Revisar os arquivos versionados e remover credenciais, `.env` privados, assets da IVERSON e fontes não licenciadas.
- [ ] Confirmar a branch de produção `main` e lockfile versionado.
- [ ] Rodar `npm run build` e verificar `dist/index.html` e as rotas publicáveis.
- [ ] Confirmar configurações necessárias em `astro.config.mjs`, sem SSR.
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

> **Estado atual:** nenhum código do portfólio foi implementado ou testado no contexto da criação deste documento. Os checkboxes permanecem abertos até execução comprovada na IDE.

| Data | Fase/tarefa | Arquivos modificados | Validação realizada | Status/bloqueio |
| --- | --- | --- | --- | --- |
| 2026-11-16 | Criação do plano | `plan.md` | Revisão de consistência com README, rules, initial e JSON | Planejado; sem implementação |

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
