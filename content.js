/*
 * Conteúdo do roadmap.
 * Cada item tem um id único (é a chave do progresso salvo; não mude ids já usados).
 * Campos de requisito: summary, time, why, todo, done, code, pitfalls, resources
 * Campos de teste:     summary, time, prompt, given, done, hints, solution, pitfalls, resources
 * Em textos simples, use `código` e **negrito**.
 */
window.ROADMAP = [
  /* =====================================================================
   * ETAPA 0
   * ===================================================================== */
  {
    id: "e0", title: "Diagnóstico e ambiente", weeks: "Semana 1",
    goal: "Descobrir onde está sua base real antes de estudar o resto.",
    items: [
      {
        id: "e0-1", type: "req",
        text: "Git, Node.js 22+, VS Code e .NET SDK instalados e funcionando",
        summary: "Um ambiente estável para não perder horas com instalação no meio do estudo.",
        time: "1 a 2 horas",
        why: "Quase todo travamento de iniciante na primeira semana é ambiente: versão errada, PATH quebrado, SDK faltando. Resolver isso uma vez, com calma, libera o resto das 17 semanas para estudar o que importa.",
        todo: [
          "Instalar o Git e configurar `git config --global user.name` e `user.email` com o mesmo e-mail da sua conta do GitHub.",
          "Instalar o Node.js pelo **nvm** (no Linux) para trocar de versão sem sudo. Use a versão LTS atual, 22 ou mais nova.",
          "Instalar o **.NET SDK** na versão LTS atual e confirmar que o comando `dotnet` funciona em um terminal novo.",
          "No VS Code, instalar as extensões **C# Dev Kit**, **ESLint** e **Prettier**.",
          "Criar uma pasta `~/estudos` onde vão morar todos os exercícios do roadmap, cada um em um repositório."
        ],
        done: [
          "`git --version`, `node -v`, `npm -v` e `dotnet --list-sdks` mostram versões sem erro.",
          "`dotnet new console -o teste && cd teste && dotnet run` imprime \"Hello, World!\".",
          "`npm create vite@latest teste-react -- --template react-ts` cria um projeto que abre no navegador com `npm run dev`.",
          "Um commit feito no terminal aparece com o seu avatar no GitHub (sinal de que o e-mail está certo)."
        ],
        code: {
          lang: "bash", label: "Checagem rápida",
          src: `git --version
node -v && npm -v
dotnet --list-sdks
git config --global --list | grep user`
        },
        pitfalls: [
          "Instalar o Node com `sudo apt install nodejs` costuma trazer uma versão antiga. Prefira o nvm.",
          "Se o `dotnet` não for encontrado, feche e abra o terminal: o PATH só atualiza em sessões novas."
        ],
        resources: [
          { l: "nvm (instalação)", u: "https://github.com/nvm-sh/nvm#installing-and-updating" },
          { l: "Instalar .NET no Linux", u: "https://learn.microsoft.com/dotnet/core/install/linux" },
          { l: "Primeiros passos com Git", u: "https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git" }
        ]
      },
      {
        id: "e0-2", type: "req",
        text: "Repositório deste site publicado no GitHub Pages",
        summary: "Seu painel de acompanhamento no ar, com progresso salvo na nuvem.",
        time: "20 minutos",
        why: "Ter o roadmap visível no celular e no computador transforma o plano em hábito. E é o seu primeiro deploy do roadmap, por menor que seja.",
        todo: [
          "Ativar o GitHub Pages em Settings → Pages, com a branch `main` e a pasta `/ (root)`.",
          "Criar um token clássico com **apenas** o escopo `gist`.",
          "Conectar o token na seção \"Salvar na nuvem\" da página inicial.",
          "Abrir o site em um segundo dispositivo, conectar o mesmo token e conferir se o progresso aparece."
        ],
        done: [
          "`https://athoskolling.github.io/roadmap/` abre no celular e no computador.",
          "Marcar um item, recarregar a página e ver que ele continua marcado.",
          "Em outro dispositivo, \"Carregar da nuvem\" traz o mesmo progresso.",
          "Existe um Gist **secreto** chamado `roadmap-progress.json` na sua conta."
        ],
        pitfalls: [
          "Nunca coloque o token no código ou em um commit. Ele fica só no navegador.",
          "Se o Pages mostrar 404, espere alguns minutos e confira se a branch e a pasta estão certas."
        ],
        resources: [
          { l: "Documentação do GitHub Pages", u: "https://docs.github.com/pages/getting-started-with-github-pages" },
          { l: "Criar um token clássico", u: "https://docs.github.com/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic" }
        ]
      },
      {
        id: "e0-3", type: "test",
        text: "Resolver 5 problemas fáceis do LeetCode sem IA, anotando o tempo de cada um e onde travou",
        summary: "Um diagnóstico honesto da sua base, não uma prova. Errar aqui é informação útil.",
        time: "3 horas (até 30 min por problema)",
        prompt: "Resolva os cinco problemas abaixo **sem IA e sem consultar soluções**. Você pode consultar a documentação da linguagem (MDN, Microsoft Learn). Use um cronômetro e pare em 30 minutos, mesmo sem terminar. Para cada problema, anote: tempo gasto, se passou nos testes do site e o ponto exato em que travou.",
        given: {
          lang: "text", label: "Os cinco problemas",
          src: `1.   Two Sum                              (leetcode.com/problems/two-sum)
20.  Valid Parentheses                    (leetcode.com/problems/valid-parentheses)
21.  Merge Two Sorted Lists               (leetcode.com/problems/merge-two-sorted-lists)
121. Best Time to Buy and Sell Stock      (leetcode.com/problems/best-time-to-buy-and-sell-stock)
242. Valid Anagram                        (leetcode.com/problems/valid-anagram)

Registro sugerido (copie para um arquivo diagnostico.md):
| # | Tempo | Passou? | Onde travei |
|---|-------|---------|-------------|`
        },
        done: [
          "Os cinco problemas foram tentados de verdade, por pelo menos 15 minutos cada.",
          "A tabela de registro está preenchida, inclusive nos que você não terminou.",
          "Em cada \"onde travei\" há algo específico (\"não sabia como checar se um valor já foi visto\"), não genérico (\"difícil\").",
          "Depois do tempo, você leu uma solução e escreveu em uma linha a ideia que faltou."
        ],
        hints: [
          "Antes de codar, resolva um exemplo pequeno à mão no papel. O que você fez com os olhos é o algoritmo.",
          "Comece pela força bruta, mesmo lenta. Uma solução que funciona vale mais que uma ótima pela metade.",
          "Três ferramentas resolvem quase todos esses: um **mapa/dicionário** (para lembrar o que já viu), uma **pilha** (para pares que abrem e fecham) e **uma variável que guarda o melhor até agora**."
        ],
        solution: {
          notes: [
            "**Two Sum:** para cada número, verifique se `alvo - número` já está em um mapa. Se não estiver, guarde o número com seu índice. Uma passada, O(n).",
            "**Valid Parentheses:** empilhe os que abrem. Ao ver um que fecha, o topo da pilha precisa ser o par certo. No fim, a pilha deve estar vazia.",
            "**Merge Two Sorted Lists:** use um nó inicial falso (dummy) e um ponteiro que sempre anexa o menor dos dois nós atuais.",
            "**Best Time to Buy and Sell Stock:** percorra os preços guardando o menor preço visto até agora. O lucro de cada dia é `preço - menor`. Guarde o maior.",
            "**Valid Anagram:** conte as letras da primeira string e desconte as da segunda. Todas as contagens precisam voltar a zero."
          ],
          code: {
            lang: "js", label: "Two Sum, como referência",
            src: `function twoSum(nums, target) {
  const vistos = new Map(); // valor -> índice
  for (let i = 0; i < nums.length; i++) {
    const falta = target - nums[i];
    if (vistos.has(falta)) return [vistos.get(falta), i];
    vistos.set(nums[i], i);
  }
  return [];
}`
          }
        },
        pitfalls: [
          "Olhar a aba de soluções \"só para dar uma ideia\" invalida o diagnóstico. Use as dicas desta página no lugar.",
          "Não se compare com o tempo de outras pessoas. Esse registro é só para você."
        ],
        resources: [
          { l: "Map no MDN", u: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map" },
          { l: "Dictionary no C#", u: "https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2" }
        ]
      },
      {
        id: "e0-4", type: "test",
        text: "Escrever os 3 temas em que mais travou; eles vão guiar as próximas etapas",
        summary: "Transformar o diagnóstico em um plano de reforço.",
        time: "30 minutos",
        prompt: "Com base no registro do teste anterior, escreva no `diagnostico.md` os **três temas** que mais te travaram. Para cada um, escreva: a evidência (em qual problema e em que momento) e uma ação concreta para as próximas semanas.",
        done: [
          "Os três temas são específicos e acionáveis (\"usar Map para lembrar valores\"), não amplos (\"algoritmos\").",
          "Cada tema aponta para pelo menos um problema do diagnóstico como evidência.",
          "Cada ação tem um entregável e um prazo (\"resolver 3 problemas com Map até domingo\").",
          "O arquivo está commitado em um repositório seu."
        ],
        hints: [
          "Releia a coluna \"onde travei\" e procure padrões. Dois travamentos com a mesma causa são um tema.",
          "Separe travamentos de **linguagem** (sintaxe, métodos), de **lógica** (não saber o caminho) e de **leitura** (não entender o enunciado). Cada tipo pede uma ação diferente."
        ],
        solution: {
          notes: [
            "Um exemplo de como pode ficar, para comparar com o seu formato:"
          ],
          code: {
            lang: "md", label: "diagnostico.md (exemplo)",
            src: `## Temas para reforçar

1. Usar Map/Dictionary para lembrar valores já vistos
   - Evidência: Two Sum e Valid Anagram; só pensei em dois loops aninhados.
   - Ação: estudar Map no MDN e resolver Contains Duplicate e Group Anagrams até domingo.

2. Simular estruturas (pilha) em vez de pensar só em loops
   - Evidência: Valid Parentheses; tentei contar parênteses e falhou em "([)]".
   - Ação: implementar uma pilha à mão e resolver 2 problemas de pilha na semana 2.

3. Ler o enunciado e criar casos de teste antes de codar
   - Evidência: Stock; não percebi que precisava comprar antes de vender.
   - Ação: em todo problema, escrever 3 exemplos à mão antes da primeira linha.`
          }
        }
      }
    ]
  },

  /* =====================================================================
   * ETAPA 1
   * ===================================================================== */
  {
    id: "e1", title: "JavaScript e TypeScript", weeks: "Semanas 1 a 4",
    goal: "Ler e escrever JS moderno sem depender de IA.",
    items: [
      {
        id: "e1-1", type: "req",
        text: "Funções, arrow functions, arrays (map, filter, reduce), objetos e desestruturação",
        summary: "O vocabulário básico que aparece em toda linha de JS moderno.",
        time: "Semana 1",
        why: "React, Node e qualquer código de mercado assumem que você lê `map`, `filter`, spread e desestruturação sem pensar. Se cada uma dessas linhas exige consulta, todo o resto fica lento.",
        todo: [
          "Entender a diferença entre `function`, função anônima e arrow function, incluindo quando o `this` muda.",
          "Usar `map` (transformar), `filter` (selecionar), `find`/`some`/`every` (perguntar) e `reduce` (acumular) sobre um array de objetos.",
          "Criar e copiar objetos e arrays com spread (`{...obj}`, `[...arr]`) sem mutar o original.",
          "Usar desestruturação em variáveis e em parâmetros de função, com valores padrão.",
          "Praticar com um array de 10 produtos inventados: filtrar por categoria, somar preços, criar uma lista só com nomes."
        ],
        done: [
          "Você escreve as cinco operações sobre o array de produtos sem consultar nada.",
          "Consegue explicar por que `arr.sort()` muda o array original e `arr.toSorted()` não.",
          "Consegue reescrever um `for` qualquer usando `map`/`filter`/`reduce`, e sabe quando o `for` é mais claro."
        ],
        code: {
          lang: "js", label: "O que você deve conseguir ler de primeira",
          src: `const produtos = [
  { nome: "Teclado", preco: 150, categoria: "periferico" },
  { nome: "Monitor", preco: 900, categoria: "tela" },
  { nome: "Mouse", preco: 80, categoria: "periferico" },
];

const perifericos = produtos.filter((p) => p.categoria === "periferico");
const nomes = produtos.map(({ nome }) => nome);
const total = produtos.reduce((soma, p) => soma + p.preco, 0);
const comDesconto = produtos.map((p) => ({ ...p, preco: p.preco * 0.9 }));`
        },
        pitfalls: [
          "Esquecer o valor inicial do `reduce` (o `0` acima) gera bugs com arrays vazios.",
          "Arrow function com chaves precisa de `return`. Para retornar um objeto direto, envolva em parênteses: `() => ({ ... })`."
        ],
        resources: [
          { l: "javascript.info: métodos de array", u: "https://javascript.info/array-methods" },
          { l: "MDN: desestruturação", u: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" },
          { l: "freeCodeCamp: JavaScript Algorithms and Data Structures", u: "https://www.freecodecamp.org/learn" }
        ]
      },
      {
        id: "e1-2", type: "req",
        text: "Promises, async/await e tratamento de erro com try/catch",
        summary: "Como o JavaScript lida com coisas que demoram: rede, arquivos, timers.",
        time: "Semana 2",
        why: "Toda chamada de API, leitura de banco ou arquivo é assíncrona. Se você não entende o que uma Promise é, o código \"funciona às vezes\" e você não sabe por quê.",
        todo: [
          "Entender os três estados de uma Promise: pendente, resolvida e rejeitada.",
          "Saber o que o event loop faz, em nível conceitual: por que `setTimeout(fn, 0)` roda depois do código síncrono.",
          "Escrever a mesma lógica com `.then().catch()` e com `async/await` + `try/catch`.",
          "Rodar tarefas em paralelo com `Promise.all` e entender quando usar `Promise.allSettled`.",
          "Criar uma função `esperar(ms)` que retorna uma Promise, e usá-la com `await`."
        ],
        done: [
          "Você prevê a ordem de impressão de um trecho com `console.log`, `setTimeout` e `Promise.resolve().then`.",
          "Sabe explicar por que um `await` dentro de `forEach` não espera, e como corrigir com `for...of`.",
          "Todo `await` do seu código está dentro de um `try/catch` ou de uma função cujo chamador trata o erro."
        ],
        code: {
          lang: "js", label: "Mesma lógica, dois estilos",
          src: `const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// com then/catch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((todo) => console.log(todo.title))
  .catch((erro) => console.error("Falhou:", erro));

// com async/await
async function carregar() {
  try {
    await esperar(500);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await res.json();
    console.log(todo.title);
  } catch (erro) {
    console.error("Falhou:", erro);
  }
}`
        },
        pitfalls: [
          "Esquecer o `await` faz você trabalhar com a Promise, não com o valor. O sintoma é `[object Promise]` na tela.",
          "Um `catch` vazio esconde bugs. Sempre registre ou trate o erro."
        ],
        resources: [
          { l: "javascript.info: Promises e async/await", u: "https://javascript.info/async" },
          { l: "MDN: usando Promises", u: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises" },
          { l: "Vídeo: o event loop (Philip Roberts)", u: "https://www.youtube.com/watch?v=8aGhZQkoFbQ" }
        ]
      },
      {
        id: "e1-3", type: "req",
        text: "Módulos (import/export) e TypeScript básico: interfaces, union types e generics simples",
        summary: "Organizar código em arquivos e deixar o compilador encontrar bugs por você.",
        time: "Semanas 3 e 4",
        why: "Quase todo projeto JS profissional hoje é em TypeScript. E como você vem do C#, a tipagem vai parecer familiar: o desafio é entender onde o TS é diferente.",
        todo: [
          "Separar um projeto em módulos com `export` nomeado e `export default`, e saber quando usar cada um.",
          "Criar um projeto com `npm init -y`, instalar `typescript` e gerar um `tsconfig.json` com `\"strict\": true`.",
          "Modelar dados com `interface` e `type`, e entender a diferença prática.",
          "Usar union types (`\"pendente\" | \"feito\"`) e narrowing com `if`/`switch`.",
          "Escrever uma função genérica simples, como `primeiro<T>(lista: T[]): T | undefined`."
        ],
        done: [
          "`npx tsc --noEmit` roda sem erros com `strict` ligado.",
          "Nenhum `any` explícito no seu código.",
          "Você converte o exercício de produtos da etapa anterior para TS, com uma interface `Produto`."
        ],
        code: {
          lang: "ts", label: "Tipos que você vai usar o tempo todo",
          src: `export type Status = "pendente" | "andamento" | "feito";

export interface Tarefa {
  id: number;
  titulo: string;
  status: Status;
  prazo?: string; // opcional
}

export function primeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}

function rotulo(status: Status): string {
  switch (status) {
    case "pendente": return "A fazer";
    case "andamento": return "Fazendo";
    case "feito": return "Pronto";
  }
}`
        },
        pitfalls: [
          "Usar `as` para \"calar\" o compilador esconde o erro em vez de resolver.",
          "Em TS, tipos somem em tempo de execução. Dados vindos de uma API não são validados só porque você declarou a interface."
        ],
        resources: [
          { l: "TypeScript Handbook", u: "https://www.typescriptlang.org/docs/handbook/intro.html" },
          { l: "TypeScript para programadores de C#", u: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html" },
          { l: "MDN: módulos JavaScript", u: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules" }
        ]
      },
      {
        id: "e1-4", type: "test",
        text: "Sem IA, escrever uma função que agrupa uma lista de pedidos por status",
        summary: "Transformar uma lista em um objeto agrupado, o tipo de tarefa que aparece todo dia.",
        time: "45 minutos",
        prompt: "Escreva a função `agruparPorStatus(pedidos)`. Ela recebe um array de pedidos e devolve um objeto em que cada chave é um status e cada valor é a lista de pedidos com aquele status. A função **não pode alterar** o array original. Depois, escreva uma segunda versão que devolve, para cada status, só a **quantidade** e o **valor total**.",
        given: {
          lang: "js", label: "Entrada e saída esperada",
          src: `const pedidos = [
  { id: 1, cliente: "Ana",   status: "pago",      valor: 120 },
  { id: 2, cliente: "Bruno", status: "pendente",  valor: 80 },
  { id: 3, cliente: "Caio",  status: "pago",      valor: 45 },
  { id: 4, cliente: "Duda",  status: "cancelado", valor: 300 },
];

agruparPorStatus(pedidos);
// {
//   pago:      [ {id: 1, ...}, {id: 3, ...} ],
//   pendente:  [ {id: 2, ...} ],
//   cancelado: [ {id: 4, ...} ],
// }

resumoPorStatus(pedidos);
// { pago: { quantidade: 2, total: 165 }, pendente: { ... }, cancelado: { ... } }`
        },
        done: [
          "As duas funções devolvem exatamente o formato esperado.",
          "Funcionam com array vazio (devolvem `{}`).",
          "O array `pedidos` é igual antes e depois da chamada.",
          "Você escreveu sem IA e sem copiar de lugar nenhum. Consultar a documentação do MDN é permitido."
        ],
        hints: [
          "Comece com um objeto vazio, `{}`, e percorra os pedidos com `for...of`. Faça funcionar antes de pensar em `reduce`.",
          "Para cada pedido, a pergunta é: \"já existe uma lista para esse status?\". Se não existir, crie.",
          "A versão com `reduce` é o mesmo raciocínio: o objeto vazio vira o valor inicial, e o corpo do loop vira o corpo da função de redução."
        ],
        solution: {
          notes: [
            "A versão com `for...of` é a mais legível. A versão com `reduce` é a mesma ideia em outra forma. Desde 2024 o JS também tem `Object.groupBy`, mas o objetivo aqui é entender o mecanismo.",
            "Repare que nenhum pedido é modificado: só criamos listas novas e colocamos referências neles."
          ],
          code: {
            lang: "js", label: "Solução de referência",
            src: `function agruparPorStatus(pedidos) {
  const grupos = {};
  for (const pedido of pedidos) {
    if (!grupos[pedido.status]) grupos[pedido.status] = [];
    grupos[pedido.status].push(pedido);
  }
  return grupos;
}

function resumoPorStatus(pedidos) {
  return pedidos.reduce((acc, { status, valor }) => {
    const atual = acc[status] ?? { quantidade: 0, total: 0 };
    acc[status] = { quantidade: atual.quantidade + 1, total: atual.total + valor };
    return acc;
  }, {});
}

// Equivalente moderno (Node 21+):
// Object.groupBy(pedidos, (p) => p.status);`
          }
        },
        pitfalls: [
          "Usar `pedidos.sort()` ou `splice` no meio do caminho altera o array original.",
          "Esquecer o `return acc` no `reduce` faz o acumulador virar `undefined` na segunda volta."
        ],
        resources: [
          { l: "MDN: Array.prototype.reduce", u: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" }
        ]
      },
      {
        id: "e1-5", type: "test",
        text: "Buscar dados de uma API pública tratando falha de rede e status HTTP de erro",
        summary: "Escrever o tipo de função de rede que não quebra a aplicação quando algo dá errado.",
        time: "1 hora",
        prompt: "Escreva `buscarUsuario(id)` usando `fetch` na API `https://jsonplaceholder.typicode.com/users/{id}`. A função **nunca lança exceção**: ela sempre devolve `{ ok: true, dados }` ou `{ ok: false, erro }`, com uma mensagem clara para cada caso abaixo. Teste cada caso de verdade.",
        given: {
          lang: "text", label: "Casos que precisam ser tratados",
          src: `1. Sucesso                      -> buscarUsuario(1)
2. Não encontrado (HTTP 404)    -> buscarUsuario(9999)
3. Outro erro HTTP (500, 503)   -> simule trocando a URL ou com httpstat.us/500
4. Falha de rede                -> desligue o Wi-Fi ou use uma URL com domínio inexistente
5. Demora demais (timeout 5s)   -> use AbortController
6. id inválido                  -> buscarUsuario("abc") não deve nem fazer a requisição`
        },
        done: [
          "Os seis casos foram testados e cada um devolve a mensagem certa.",
          "Nenhum caso faz a aplicação lançar um erro não tratado.",
          "Existe um timeout real, que cancela a requisição.",
          "Você sabe explicar por que um 404 **não** cai no `catch`."
        ],
        hints: [
          "O `fetch` só rejeita a Promise em falhas de rede. Para ele, um 404 é uma resposta válida. Verifique `res.ok` ou `res.status`.",
          "Para o timeout, crie um `AbortController`, passe `signal` no `fetch` e chame `controller.abort()` dentro de um `setTimeout`.",
          "Quando a requisição é abortada, o erro tem `name === \"AbortError\"` (ou `\"TimeoutError\"` se você usar `AbortSignal.timeout`). Use isso para separar timeout de falha de rede."
        ],
        solution: {
          notes: [
            "A ideia central é separar três momentos: validação antes da requisição, resposta HTTP (com `res.ok`) e exceções (rede, timeout, JSON inválido).",
            "`AbortSignal.timeout(ms)` é uma forma curta e moderna de criar o timeout."
          ],
          code: {
            lang: "js", label: "Solução de referência",
            src: `async function buscarUsuario(id) {
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    return { ok: false, erro: "id inválido" };
  }

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id,
      { signal: AbortSignal.timeout(5000) }
    );

    if (res.status === 404) return { ok: false, erro: "Usuário não encontrado" };
    if (!res.ok) return { ok: false, erro: "Erro do servidor (" + res.status + ")" };

    const dados = await res.json();
    return { ok: true, dados };
  } catch (e) {
    if (e.name === "TimeoutError" || e.name === "AbortError") {
      return { ok: false, erro: "A requisição demorou demais" };
    }
    if (e instanceof SyntaxError) return { ok: false, erro: "Resposta inválida" };
    return { ok: false, erro: "Sem conexão com o servidor" };
  }
}`
          }
        },
        pitfalls: [
          "Fazer `await res.json()` antes de checar `res.ok` pode quebrar quando o servidor devolve HTML de erro.",
          "Mostrar `e.message` cru para o usuário final expõe detalhes técnicos. Traduza para uma mensagem amigável."
        ],
        resources: [
          { l: "MDN: usando Fetch", u: "https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch" },
          { l: "MDN: AbortSignal.timeout", u: "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static" }
        ]
      },
      {
        id: "e1-6", type: "test",
        text: "Explicar por escrito a diferença entre Promise e callback, sem consultar nada",
        summary: "Se você explica, você entende. Esse teste pega o entendimento raso.",
        time: "30 minutos",
        prompt: "Sem consultar nada, escreva um texto de **150 a 300 palavras** explicando a diferença entre callbacks e Promises, como se fosse para um colega do primeiro semestre. Inclua um exemplo curto de código para cada um. Só depois de terminar, compare com a resposta de referência.",
        done: [
          "O texto explica o que é um callback e qual problema ele causa em código encadeado.",
          "Explica o que é uma Promise, seus três estados e como o erro é propagado.",
          "Explica que `async/await` é uma forma de escrever código com Promises, não algo diferente delas.",
          "Os dois exemplos de código rodam."
        ],
        hints: [
          "Pense em quem controla a execução: no callback, você entrega sua função para outra pessoa chamar. Na Promise, você recebe um objeto e decide o que fazer com ele.",
          "Pense também em como o erro chega até você em cada caso."
        ],
        solution: {
          notes: [
            "**Callback** é uma função que você passa para outra função chamar quando terminar. Funciona, mas tem dois problemas: aninhamento (cada passo dentro do anterior, o \"callback hell\") e inversão de controle (você confia que a outra função vai chamar seu callback uma única vez e passar o erro do jeito combinado, como no padrão `(erro, dados)` do Node).",
            "**Promise** é um objeto que representa um valor que ainda vai chegar. Ela tem três estados: pendente, resolvida ou rejeitada, e só muda de estado uma vez. Você encadeia passos com `.then()`, e um único `.catch()` no fim pega o erro de qualquer etapa, porque a rejeição é propagada pela cadeia.",
            "**async/await** é uma sintaxe sobre Promises: `await` pausa a função até a Promise resolver e permite usar `try/catch` comum. Toda função `async` devolve uma Promise."
          ],
          code: {
            lang: "js", label: "Os dois estilos lado a lado",
            src: `// Callback (padrão do Node: erro primeiro)
fs.readFile("dados.txt", "utf8", (erro, texto) => {
  if (erro) return console.error(erro);
  console.log(texto);
});

// Promise com async/await
const texto = await fs.promises.readFile("dados.txt", "utf8");
console.log(texto);`
          }
        }
      }
    ]
  },

  /* =====================================================================
   * ETAPA 2
   * ===================================================================== */
  {
    id: "e2", title: "Back-end com .NET e SQL", weeks: "Semanas 5 a 9",
    goal: "Construir uma API com camadas, banco de dados, autenticação e testes.",
    items: [
      {
        id: "e2-1", type: "req",
        text: "Projeto dividido em camadas (controllers, services, repositories) no TaskFlow ou outro projeto escolhido",
        summary: "Cada parte do código com uma responsabilidade clara, para dar para testar e mudar sem medo.",
        time: "Semana 5",
        why: "É o que diferencia um projeto de estudo de um projeto que um recrutador leva a sério. E é a base para os testes da etapa: se a regra de negócio está misturada com HTTP e banco, você não consegue testá-la isoladamente.",
        todo: [
          "**Controllers:** só recebem a requisição, chamam um service e devolvem a resposta HTTP. Nenhuma regra de negócio.",
          "**Services:** contêm as regras (\"uma tarefa concluída não pode voltar para pendente\"). Dependem de interfaces, não de classes concretas.",
          "**Repositories:** são a única camada que conhece o `DbContext` e o Entity Framework.",
          "Registrar tudo com injeção de dependência no `Program.cs`.",
          "Usar DTOs para entrada e saída, em vez de expor as entidades do banco diretamente."
        ],
        done: [
          "Nenhum controller referencia o `DbContext`.",
          "Cada service tem uma interface (`ITarefaService`) e é injetado pelo construtor.",
          "Você consegue explicar em uma frase o que cada pasta faz.",
          "A entidade `Tarefa` nunca aparece como resposta JSON; quem aparece é um DTO."
        ],
        code: {
          lang: "text", label: "Estrutura sugerida",
          src: `TaskFlow.Api/
  Controllers/      TarefasController.cs
  Services/         ITarefaService.cs, TarefaService.cs
  Repositories/     ITarefaRepository.cs, TarefaRepository.cs
  Data/             AppDbContext.cs, Migrations/
  Models/           Tarefa.cs
  Dtos/             CriarTarefaDto.cs, TarefaRespostaDto.cs
  Program.cs

// Program.cs
builder.Services.AddScoped<ITarefaRepository, TarefaRepository>();
builder.Services.AddScoped<ITarefaService, TarefaService>();`
        },
        pitfalls: [
          "Criar camadas que só repassam chamadas, sem nenhuma regra, é burocracia. Se um service está vazio, questione se precisa dele.",
          "Clean Architecture completa com vários projetos é ótima para aprender, mas não é obrigatória aqui. Comece com pastas."
        ],
        resources: [
          { l: "Microsoft Learn: injeção de dependência no ASP.NET Core", u: "https://learn.microsoft.com/aspnet/core/fundamentals/dependency-injection" },
          { l: "Microsoft Learn: criar uma Web API", u: "https://learn.microsoft.com/aspnet/core/tutorials/first-web-api" }
        ]
      },
      {
        id: "e2-2", type: "req",
        text: "CRUD completo com Entity Framework Core e migrations",
        summary: "Criar, ler, atualizar e apagar dados de verdade, com o banco versionado.",
        time: "Semana 6",
        why: "CRUD é o feijão com arroz do back-end. Migrations fazem o banco evoluir junto com o código, sem você rodar SQL na mão em cada máquina.",
        todo: [
          "Criar a entidade `Tarefa` e o `AppDbContext`, conectando em PostgreSQL ou SQLite.",
          "Gerar a primeira migration (`dotnet ef migrations add Inicial`) e aplicar (`dotnet ef database update`).",
          "Implementar os endpoints `GET /tarefas`, `GET /tarefas/{id}`, `POST`, `PUT` e `DELETE`.",
          "Devolver os status HTTP certos para cada situação.",
          "Validar a entrada (título obrigatório, tamanho máximo) e devolver 400 com a mensagem de erro."
        ],
        done: [
          "`POST` devolve **201 Created** com o header `Location`.",
          "`GET`/`PUT`/`DELETE` de um id inexistente devolvem **404**.",
          "`DELETE` com sucesso devolve **204 No Content**.",
          "Dados inválidos devolvem **400** com uma mensagem útil.",
          "Apagar o banco e rodar `dotnet ef database update` recria tudo do zero."
        ],
        code: {
          lang: "csharp", label: "Controller enxuto",
          src: `[ApiController]
[Route("tarefas")]
public class TarefasController(ITarefaService service) : ControllerBase
{
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Obter(int id)
    {
        var tarefa = await service.ObterAsync(id);
        return tarefa is null ? NotFound() : Ok(tarefa);
    }

    [HttpPost]
    public async Task<IActionResult> Criar(CriarTarefaDto dto)
    {
        var criada = await service.CriarAsync(dto);
        return CreatedAtAction(nameof(Obter), new { id = criada.Id }, criada);
    }
}`
        },
        pitfalls: [
          "Editar uma migration já aplicada causa divergência entre máquinas. Crie uma nova.",
          "Esquecer o `await` em chamadas do EF leva a erros intermitentes de concorrência no `DbContext`."
        ],
        resources: [
          { l: "EF Core: primeiros passos", u: "https://learn.microsoft.com/ef/core/get-started/overview/first-app" },
          { l: "EF Core: migrations", u: "https://learn.microsoft.com/ef/core/managing-schemas/migrations/" },
          { l: "MDN: códigos de status HTTP", u: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status" }
        ]
      },
      {
        id: "e2-3", type: "req",
        text: "Autenticação com JWT e rotas protegidas",
        summary: "Saber quem está fazendo a requisição e garantir que cada um só vê o que é seu.",
        time: "Semana 7",
        why: "Quase toda vaga júnior de back-end pergunta sobre autenticação. E é onde mais aparecem falhas de segurança em projetos de portfólio, o que um avaliador nota rápido.",
        todo: [
          "Criar `POST /auth/registrar`, salvando a senha com **hash** (nunca em texto puro).",
          "Criar `POST /auth/login`, que confere a senha e devolve um JWT com expiração.",
          "Configurar `AddAuthentication().AddJwtBearer(...)` e proteger os endpoints de tarefas com `[Authorize]`.",
          "Associar cada tarefa ao usuário dono e filtrar tudo pelo id do usuário logado.",
          "Guardar a chave de assinatura em **user-secrets** ou variável de ambiente, nunca no código."
        ],
        done: [
          "Sem token, os endpoints de tarefas devolvem **401**.",
          "Com token expirado ou adulterado, devolvem **401**.",
          "O usuário A não consegue ler, editar nem apagar tarefas do usuário B (devolve 404 ou 403).",
          "Login com senha errada devolve a mesma mensagem que usuário inexistente (\"credenciais inválidas\").",
          "Uma busca por `SigningKey` ou pela chave no repositório não encontra o segredo."
        ],
        code: {
          lang: "csharp", label: "Filtrando pelo usuário logado",
          src: `[Authorize]
[HttpGet]
public async Task<IActionResult> Listar()
{
    var usuarioId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
    return Ok(await service.ListarDoUsuarioAsync(usuarioId));
}

// terminal: a chave fica fora do repositório
// dotnet user-secrets init
// dotnet user-secrets set "Jwt:Key" "uma-chave-longa-e-aleatoria"`
        },
        pitfalls: [
          "JWT não é criptografado, só assinado. Qualquer pessoa lê o conteúdo; não coloque dados sensíveis nele.",
          "Usar o id que vem no corpo da requisição em vez do id do token permite que um usuário se passe por outro."
        ],
        resources: [
          { l: "ASP.NET Core: autenticação JWT", u: "https://learn.microsoft.com/aspnet/core/security/authentication/configure-jwt-bearer-authentication" },
          { l: "User secrets no desenvolvimento", u: "https://learn.microsoft.com/aspnet/core/security/app-secrets" },
          { l: "OWASP: armazenamento de senhas", u: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" }
        ]
      },
      {
        id: "e2-4", type: "req",
        text: "Consultas SQL com JOIN, GROUP BY e um índice justificado",
        summary: "Ler o banco direto, sem depender do ORM para tudo.",
        time: "Semanas 5 a 9, em paralelo",
        why: "O EF Core gera SQL por você, mas quando algo fica lento ou errado, quem sabe ler SQL resolve. Entrevistas técnicas para júnior quase sempre têm uma pergunta de JOIN.",
        todo: [
          "Resolver as lições do SQLBolt até o fim.",
          "No banco do seu projeto, escrever e salvar em `docs/consultas.sql` pelo menos cinco consultas reais.",
          "Usar `INNER JOIN` e `LEFT JOIN`, e saber prever quando o resultado muda entre eles.",
          "Usar `GROUP BY` com `COUNT`/`SUM` e filtrar grupos com `HAVING`.",
          "Criar um índice e mostrar com `EXPLAIN ANALYZE` que a consulta mudou de plano."
        ],
        done: [
          "Você explica a diferença entre `WHERE` e `HAVING`.",
          "Explica por que um `LEFT JOIN` pode trazer linhas com colunas `NULL`.",
          "O índice criado tem uma justificativa escrita: qual consulta ele acelera e por quê.",
          "As consultas estão versionadas no repositório."
        ],
        code: {
          lang: "sql", label: "Exemplos sobre o banco de tarefas",
          src: `-- Quantas tarefas cada usuário tem por status (inclui quem não tem nenhuma)
SELECT u.nome, t.status, COUNT(t.id) AS total
FROM usuarios u
LEFT JOIN tarefas t ON t.usuario_id = u.id
GROUP BY u.nome, t.status
ORDER BY u.nome;

-- Usuários com mais de 5 tarefas atrasadas
SELECT usuario_id, COUNT(*) AS atrasadas
FROM tarefas
WHERE prazo < CURRENT_DATE AND status <> 'feito'
GROUP BY usuario_id
HAVING COUNT(*) > 5;

-- Índice para a consulta mais comum da API: listar tarefas de um usuário
CREATE INDEX ix_tarefas_usuario_status ON tarefas (usuario_id, status);
EXPLAIN ANALYZE SELECT * FROM tarefas WHERE usuario_id = 42 AND status = 'pendente';`
        },
        pitfalls: [
          "Colocar uma condição da tabela da direita no `WHERE` transforma um `LEFT JOIN` em `INNER JOIN` sem você perceber.",
          "Em tabela pequena o banco pode ignorar o índice. Insira alguns milhares de linhas de teste antes de comparar."
        ],
        resources: [
          { l: "SQLBolt (exercícios interativos)", u: "https://sqlbolt.com/" },
          { l: "PostgreSQL: usando EXPLAIN", u: "https://www.postgresql.org/docs/current/using-explain.html" },
          { l: "Use The Index, Luke", u: "https://use-the-index-luke.com/pt" }
        ]
      },
      {
        id: "e2-5", type: "test",
        text: "Testar todos os endpoints com um cliente HTTP (Bruno, Insomnia ou curl)",
        summary: "Provar que a API se comporta certo nos casos felizes e nos de erro.",
        time: "1 a 2 horas",
        prompt: "Monte uma coleção de requisições que cubra **todos** os endpoints da sua API. Para cada endpoint, crie pelo menos um caso de sucesso e um de erro, e anote o status esperado. Salve a coleção dentro do repositório (o Bruno guarda em arquivos de texto, o que facilita).",
        given: {
          lang: "text", label: "Matriz mínima de casos",
          src: `Endpoint                 Caso                          Esperado
POST /auth/registrar     dados válidos                 201
POST /auth/registrar     e-mail repetido               409 ou 400
POST /auth/login         senha certa                   200 + token
POST /auth/login         senha errada                  401
GET  /tarefas            sem token                     401
GET  /tarefas            com token                     200 + só as minhas
POST /tarefas            título vazio                  400
POST /tarefas            válido                        201 + Location
GET  /tarefas/{id}       id de outro usuário           404 ou 403
PUT  /tarefas/{id}       id inexistente                404
DELETE /tarefas/{id}     válido                        204`
        },
        done: [
          "Todo endpoint tem pelo menos um caso de sucesso e um de erro.",
          "Todos os status recebidos batem com o esperado. Os que não bateram viraram correções.",
          "O token é guardado em uma variável de ambiente da coleção, não colado em cada requisição.",
          "A coleção está commitada no repositório, em uma pasta como `docs/http`."
        ],
        hints: [
          "Comece pelo login: salve o token em uma variável e reaproveite em todas as outras requisições.",
          "Para o caso \"tarefa de outro usuário\", crie duas contas e use o token de uma contra a tarefa da outra.",
          "Se um status estiver errado, não ajuste a expectativa. Corrija a API."
        ],
        solution: {
          notes: [
            "A matriz acima é a referência. O importante é que os casos de erro existam: são eles que mostram que a API foi pensada.",
            "Com o Bruno, você pode adicionar asserções em cada requisição (por exemplo, `res.status eq 401`) e rodar a coleção inteira de uma vez pela linha de comando."
          ],
          code: {
            lang: "bash", label: "Os mesmos testes com curl",
            src: `TOKEN=$(curl -s -X POST localhost:5000/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"ana@teste.com","senha":"Senha123!"}' | jq -r .token)

curl -i localhost:5000/tarefas                               # espera 401
curl -i localhost:5000/tarefas -H "Authorization: Bearer $TOKEN"  # espera 200
curl -i -X POST localhost:5000/tarefas -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" -d '{"titulo":""}'     # espera 400`
          }
        },
        resources: [
          { l: "Bruno (cliente HTTP open source)", u: "https://www.usebruno.com/" },
          { l: "curl: manual", u: "https://curl.se/docs/manual.html" }
        ]
      },
      {
        id: "e2-6", type: "test",
        text: "Pelo menos 10 testes automatizados passando (xUnit)",
        summary: "Testes que rodam sozinhos e avisam quando você quebrou algo.",
        time: "Semana 9",
        prompt: "Crie um projeto de testes com xUnit e escreva **no mínimo 10 testes** para as regras dos seus services. Pelo menos três precisam testar casos de erro. Todos devem seguir o padrão Arrange, Act, Assert e ter nomes que expliquem o comportamento.",
        given: {
          lang: "text", label: "Ideias de casos para começar",
          src: `- Criar tarefa com título válido salva e devolve a tarefa
- Criar tarefa com título vazio lança erro de validação
- Criar tarefa com prazo no passado é rejeitada
- Concluir uma tarefa muda o status para "feito"
- Concluir uma tarefa já concluída não muda nada (ou lança erro, conforme sua regra)
- Listar devolve só as tarefas do usuário informado
- Obter tarefa de outro usuário devolve null
- Apagar tarefa inexistente devolve false
- Resumo por status conta corretamente
- Senha é salva como hash, nunca igual ao texto original`
        },
        done: [
          "`dotnet test` roda com **10 ou mais testes, todos verdes**.",
          "Pelo menos três testes cobrem cenários de erro.",
          "Os testes não dependem de um banco real rodando (use um repositório falso ou o provedor em memória).",
          "Os nomes descrevem o comportamento, como `Concluir_TarefaPendente_MudaStatusParaFeito`."
        ],
        hints: [
          "Comece pela regra mais simples e pura, sem banco. Um teste verde cedo dá ritmo.",
          "Para isolar o service, crie uma classe `RepositorioFake` que implementa `ITarefaRepository` guardando tudo em uma `List<Tarefa>`. Assim você não precisa de bibliotecas de mock agora.",
          "Se um teste é difícil de escrever, o problema geralmente está no design do código, não no teste. Isso é um sinal útil."
        ],
        solution: {
          notes: [
            "Um exemplo no padrão AAA usando um repositório falso. Repare que o teste não sabe nada de HTTP nem de banco."
          ],
          code: {
            lang: "csharp", label: "Exemplo de teste",
            src: `public class TarefaServiceTests
{
    [Fact]
    public async Task Criar_TituloVazio_LancaErroDeValidacao()
    {
        // Arrange
        var service = new TarefaService(new RepositorioFake());
        var dto = new CriarTarefaDto(Titulo: "", Prazo: null);

        // Act
        var acao = () => service.CriarAsync(dto, usuarioId: 1);

        // Assert
        await Assert.ThrowsAsync<ValidationException>(acao);
    }

    [Fact]
    public async Task Listar_DevolveSomenteTarefasDoUsuario()
    {
        var repo = new RepositorioFake();
        repo.Adicionar(new Tarefa { Titulo = "A", UsuarioId = 1 });
        repo.Adicionar(new Tarefa { Titulo = "B", UsuarioId = 2 });
        var service = new TarefaService(repo);

        var resultado = await service.ListarDoUsuarioAsync(1);

        Assert.Single(resultado);
        Assert.Equal("A", resultado[0].Titulo);
    }
}`
          }
        },
        pitfalls: [
          "Testes que dependem da ordem de execução ou de dados de outro teste quebram aleatoriamente.",
          "Testar getters e setters triviais só para bater o número não conta. O alvo são as regras."
        ],
        resources: [
          { l: "Testes de unidade com xUnit no .NET", u: "https://learn.microsoft.com/dotnet/core/testing/unit-testing-with-dotnet-test" },
          { l: "Boas práticas de testes de unidade", u: "https://learn.microsoft.com/dotnet/core/testing/unit-testing-best-practices" }
        ]
      },
      {
        id: "e2-7", type: "test",
        text: "Criar um endpoint novo sem IA e documentar no README por que cada decisão foi tomada",
        summary: "O teste de verdade da etapa: você atravessa todas as camadas sozinho.",
        time: "2 a 3 horas",
        prompt: "Sem IA, implemente `GET /tarefas/resumo`, que devolve para o usuário logado a quantidade de tarefas por status e quantas estão atrasadas. Passe por todas as camadas (controller, service, repository), escreva pelo menos um teste e adicione ao README uma seção **\"Decisões\"** explicando suas escolhas.",
        given: {
          lang: "json", label: "Resposta esperada",
          src: `{
  "porStatus": { "pendente": 4, "andamento": 2, "feito": 7 },
  "atrasadas": 3,
  "total": 13
}`
        },
        done: [
          "O endpoint exige autenticação e considera só as tarefas do usuário logado.",
          "A contagem é feita no banco (uma consulta com agrupamento), não trazendo todas as tarefas para a memória.",
          "Existe pelo menos um teste para a regra de \"atrasada\".",
          "O README tem a seção \"Decisões\" com pelo menos três escolhas justificadas.",
          "Nada foi gerado por IA. Consultar a documentação da Microsoft é permitido."
        ],
        hints: [
          "Defina antes, por escrito, o que é \"atrasada\": prazo menor que hoje **e** status diferente de feito? E tarefas sem prazo?",
          "No repository, o LINQ `GroupBy(t => t.Status).Select(g => new { g.Key, Total = g.Count() })` vira um `GROUP BY` no SQL.",
          "Para a seção Decisões, pense: por que esse formato de resposta? Por que contar no banco? Por que esse nome de rota?"
        ],
        solution: {
          notes: [
            "Um caminho possível. O seu pode ser diferente e estar certo, desde que as decisões estejam explicadas.",
            "Decisões que valem registrar: definição de \"atrasada\" (e o que acontece com tarefas sem prazo), agregação no banco em vez de em memória, uso do fuso horário ao comparar datas e por que a rota é `/tarefas/resumo` e não `/resumo`."
          ],
          code: {
            lang: "csharp", label: "Repository e service",
            src: `// Repository: agrega no banco
public async Task<Dictionary<string, int>> ContarPorStatusAsync(int usuarioId) =>
    await db.Tarefas
        .Where(t => t.UsuarioId == usuarioId)
        .GroupBy(t => t.Status)
        .Select(g => new { Status = g.Key, Total = g.Count() })
        .ToDictionaryAsync(x => x.Status, x => x.Total);

public Task<int> ContarAtrasadasAsync(int usuarioId, DateOnly hoje) =>
    db.Tarefas.CountAsync(t =>
        t.UsuarioId == usuarioId &&
        t.Prazo != null && t.Prazo < hoje &&
        t.Status != "feito");

// Service: monta a resposta
public async Task<ResumoDto> ResumoAsync(int usuarioId)
{
    var porStatus = await repo.ContarPorStatusAsync(usuarioId);
    var atrasadas = await repo.ContarAtrasadasAsync(usuarioId, DateOnly.FromDateTime(DateTime.UtcNow));
    return new ResumoDto(porStatus, atrasadas, porStatus.Values.Sum());
}`
          }
        },
        pitfalls: [
          "Fazer `ToListAsync()` antes do `GroupBy` traz a tabela inteira para a memória.",
          "Comparar datas com `DateTime.Now` no servidor pode dar resultados diferentes em produção por causa do fuso horário."
        ]
      }
    ]
  },

  /* =====================================================================
   * ETAPA 3
   * ===================================================================== */
  {
    id: "e3", title: "React e integração", weeks: "Semanas 10 a 13",
    goal: "Conectar uma interface real à sua API.",
    items: [
      {
        id: "e3-1", type: "req",
        text: "Componentes, props, estado com useState e efeitos com useEffect",
        summary: "Os quatro conceitos de que todo o resto do React depende.",
        time: "Semana 10",
        why: "Se você entende quando um componente renderiza de novo e por quê, o React deixa de ser mágica. A maioria dos bugs de iniciante vem de estado guardado no lugar errado ou de efeitos mal usados.",
        todo: [
          "Fazer o tutorial oficial do jogo da velha em react.dev, digitando, sem copiar.",
          "Entender que a interface é uma função do estado: muda o estado, o React redesenha.",
          "Passar dados de pai para filho com props e eventos de filho para pai com funções.",
          "Usar `useState` com objetos e arrays sem mutar (sempre criando um novo valor).",
          "Usar `useEffect` só para sincronizar com algo externo (API, timer, evento do navegador), com a função de limpeza quando precisar."
        ],
        done: [
          "Você explica por que `lista.push(item); setLista(lista)` não atualiza a tela.",
          "Sabe dizer quando um valor deve ser estado e quando pode ser calculado a partir de outro estado.",
          "Constrói um contador, um formulário de uma linha e uma lista com remoção, sem consultar.",
          "Explica o que o array de dependências do `useEffect` controla."
        ],
        code: {
          lang: "jsx", label: "Estado imutável e efeito com limpeza",
          src: `function Relogio() {
  const [agora, setAgora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(id); // limpeza ao desmontar
  }, []);

  return <p>{agora.toLocaleTimeString("pt-BR")}</p>;
}

function Lista() {
  const [itens, setItens] = useState(["a", "b"]);
  const adicionar = (novo) => setItens((atual) => [...atual, novo]); // novo array
  const remover = (alvo) => setItens((atual) => atual.filter((i) => i !== alvo));
  // ...
}`
        },
        pitfalls: [
          "Usar `useEffect` para calcular valores derivados (como filtrar uma lista) gera renderizações extras. Calcule direto no corpo do componente.",
          "Usar o índice do array como `key` em listas que mudam de ordem causa bugs visuais."
        ],
        resources: [
          { l: "react.dev: Aprenda React", u: "https://react.dev/learn" },
          { l: "react.dev: você talvez não precise de um efeito", u: "https://react.dev/learn/you-might-not-need-an-effect" }
        ]
      },
      {
        id: "e3-2", type: "req",
        text: "Consumo da API com estados de loading e erro visíveis ao usuário",
        summary: "A interface conversa com o seu back-end e nunca deixa o usuário sem saber o que está acontecendo.",
        time: "Semana 11",
        why: "Uma tela que fica em branco enquanto carrega ou que falha em silêncio parece quebrada, mesmo quando não está. Tratar esses estados é o que separa uma demonstração de um produto.",
        todo: [
          "Configurar CORS na API para aceitar o endereço do front-end.",
          "Guardar a URL da API em uma variável de ambiente (`VITE_API_URL`), não fixa no código.",
          "Criar uma função ou hook que busca as tarefas e expõe `carregando`, `erro` e `dados`.",
          "Mostrar um indicador de carregamento, uma mensagem de erro com botão \"tentar de novo\" e um estado vazio (\"nenhuma tarefa ainda\").",
          "Enviar o token JWT no header `Authorization` em todas as requisições."
        ],
        done: [
          "Com a API desligada, a tela mostra uma mensagem de erro clara, não uma tela branca.",
          "Com a rede lenta (simule no DevTools em \"Slow 3G\"), aparece o indicador de carregamento.",
          "Sem tarefas cadastradas, aparece o estado vazio.",
          "Trocar a URL da API não exige mudar código, só o arquivo `.env`."
        ],
        code: {
          lang: "jsx", label: "Hook simples com os três estados",
          src: `function useTarefas(token) {
  const [estado, setEstado] = useState({ carregando: true, erro: null, dados: [] });

  const carregar = useCallback(async () => {
    setEstado((e) => ({ ...e, carregando: true, erro: null }));
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/tarefas", {
        headers: { Authorization: "Bearer " + token },
      });
      if (!res.ok) throw new Error("Falha ao carregar (" + res.status + ")");
      setEstado({ carregando: false, erro: null, dados: await res.json() });
    } catch (e) {
      setEstado({ carregando: false, erro: e.message, dados: [] });
    }
  }, [token]);

  useEffect(() => { carregar(); }, [carregar]);
  return { ...estado, recarregar: carregar };
}`
        },
        pitfalls: [
          "Erros de CORS aparecem no console do navegador, não na resposta. Abra o DevTools quando algo \"não faz nada\".",
          "Variáveis do Vite precisam começar com `VITE_` para chegar ao navegador. E tudo que chega ao navegador é público: nunca coloque segredos ali."
        ],
        resources: [
          { l: "Vite: variáveis de ambiente", u: "https://vite.dev/guide/env-and-mode" },
          { l: "ASP.NET Core: habilitar CORS", u: "https://learn.microsoft.com/aspnet/core/security/cors" }
        ]
      },
      {
        id: "e3-3", type: "req",
        text: "Rotas (React Router) e formulário controlado com validação",
        summary: "Várias telas com URL própria e formulários que guiam o usuário.",
        time: "Semana 12",
        why: "Toda aplicação real tem login, listagem e edição. Saber organizar rotas e formulários é o que te deixa construir isso sem copiar estrutura de tutorial.",
        todo: [
          "Criar as rotas `/login`, `/tarefas`, `/tarefas/nova` e `/tarefas/:id`.",
          "Criar uma rota protegida que redireciona para `/login` quando não há token.",
          "Fazer o formulário de tarefa como componente controlado (o valor de cada campo vem do estado).",
          "Validar antes de enviar: título obrigatório, prazo não pode ser no passado. Mostrar o erro ao lado do campo.",
          "Mostrar também os erros que vêm da API (status 400) no formulário."
        ],
        done: [
          "Recarregar a página em `/tarefas/3` abre a tarefa 3 diretamente.",
          "Acessar `/tarefas` deslogado leva para o login e, depois de logar, volta para onde você estava.",
          "O botão de enviar fica desabilitado enquanto a requisição está em andamento (sem envio duplo).",
          "Os erros de validação aparecem sem recarregar a página."
        ],
        pitfalls: [
          "No GitHub Pages, rotas com caminho real (sem `#`) dão 404 ao recarregar. Para deploy estático, use `HashRouter` ou configure um fallback.",
          "Esquecer o `event.preventDefault()` no `onSubmit` recarrega a página e perde o estado."
        ],
        resources: [
          { l: "React Router: tutorial", u: "https://reactrouter.com/start/framework/installation" },
          { l: "react.dev: reagindo a entrada com estado", u: "https://react.dev/learn/reacting-to-input-with-state" }
        ]
      },
      {
        id: "e3-4", type: "test",
        text: "Fazer login e criar e listar tarefas pela interface, sem recarregar a página",
        summary: "O fluxo completo, de ponta a ponta, funcionando como em um produto.",
        time: "1 hora para validar",
        prompt: "Com a API e o front rodando, execute o roteiro abaixo com o DevTools aberto na aba **Network**. Ele só passa se tudo acontecer sem nenhum recarregamento de página (nenhuma requisição do tipo \"document\" depois da primeira).",
        given: {
          lang: "text", label: "Roteiro de validação",
          src: `1. Abrir /tarefas deslogado          -> redireciona para /login
2. Logar com senha errada           -> mensagem de erro, continua em /login
3. Logar com senha certa            -> vai para /tarefas
4. Ver a lista (ou o estado vazio)
5. Criar uma tarefa com título vazio -> erro no campo, nada é enviado
6. Criar uma tarefa válida          -> aparece na lista sem recarregar
7. Recarregar a página (F5)         -> continua logado e a tarefa continua lá
8. Sair                             -> volta para /login e /tarefas fica bloqueado`
        },
        done: [
          "Os oito passos passaram.",
          "Na aba Network, só existe uma requisição do tipo \"document\" (a primeira carga).",
          "O token sobrevive ao F5 e é apagado ao sair.",
          "Você gravou um GIF ou vídeo curto do fluxo para colocar no README."
        ],
        hints: [
          "Se a lista não atualiza depois de criar, você tem duas opções: adicionar a tarefa devolvida pela API ao estado, ou chamar a função de recarregar. A primeira é mais rápida para o usuário.",
          "Para o token sobreviver ao F5, guarde no `localStorage` ao logar e leia ao iniciar a aplicação.",
          "Se o passo 1 falha, confira se a rota `/tarefas` está envolvida pelo componente de rota protegida."
        ],
        solution: {
          notes: [
            "A estrutura mais comum: um contexto de autenticação (`AuthContext`) que guarda o token, expõe `entrar` e `sair` e é lido pela rota protegida e pelo hook de tarefas.",
            "Ao criar uma tarefa, a API devolve 201 com a tarefa criada. Adicione esse objeto ao estado com `setTarefas((t) => [...t, criada])`.",
            "Guardar o token no `localStorage` é aceitável para portfólio. Saiba explicar na entrevista que, em produção, cookies `HttpOnly` reduzem o risco de roubo por XSS."
          ]
        },
        resources: [
          { l: "Chrome DevTools: aba Network", u: "https://developer.chrome.com/docs/devtools/network" }
        ]
      },
      {
        id: "e3-5", type: "test",
        text: "Escrever a tela de lista do zero, sem copiar de tutorial",
        summary: "Prova de que você constrói uma tela com filtro, busca e ordenação sozinho.",
        time: "90 minutos",
        prompt: "Em um componente novo, sem olhar a versão anterior e sem IA, construa uma lista de tarefas com: **busca por título**, **filtro por status**, **ordenação por prazo** (crescente e decrescente) e **estado vazio** para quando o filtro não encontra nada. Use dados fixos em um array; a API não é necessária aqui.",
        done: [
          "Busca, filtro e ordenação funcionam juntos (buscar \"rel\" com o filtro \"pendente\" ordenado por prazo).",
          "O array original de tarefas nunca é alterado.",
          "Existe só **um** estado para os dados; a lista exibida é calculada a partir dele e dos filtros.",
          "Tarefas sem prazo ficam no fim da ordenação, nos dois sentidos.",
          "Terminou em até 90 minutos, sem consultar tutoriais."
        ],
        hints: [
          "Estados que você precisa: o texto da busca, o status escolhido e o sentido da ordenação. A lista visível **não** é estado.",
          "Encadeie: `tarefas.filter(...).filter(...).toSorted(...)`. Cada passo é uma pergunta simples.",
          "Para ordenar por data, compare `new Date(a.prazo) - new Date(b.prazo)`. Trate o `null` antes."
        ],
        solution: {
          notes: [
            "O ponto central é o estado derivado: a lista exibida é calculada a cada renderização, a partir dos dados e dos filtros. Guardar a lista filtrada em outro `useState` cria duas fontes da verdade que saem de sincronia."
          ],
          code: {
            lang: "jsx", label: "Solução de referência",
            src: `function ListaTarefas({ tarefas }) {
  const [busca, setBusca] = useState("");
  const [status, setStatus] = useState("todos");
  const [ordem, setOrdem] = useState("asc");

  const visiveis = tarefas
    .filter((t) => t.titulo.toLowerCase().includes(busca.toLowerCase()))
    .filter((t) => status === "todos" || t.status === status)
    .toSorted((a, b) => {
      if (!a.prazo) return 1;   // sem prazo vai para o fim
      if (!b.prazo) return -1;
      const diff = new Date(a.prazo) - new Date(b.prazo);
      return ordem === "asc" ? diff : -diff;
    });

  return (
    <>
      <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar" />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todos">Todos</option>
        <option value="pendente">Pendente</option>
        <option value="feito">Feito</option>
      </select>
      <button onClick={() => setOrdem((o) => (o === "asc" ? "desc" : "asc"))}>
        Prazo {ordem === "asc" ? "↑" : "↓"}
      </button>

      {visiveis.length === 0
        ? <p>Nenhuma tarefa encontrada.</p>
        : <ul>{visiveis.map((t) => <li key={t.id}>{t.titulo}</li>)}</ul>}
    </>
  );
}`
          }
        },
        pitfalls: [
          "Usar `sort()` direto na prop altera o array do componente pai. Use `toSorted()` ou copie antes com `[...tarefas]`."
        ]
      },
      {
        id: "e3-6", type: "test",
        text: "Site de portfólio publicado e linkado no currículo",
        summary: "Sua vitrine: o lugar para onde o recrutador vai depois do currículo.",
        time: "1 semana, em paralelo",
        prompt: "Publique seu portfólio com quatro seções: **sobre** (2 a 3 frases), **projetos** (no máximo três, os melhores), **experiência/formação** e **contato**. Cada projeto precisa ter: o problema que resolve, a stack, um link para o código, um link para a demonstração (ou GIF) e uma frase sobre o que você aprendeu.",
        done: [
          "O site está publicado em um endereço público e funciona no celular.",
          "No Lighthouse do Chrome, a nota de Acessibilidade é **90 ou mais**.",
          "Todos os links funcionam e abrem o projeto certo.",
          "O link está no topo do currículo em português e em inglês.",
          "Um amigo que não é da área entende em 30 segundos o que você faz."
        ],
        hints: [
          "Menos é mais: três projetos bem explicados valem mais que dez repositórios de tutorial.",
          "Comece pelo conteúdo em um documento de texto. O visual vem depois.",
          "Rode o Lighthouse em DevTools → Lighthouse. Os problemas mais comuns são contraste de cor e imagens sem `alt`."
        ],
        solution: {
          notes: [
            "Uma estrutura que funciona para júnior:",
            "**Topo:** nome, uma linha (\"Estudante de Ciência da Computação construindo APIs em .NET e interfaces em React\") e links para GitHub, LinkedIn e currículo em PDF.",
            "**Projetos:** o projeto da API com front como destaque, seguido de dois menores. Cada card com imagem, descrição de duas linhas, tags da stack e os dois links.",
            "**Experiência:** experiências reais, inclusive as fora da área, com uma linha sobre o que você fez.",
            "**Contato:** e-mail e LinkedIn. Um formulário é opcional."
          ]
        },
        resources: [
          { l: "Lighthouse", u: "https://developer.chrome.com/docs/lighthouse/overview" },
          { l: "GitHub Pages", u: "https://pages.github.com/" }
        ]
      }
    ]
  },

  /* =====================================================================
   * ETAPA 4
   * ===================================================================== */
  {
    id: "e4", title: "Qualidade e deploy", weeks: "Semanas 14 a 16",
    goal: "Fazer o projeto rodar em qualquer máquina com poucos comandos e publicá-lo.",
    items: [
      {
        id: "e4-1", type: "req",
        text: "Dockerfile e docker-compose subindo a API junto com o banco",
        summary: "Um comando para subir tudo, igual em qualquer máquina.",
        time: "Semana 14",
        why: "\"Funciona na minha máquina\" não convence ninguém. Com Docker, quem avalia seu projeto roda `docker compose up` e vê funcionando, sem instalar .NET nem PostgreSQL.",
        todo: [
          "Escrever um `Dockerfile` em múltiplos estágios: um com o SDK para compilar e outro só com o runtime para rodar.",
          "Escrever um `docker-compose.yml` com dois serviços: a API e o PostgreSQL.",
          "Passar a string de conexão por variável de ambiente.",
          "Usar um volume para os dados do banco não sumirem ao reiniciar.",
          "Adicionar um `healthcheck` no banco e fazer a API esperar ele ficar pronto."
        ],
        done: [
          "Em uma pasta limpa, `docker compose up --build` sobe tudo e a API responde.",
          "`docker compose down` seguido de `up` mantém os dados.",
          "A imagem final não contém o SDK (confira com `docker images`: deve ter menos de 300 MB).",
          "Não há senha real commitada no `docker-compose.yml` (use um arquivo `.env` ignorado pelo Git)."
        ],
        code: {
          lang: "yaml", label: "docker-compose.yml",
          src: `services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: \${DB_PASSWORD}
      POSTGRES_DB: taskflow
    volumes:
      - dados:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      retries: 10

  api:
    build: .
    ports:
      - "8080:8080"
    environment:
      ConnectionStrings__Default: "Host=db;Database=taskflow;Username=app;Password=\${DB_PASSWORD}"
    depends_on:
      db:
        condition: service_healthy

volumes:
  dados:`
        },
        pitfalls: [
          "Dentro do compose, o host do banco é o nome do serviço (`db`), não `localhost`.",
          "Copiar a pasta inteira antes do `dotnet restore` invalida o cache do Docker a cada mudança. Copie o `.csproj` primeiro."
        ],
        resources: [
          { l: "Docker: guia para .NET", u: "https://docs.docker.com/guides/dotnet/" },
          { l: "Docker Compose: referência", u: "https://docs.docker.com/compose/" }
        ]
      },
      {
        id: "e4-2", type: "req",
        text: "Pipeline de CI no GitHub Actions rodando build e testes a cada push",
        summary: "Um robô que compila e testa seu código toda vez que você envia algo.",
        time: "Semana 15",
        why: "CI é padrão em qualquer equipe. Ter um selo verde no README mostra que o projeto compila e os testes passam, sem o avaliador precisar rodar nada.",
        todo: [
          "Criar `.github/workflows/ci.yml` que roda em `push` e `pull_request`.",
          "Configurar o .NET, restaurar dependências, compilar e rodar `dotnet test`.",
          "Adicionar um segundo job para o front-end: `npm ci`, `npm run build` e, se houver, os testes.",
          "Colocar o selo (badge) do workflow no topo do README."
        ],
        done: [
          "Todo push mostra um check verde (ou vermelho) no GitHub.",
          "Pull requests mostram o resultado do CI antes do merge.",
          "O badge no README reflete o estado atual da branch `main`."
        ],
        code: {
          lang: "yaml", label: ".github/workflows/ci.yml",
          src: `name: CI
on: [push, pull_request]

jobs:
  api:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with:
          dotnet-version: "10.0.x"
      - run: dotnet restore
      - run: dotnet build --no-restore
      - run: dotnet test --no-build --verbosity normal

  web:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: web
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build`
        },
        pitfalls: [
          "A versão do .NET no workflow precisa bater com a do seu projeto (`TargetFramework` no `.csproj`).",
          "`npm ci` exige o `package-lock.json` commitado."
        ],
        resources: [
          { l: "GitHub Actions: build e testes em .NET", u: "https://docs.github.com/actions/use-cases-and-examples/building-and-testing/building-and-testing-net" },
          { l: "GitHub Actions: adicionar um badge", u: "https://docs.github.com/actions/monitoring-and-troubleshooting-workflows/monitoring-workflows/adding-a-workflow-status-badge" }
        ]
      },
      {
        id: "e4-3", type: "req",
        text: "API e front publicados (Render, Railway, Azure for Students ou similar)",
        summary: "Seu projeto com um endereço público que qualquer pessoa pode abrir.",
        time: "Semana 15",
        why: "Um link que funciona vale mais que qualquer descrição. O recrutador abre, cria uma conta de teste e vê o projeto rodando em segundos.",
        todo: [
          "Escolher onde publicar. Os planos gratuitos mudam com frequência: confira as condições atuais antes de escolher.",
          "Publicar o banco (muitos serviços oferecem PostgreSQL gerenciado) e a API, configurando as variáveis de ambiente no painel do serviço.",
          "Aplicar as migrations no banco de produção.",
          "Publicar o front (Vercel, Netlify ou GitHub Pages) apontando `VITE_API_URL` para a API publicada.",
          "Ajustar o CORS da API para aceitar o domínio do front publicado."
        ],
        done: [
          "Os dois endereços abrem em uma aba anônima.",
          "É possível criar uma conta, logar e criar uma tarefa pelo front publicado.",
          "Nenhum segredo (chave JWT, senha do banco) está no repositório.",
          "Os links estão no README e no portfólio."
        ],
        pitfalls: [
          "Planos gratuitos costumam \"dormir\" a API depois de um tempo sem uso. A primeira requisição pode demorar; avise isso no README.",
          "Se o front publicado não consegue falar com a API, quase sempre é CORS ou `VITE_API_URL` errada."
        ],
        resources: [
          { l: "Azure for Students", u: "https://azure.microsoft.com/free/students" },
          { l: "Render: documentação", u: "https://render.com/docs" },
          { l: "Vite: deploy de site estático", u: "https://vite.dev/guide/static-deploy" }
        ]
      },
      {
        id: "e4-4", type: "test",
        text: "Clonar o repositório em outra máquina e subir o projeto só seguindo o README",
        summary: "O README é testado como se fosse código.",
        time: "30 a 60 minutos",
        prompt: "Em uma máquina ou pasta limpa (outro computador, um usuário novo no Linux ou o computador de um amigo), clone o repositório e suba o projeto **seguindo só o README**, sem usar nada que você sabe de cabeça. Cronometre. Cada passo que você precisou fazer e não estava escrito é uma falha a corrigir no README.",
        done: [
          "Do `git clone` até a API respondendo, levou **15 minutos ou menos**.",
          "Nenhum passo foi feito \"de cabeça\": tudo estava no README.",
          "Os passos que faltavam foram adicionados ao README e commitados.",
          "Idealmente, outra pessoa repetiu o teste e também conseguiu."
        ],
        hints: [
          "Finja que você nunca viu o projeto. Se o README diz \"configure o banco\", pergunte-se: como?",
          "Os passos mais esquecidos são: copiar o `.env.example` para `.env`, criar user-secrets e rodar as migrations."
        ],
        solution: {
          notes: [
            "Uma estrutura de README que costuma passar nesse teste:"
          ],
          code: {
            lang: "md", label: "README.md (seção de execução)",
            src: `## Como rodar

Pré-requisitos: Docker e Docker Compose.

1. Clone e entre na pasta
   git clone https://github.com/athoskolling/taskflow && cd taskflow
2. Copie as variáveis de ambiente
   cp .env.example .env
3. Suba tudo
   docker compose up --build
4. Acesse
   - API: http://localhost:8080/swagger
   - Front: http://localhost:5173

Usuário de teste: demo@taskflow.dev / Demo123!

## Rodando os testes
dotnet test`
          }
        }
      },
      {
        id: "e4-5", type: "test",
        text: "Quebrar um teste de propósito, ver o CI falhar e depois corrigir",
        summary: "Confirmar que a rede de segurança funciona antes de precisar dela.",
        time: "30 minutos",
        prompt: "Simule o fluxo de uma equipe: crie uma branch, quebre uma regra de negócio de propósito, envie, abra um pull request e veja o CI barrar. Depois corrija na mesma branch e faça o merge com o CI verde. Proteja a `main` para que isso seja obrigatório.",
        done: [
          "Existe um pull request no histórico em que o CI ficou vermelho e depois verde.",
          "A `main` tem uma regra de proteção que exige o check do CI antes do merge.",
          "Você sabe ler o log do Actions e encontrar qual teste falhou e por quê."
        ],
        hints: [
          "Mude algo pequeno e coberto por teste, como o tamanho máximo do título.",
          "A proteção fica em Settings → Branches (ou Rules → Rulesets) → adicionar regra para `main` → exigir status checks."
        ],
        solution: {
          notes: [
            "Passo a passo de referência:"
          ],
          code: {
            lang: "bash", label: "Fluxo completo",
            src: `git switch -c teste/quebrar-ci
# altere a regra: por exemplo, aceitar título vazio
git commit -am "Quebra validação de título (teste de CI)"
git push -u origin teste/quebrar-ci
# abra o PR no GitHub e veja o check vermelho
# leia o log: qual teste falhou e qual foi a mensagem?

# corrija
git commit -am "Restaura validação de título"
git push
# o check fica verde e o merge é liberado`
          }
        },
        resources: [
          { l: "GitHub: sobre branches protegidas", u: "https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches" }
        ]
      }
    ]
  },

  /* =====================================================================
   * ETAPA 5
   * ===================================================================== */
  {
    id: "e5", title: "Candidatura", weeks: "Semanas 15 a 17",
    goal: "Transformar o que você construiu em entrevistas.",
    items: [
      {
        id: "e5-1", type: "req",
        text: "Currículo em português e inglês revisado, com links para os projetos",
        summary: "Uma página que faz o recrutador querer abrir seu GitHub.",
        time: "1 a 2 dias",
        why: "Um recrutador passa poucos segundos em cada currículo. Ele precisa ver logo o que você sabe fazer e onde está a prova.",
        todo: [
          "Manter em **uma página**.",
          "No topo: nome, cidade, e-mail, LinkedIn, GitHub e portfólio.",
          "Uma seção de projetos antes da experiência, já que é onde está sua prova técnica.",
          "Cada item com verbo de ação, o que você fez e o resultado (\"Construí uma API em .NET com autenticação JWT e 15 testes automatizados, publicada no Render\").",
          "Incluir as experiências reais, inclusive as fora da área, com uma linha cada.",
          "Fazer a versão em inglês, adaptando, não traduzindo palavra por palavra."
        ],
        done: [
          "Cabe em uma página, nas duas versões.",
          "Todos os links funcionam em um PDF.",
          "Nenhuma tecnologia listada é algo que você não conseguiria explicar em uma entrevista.",
          "Alguém revisou: um professor, um colega da área ou o setor de carreiras da faculdade."
        ],
        pitfalls: [
          "Barras de nível (\"React ★★★★☆\") não dizem nada e atrapalham os sistemas de triagem. Mostre o que você construiu.",
          "Foto, data de nascimento e estado civil não são necessários, e no currículo em inglês costumam ser evitados."
        ],
        resources: [
          { l: "Tech Interview Handbook: currículo", u: "https://www.techinterviewhandbook.org/resume/" }
        ]
      },
      {
        id: "e5-2", type: "req",
        text: "LinkedIn atualizado com o projeto principal",
        summary: "O perfil que os recrutadores realmente buscam.",
        time: "2 horas",
        why: "Muitas vagas de estágio e júnior começam por uma busca no LinkedIn. Um perfil completo aparece mais e confirma o que está no currículo.",
        todo: [
          "Título (headline) específico: \"Estudante de Ciência da Computação | .NET, React, SQL | Buscando estágio\".",
          "Seção \"Sobre\" com 3 a 5 frases: o que você estuda, o que construiu e o que procura.",
          "Projeto principal na seção **Destaques**, com link e imagem.",
          "Experiências e formação iguais às do currículo.",
          "Ativar \"Open to Work\" visível só para recrutadores, se preferir discrição."
        ],
        done: [
          "Perfil com foto, título, sobre, destaque, experiência e formação preenchidos.",
          "Pelo menos uma publicação sobre o projeto (o que construiu e o que aprendeu).",
          "O link do LinkedIn está no currículo e no portfólio."
        ],
        resources: [
          { l: "LinkedIn: dicas de perfil para estudantes", u: "https://www.linkedin.com/help/linkedin/answer/a554351" }
        ]
      },
      {
        id: "e5-3", type: "req",
        text: "2 a 3 problemas fáceis de algoritmo por semana, só depois da base consolidada",
        summary: "Manter o raciocínio afiado para as etapas técnicas das entrevistas.",
        time: "1 a 2 horas por semana",
        why: "Algumas empresas aplicam testes de lógica na triagem. Estudar por padrões, e não problema por problema, faz cada exercício render mais.",
        todo: [
          "Seguir uma lista organizada por padrão, como a NeetCode 150, começando pelos fáceis.",
          "Padrões para cobrir, nesta ordem: arrays e hashing, dois ponteiros, pilha, janela deslizante, busca binária, árvores (BFS/DFS).",
          "Manter o mesmo registro do diagnóstico: tempo, se passou e onde travou.",
          "Refazer, uma semana depois, os problemas em que você travou."
        ],
        done: [
          "Registro semanal com 2 a 3 problemas.",
          "Você reconhece o padrão de um problema novo antes de começar a codar.",
          "Um problema refeito depois de uma semana sai em menos da metade do tempo."
        ],
        resources: [
          { l: "NeetCode: roadmap por padrões", u: "https://neetcode.io/roadmap" },
          { l: "Tech Interview Handbook: algoritmos", u: "https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/" }
        ]
      },
      {
        id: "e5-4", type: "test",
        text: "Explicar o projeto principal em 2 minutos, da arquitetura às decisões tomadas",
        summary: "A pergunta que aparece em quase toda entrevista: \"me fala de um projeto seu\".",
        time: "1 hora de preparo e gravação",
        prompt: "Grave um vídeo de **no máximo 2 minutos** explicando seu projeto principal. Depois, responda em voz alta, sem roteiro, às cinco perguntas de aprofundamento abaixo. Assista à gravação e anote o que melhorar.",
        given: {
          lang: "text", label: "Perguntas de aprofundamento",
          src: `1. Por que você separou o código nessas camadas?
2. Como funciona a autenticação, do login até uma rota protegida?
3. Qual foi o bug mais difícil e como você encontrou a causa?
4. O que você mudaria se o projeto tivesse 100 mil usuários?
5. Que parte você faria diferente se começasse hoje?`
        },
        done: [
          "A explicação cabe em 2 minutos.",
          "Cobre: o problema, a stack, a arquitetura, uma decisão difícil e o que aprendeu.",
          "As cinco perguntas foram respondidas sem travar mais de alguns segundos.",
          "Você fez também uma versão em inglês."
        ],
        hints: [
          "Comece pelo problema, não pela tecnologia. \"Fiz um gerenciador de tarefas\" é mais fraco que \"queria entender como uma API de verdade lida com autenticação e testes\".",
          "Para a pergunta 4, não precisa saber a resposta perfeita. Mostre que você sabe onde o gargalo estaria (banco, índices, cache)."
        ],
        solution: {
          notes: [
            "Um roteiro que funciona bem, em cinco blocos de cerca de 20 segundos:",
            "**1. Problema:** o que o projeto resolve e por que você escolheu construí-lo.",
            "**2. Stack e arquitetura:** API em .NET dividida em camadas, PostgreSQL, front em React, tudo em Docker com CI.",
            "**3. Uma decisão:** por exemplo, contar as tarefas no banco em vez de em memória, e por quê.",
            "**4. Um problema real:** um bug ou dificuldade e como você resolveu.",
            "**5. Aprendizado e próximo passo:** o que você entendeu de verdade e o que faria a seguir."
          ]
        },
        resources: [
          { l: "Tech Interview Handbook: perguntas comportamentais", u: "https://www.techinterviewhandbook.org/behavioral-interview/" }
        ]
      },
      {
        id: "e5-5", type: "test",
        text: "Enviar 10 candidaturas para estágio ou vaga júnior",
        summary: "O passo que transforma o roadmap em resultado.",
        time: "Semanas 16 e 17",
        prompt: "Envie **10 candidaturas** para estágio ou vaga júnior, registrando cada uma em uma planilha. Pelo menos três precisam ter uma mensagem personalizada para alguém da empresa (recrutador ou desenvolvedor), além do envio pelo formulário.",
        given: {
          lang: "text", label: "Planilha de acompanhamento",
          src: `Empresa | Vaga | Link | Data | Canal | Contato | Status | Próximo passo

Onde procurar:
- LinkedIn Vagas (filtro: Estágio / Assistente / Júnior)
- Gupy e páginas de carreira das empresas
- Programathor
- CIEE e agentes de integração (estágio)
- Setor de carreiras e mural de vagas da faculdade`
        },
        done: [
          "Dez candidaturas registradas, com data e link.",
          "Pelo menos três com mensagem personalizada.",
          "Um lembrete para dar retorno às que não responderem em uma ou duas semanas.",
          "Depois de cada entrevista, uma nota com as perguntas feitas e o que melhorar."
        ],
        hints: [
          "Não espere se sentir pronto. A maioria das vagas júnior lista mais requisitos do que realmente exige.",
          "Priorize vagas em que você atende a cerca de 60% dos requisitos e tem projeto para mostrar no resto."
        ],
        solution: {
          notes: [
            "Um modelo de mensagem curta para personalizar (troque os colchetes; nunca envie genérica):"
          ],
          code: {
            lang: "text", label: "Mensagem para recrutador ou dev",
            src: `Oi, [nome]! Tudo bem?

Vi a vaga de [cargo] na [empresa] e me candidatei hoje. Sou estudante de
Ciência da Computação na UNISINOS e construí [projeto], uma API em .NET
com React, Docker e CI: [link].

Me chamou atenção [algo específico da empresa ou do time]. Se fizer
sentido, adoraria conversar sobre a vaga.

Obrigado!`
          }
        }
      }
    ]
  }
];
