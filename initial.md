# INITIAL.md — Inicialização do portfólio pessoal

> **Instrução inicial para o agente de código da IDE**  
> **Projeto:** Caleb Lopes — Personal Portfolio  
> **Stack obrigatória:** Astro + TypeScript + Tailwind CSS 4, com geração estática para Cloudflare Pages  
> **Escopo desta execução:** fundação técnica + primeira versão funcional da homepage  
> **Status:** briefing de implementação; as tarefas abaixo ainda precisam ser executadas na IDE.

## 1. Sua missão

Você é o agente responsável pela **primeira implementação** do meu portfólio pessoal. Trabalhe diretamente neste repositório, criando e editando arquivos quando necessário, sem reescrever decisões já aprovadas.

O site deve comunicar minha atuação na interseção de **Artificial Intelligence, Development e Business & Growth**. Ele complementa meu currículo e deve permitir que recrutadores explorem minhas competências e projetos de maneira clara e verificável.

**Princípio:** a tipografia é a identidade; a interface não compete com o conteúdo.

### Direção criativa

- **70% de inspiração na linguagem visual da [IVERSON](https://iverson.inc/):** preto profundo, composição editorial, títulos monumentais, hierarquia forte, espaço negativo e movimento contido.
- **30% de identidade própria:** marca pessoal, narrativa profissional, organização das áreas e tipografia **Söhne Breit + Söhne**.
- A proporção **70/30 é diretriz criativa**, não uma medida técnica.
- O resultado deve parecer **um site pessoal premium**, nunca a homepage de uma agência, um SaaS ou um template genérico de programação.
- A IVERSON é uma referência de linguagem, **não** uma fonte para copiar layouts exatos, código compilado, branding, textos, imagens, vídeos ou arquivos de fonte.

## 2. Leia antes de escrever código

Nesta ordem, leia integralmente:

1. `rules.md` — comportamento obrigatório, restrições e critérios de qualidade.
2. `README.md` — contexto do produto, arquitetura, roadmap e publicação.
3. `docs/design-system.json` — **fonte de verdade dos tokens visuais**.
4. Os arquivos existentes do projeto, para entender o estado atual antes de alterar qualquer coisa.

Se `docs/design-system.json` ainda não existir e estiver disponível `design-system-portfolio-v1.json` na raiz, **copie-o** para `docs/design-system.json`; não recrie tokens manualmente. Se nenhum desses arquivos estiver disponível, **não invente o Design System**: registre o bloqueio e implemente somente o que puder ser feito com segurança.

Os arquivos `design-system.json` (extração original), HTML salvo da IVERSON e `site-source.zip`, caso presentes, são **materiais de auditoria**; nunca os incorpore diretamente à aplicação.

### Prioridade em caso de conflito

Pedido explícito atual → integridade/segurança/acessibilidade → tokens de `docs/design-system.json` → arquitetura do `README.md` → regras de execução de `rules.md` → referências externas.

## 3. Decisões técnicas inegociáveis

| Área | Decisão |
| --- | --- |
| Framework | **Astro** com componentes `.astro` |
| Linguagem | **TypeScript** |
| Estilos | **Tailwind CSS 4 + CSS nativo** |
| Renderização | **SSG** (`output: 'static'`) |
| Conteúdo | Dados locais tipados; sem CMS no MVP |
| Interações | HTML/CSS primeiro; JavaScript apenas quando necessário |
| Hospedagem futura | **Cloudflare Pages** |
| Comando de build | `npm run build` |
| Diretório publicado | **`dist/`** |
| Versão de Node | **22**, registrada em `.node-version` |

Não introduza Next.js, React, SSR, `@astrojs/cloudflare`, banco de dados, autenticação, bibliotecas de animação ou serviços externos sem necessidade aprovada. **O Cloudflare Pages hospedará os arquivos estáticos.** Não configure deploy real nem domínio personalizado nesta primeira execução.

Se o projeto Astro ainda não existir, inicialize-o **na pasta correta sem apagar arquivos fornecidos**, selecionando uma configuração mínima com TypeScript. Em seguida, integre Tailwind CSS 4 pelo caminho oficial do Astro (`npx astro add tailwind`). Se já existir um projeto configurado, inspecione-o e adapte apenas o necessário — não crie um projeto paralelo.

## 4. Design System a implementar

Use os valores exatos de `docs/design-system.json`. Referência resumida:

| Token | Valor |
| --- | --- |
| Fundo principal | `#060606` |
| Texto principal | `#FCFCFC` |
| Texto secundário | `#A5A5A5` |
| Texto terciário | `#858585` |
| Superfície | `#141414` |
| Divisória | `#292929` |
| Display/H1/H2 | **Söhne Breit**, pesos e escala definidos no JSON |
| Corpo/navegação | **Söhne**, pesos e escala definidos no JSON |
| Grid | 16 colunas desktop / 8 tablet / 4 mobile |
| Gap de grid | 12px |
| Gutter | 20px desktop / 16px mobile |

Implemente os tokens de forma centralizada (`src/styles/tokens.css`) e mantenha a tipografia em `src/styles/fonts.css`. Use `src/styles/global.css` como ponto de importação, incluindo Tailwind 4. Evite espalhar cores e medidas arbitrárias por componentes.

**Fontes são comerciais:** não baixar, copiar, redistribuir, extrair da IVERSON ou fingir possuir Söhne/Söhne Breit. Se os arquivos de webfont licenciados não estiverem no projeto, use **fallbacks temporários de sistema**, estruturando o CSS para a troca futura. Registre claramente essa pendência no relatório final. Não escolha uma nova fonte definitiva por conta própria.

### Restrições visuais

- Fundo quase preto; branco e cinzas como linguagem dominante.
- Títulos em escala monumental, com quebras de linha intencionais.
- Muito espaço negativo, divisórias finas e composição editorial.
- Sem cards coloridos, gradientes decorativos, sombras pesadas, barras de habilidades, excesso de ícones ou animações gratuitas.
- A primeira tela deve funcionar visualmente **sem animações**.
- Preservar legibilidade em telas pequenas; não deixar o nome vazar horizontalmente.

## 5. Entrega desta primeira execução

Implemente **somente Fase 0 (Fundação) e Fase 1 (Homepage) do README**. Não avance automaticamente para estudos de caso completos, CMS, animações avançadas, analytics ou deploy.

### Etapa A — Inspecionar e preparar

1. Identificar se o repositório está vazio, parcialmente implementado ou já contém um projeto Astro.
2. Preservar todos os documentos e arquivos preexistentes.
3. Garantir `.node-version` com `22`, scripts adequados em `package.json` e lockfile versionável.
4. Configurar Astro em modo estático e Tailwind CSS 4, evitando padrões de Tailwind 3 ou APIs Next.js.
5. Organizar `docs/design-system.json` sem alterar tokens aprovados.

### Etapa B — Construir a fundação visual

Criar ou ajustar, conforme necessário:

```text
src/
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── layout/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   └── Container.astro
│   ├── typography/
│   │   ├── DisplayHeading.astro
│   │   └── Eyebrow.astro
│   └── projects/
│       └── ProjectIndex.astro
├── content/
│   ├── profile.ts
│   └── projects.ts
├── pages/
│   └── index.astro
└── styles/
    ├── global.css
    ├── fonts.css
    └── tokens.css
```

A estrutura é uma orientação, não uma obrigação de criar componentes vazios. **Crie cada componente somente se ele tiver uso real nesta entrega.** O `BaseLayout.astro` deve centralizar HTML semântico, `<head>`, metadados básicos, import global de estilos e estrutura compartilhada.

### Etapa C — Implementar a homepage

Construir uma homepage minimalista e responsiva contendo:

1. **Header editorial:** marca pessoal tipográfica discreta e links funcionais.
2. **Hero dominante:** nome **CALEB LOPES** em caixa alta, com forte presença visual e quebras controladas.
3. **Posicionamento curto:** texto inicial provisório, revisável, sobre tecnologia, IA e negócios.
4. **Selected Work:** índice editorial com divisórias, preparado para exibir **somente projetos reais**. Se `projects.ts` estiver vazio, exibir um estado vazio elegante ou omitir a lista de projetos; não criar cases fictícios.
5. **Três áreas:** Artificial Intelligence, Development e Business & Growth. Se as páginas `/ai`, `/development` e `/business` ainda não existirem, use seções internas reais ou texto não clicável; **não publique links quebrados**.
6. **About/Contact:** apresentação breve sem experiências inventadas e meios de contato apenas se estiverem confirmados nos arquivos existentes.
7. **Footer discreto:** assinatura pessoal e links verificados, quando disponíveis.

**Copy provisória permitida:** `Building at the intersection of technology, artificial intelligence and business.` Trate-a como *placeholder*, não como texto final aprovado. Não invente cargos, empresas, métricas, certificados, projetos ou links de redes sociais. O conteúdo final deve poder ser substituído por dados em `src/content/`.

### Etapa D — Ajustar a responsividade

Valide, conforme ferramentas disponíveis, a interface em larguras de **360, 390, 768, 1024, 1440 e 1920 px**. A experiência mobile deve ter hierarquia própria, evitando apenas reduzir a versão desktop proporcionalmente. O menu, os títulos, os links e o foco de teclado precisam continuar utilizáveis.

## 6. Qualidade e critérios de aceite

A entrega inicial só está pronta quando:

- [ ] A homepage gera HTML estático e carrega com o visual principal correto.
- [ ] O build termina sem erros e produz `dist/index.html`.
- [ ] Não existem links internos quebrados nem overflow horizontal evidente.
- [ ] Os estilos usam tokens do JSON; fallbacks tipográficos estão documentados.
- [ ] A estrutura é semântica (`header`, `nav`, `main`, `section`, `footer`; headings em ordem lógica).
- [ ] Os links são acessíveis por teclado e exibem foco visível.
- [ ] Elementos interativos têm rótulos adequados e contraste suficiente.
- [ ] `prefers-reduced-motion` é respeitado se houver transições ou reveals.
- [ ] Nenhum conteúdo profissional fictício foi criado.
- [ ] Nenhuma dependência pesada ou recurso de servidor foi incluído por conveniência.
- [ ] O projeto permanece compatível com deploy estático no Cloudflare Pages (`npm run build` → `dist/`).

Execute, quando o ambiente permitir:

```bash
npm run build
npm run preview
```

Se houver script de verificação TypeScript/Astro já configurado, execute-o também. Não diga que executou testes de navegador, acessibilidade, Lighthouse ou publicação se não os realizou. Anote toda validação não executada.

## 7. Fluxo de trabalho obrigatório do agente

**Antes de modificar arquivos**, faça uma leitura rápida do repositório e apresente um plano de 3–6 itens, com os principais arquivos a criar/alterar. Em seguida, **implemente diretamente** as etapas A–D e valide o resultado, sem pedir aprovação a cada arquivo. Faça perguntas somente diante de bloqueio real ou risco de sobrescrever trabalho existente.

**Ao concluir**, responda exatamente nesta estrutura:

```text
Objetivo: [resumo da primeira entrega]
Arquivos criados/alterados: [nomes e finalidade]
Implementado: [itens concluídos da homepage e fundação]
Validação: [comandos realmente executados e resultados]
Pendências: [fontes licenciadas, links reais, conteúdo, revisão visual etc.]
Próxima etapa sugerida: [Fase 2 do README; não executar sem solicitação]
```

Não substitua implementação por explicação; **edite os arquivos do projeto**. Não afirme que algo está pronto sem evidência de arquivo ou build. Não configure Cloudflare Pages, Git remoto nem publique o site nesta tarefa.

---

## 8. Primeira instrução: execute agora

**Leia `rules.md`, `README.md`, `docs/design-system.json` e o estado atual do repositório. Depois implemente a fundação Astro + TypeScript + Tailwind CSS 4 e uma homepage pessoal estática, editorial e responsiva, de acordo com este `initial.md`. Priorize uma boa composição tipográfica antes de qualquer animação. Ao final, rode o build, registre o que foi validado e liste pendências reais.**
