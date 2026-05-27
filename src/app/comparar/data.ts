/**
 * Dados estáticos e tipos da página /comparar.
 * Tudo que aparece como texto na página pode ser editado aqui.
 *
 * Convenções:
 * - Nada de em-dash em copy. Use vírgula, ponto ou reescreva.
 * - IDs em snake_case são chaves estáveis usadas pela lógica de scoring.
 * - Os pesos em PLATFORM_SCORES são neutros e refletem posicionamento público
 *   de cada plataforma em 2026. Ajuste com cuidado para não desbalancear.
 */

export type PlatformId = "hotmart" | "kiwify" | "monetizze" | "braip";

export type ProductTypeId = "curso" | "software" | "fisico" | "indeciso";

export type VolumeId = "0-10" | "10-50" | "50-200" | "200+";

export type ImportanceId = "comissao" | "saque" | "catalogo" | "suporte";

export interface Platform {
  id: PlatformId;
  name: string;
  logo: string; // path em /public
  commission: string;
  payout: string;
  catalog: string;
  focus: string;
  edge: string;
  idealFor: string;
}

export interface QuizOption<T extends string> {
  id: T;
  label: string;
  hint?: string;
}

export interface QuizQuestion<T extends string> {
  id: string;
  prompt: string;
  options: QuizOption<T>[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export const PLATFORMS: Record<PlatformId, Platform> = {
  hotmart: {
    id: "hotmart",
    name: "Hotmart",
    logo: "/hotmart.png",
    commission: "30% a 80%",
    payout: "D+30 (Brasil)",
    catalog: "500 mil+ produtos",
    focus: "Infoproduto global",
    edge: "Maior catálogo e Hotleads",
    idealFor: "Afiliado que quer variedade e mercado internacional",
  },
  kiwify: {
    id: "kiwify",
    name: "Kiwify",
    logo: "/kiwify.png",
    commission: "1% a 80%",
    payout: "D+2 a D+15",
    catalog: "Catálogo médio, em crescimento",
    focus: "Infoproduto Brasil",
    edge: "Taxa baixa e checkout otimizado",
    idealFor: "Afiliado focado em conversão rápida",
  },
  monetizze: {
    id: "monetizze",
    name: "Monetizze",
    logo: "/monetizze.png",
    commission: "5% a 80%",
    payout: "D+30",
    catalog: "Catálogo médio",
    focus: "Infoproduto e físico",
    edge: "Venda de produto físico permitida",
    idealFor: "Afiliado que mistura digital e físico",
  },
  braip: {
    id: "braip",
    name: "Braip",
    logo: "/braip.png",
    commission: "30% a 80%",
    payout: "D+30 a D+45",
    catalog: "Catálogo médio menor",
    focus: "Infoproduto",
    edge: "Checkout próprio e ferramentas de scarcity",
    idealFor: "Afiliado de nicho de saúde e relacionamento",
  },
};

export const PLATFORM_ORDER: PlatformId[] = [
  "hotmart",
  "kiwify",
  "monetizze",
  "braip",
];

/**
 * Tabela de scoring. Para cada resposta possível, atribui uma nota de 0 a 3
 * a cada plataforma. A recomendação soma as 3 dimensões.
 * O peso reflete adequação do perfil da resposta ao posicionamento da plataforma.
 */
export const PLATFORM_SCORES: {
  product: Record<ProductTypeId, Record<PlatformId, number>>;
  volume: Record<VolumeId, Record<PlatformId, number>>;
  importance: Record<ImportanceId, Record<PlatformId, number>>;
} = {
  product: {
    curso: { hotmart: 3, kiwify: 3, monetizze: 2, braip: 3 },
    software: { hotmart: 2, kiwify: 2, monetizze: 1, braip: 1 },
    fisico: { hotmart: 1, kiwify: 0, monetizze: 3, braip: 0 },
    indeciso: { hotmart: 3, kiwify: 2, monetizze: 2, braip: 1 },
  },
  volume: {
    "0-10": { hotmart: 2, kiwify: 3, monetizze: 2, braip: 2 },
    "10-50": { hotmart: 2, kiwify: 3, monetizze: 2, braip: 2 },
    "50-200": { hotmart: 3, kiwify: 2, monetizze: 2, braip: 2 },
    "200+": { hotmart: 3, kiwify: 2, monetizze: 2, braip: 2 },
  },
  importance: {
    comissao: { hotmart: 2, kiwify: 2, monetizze: 2, braip: 3 },
    saque: { hotmart: 1, kiwify: 3, monetizze: 1, braip: 0 },
    catalogo: { hotmart: 3, kiwify: 2, monetizze: 2, braip: 1 },
    suporte: { hotmart: 2, kiwify: 3, monetizze: 2, braip: 2 },
  },
};

export const PRODUCT_QUESTION: QuizQuestion<ProductTypeId> = {
  id: "product",
  prompt: "Que tipo de produto você quer promover?",
  options: [
    { id: "curso", label: "Curso ou infoproduto" },
    { id: "software", label: "Software ou SaaS" },
    { id: "fisico", label: "E-commerce físico" },
    { id: "indeciso", label: "Ainda não decidi" },
  ],
};

export const VOLUME_QUESTION: QuizQuestion<VolumeId> = {
  id: "volume",
  prompt: "Qual seu volume estimado de vendas mensais?",
  options: [
    { id: "0-10", label: "0 a 10 vendas" },
    { id: "10-50", label: "10 a 50 vendas" },
    { id: "50-200", label: "50 a 200 vendas" },
    { id: "200+", label: "Mais de 200 vendas" },
  ],
};

export const IMPORTANCE_QUESTION: QuizQuestion<ImportanceId> = {
  id: "importance",
  prompt: "O que mais importa pra você?",
  options: [
    { id: "comissao", label: "Maior comissão percentual" },
    { id: "saque", label: "Saque rápido" },
    { id: "catalogo", label: "Catálogo amplo" },
    { id: "suporte", label: "Suporte ao afiliado" },
  ],
};

export const QUIZ_QUESTIONS = [
  PRODUCT_QUESTION,
  VOLUME_QUESTION,
  IMPORTANCE_QUESTION,
] as const;

export const FAQS: FaqItem[] = [
  {
    q: "Qual a melhor plataforma de afiliados no Brasil em 2026?",
    a: "Não existe uma resposta única. Hotmart tem o maior catálogo e alcance internacional, Kiwify paga mais rápido e tem checkout enxuto, Monetizze é a única que permite produto físico, e Braip se destaca em nichos como saúde e relacionamento. A melhor plataforma depende do seu produto, do seu volume e da sua prioridade entre comissão, saque e variedade.",
  },
  {
    q: "Hotmart ou Kiwify, qual paga mais rápido?",
    a: "A Kiwify é mais rápida. O prazo de saque varia entre D+2 e D+15, dependendo do método de pagamento usado pelo comprador. A Hotmart, no Brasil, libera o saldo em D+30. Para quem precisa de fluxo de caixa rápido, a Kiwify costuma ser a escolha mais confortável.",
  },
  {
    q: "Monetizze permite produto físico?",
    a: "Sim. A Monetizze é a única entre as quatro principais que aceita oficialmente a venda de produto físico, incluindo gestão de envio. Isso a torna a plataforma natural para quem mistura infoproduto e e-commerce físico no mesmo catálogo de afiliados.",
  },
  {
    q: "Como receber comissão da Braip?",
    a: "A Braip credita o valor da venda assim que o pagamento é confirmado e libera o saque em uma janela que costuma ficar entre D+30 e D+45. Você precisa cadastrar uma conta bancária dentro do painel e solicitar o saque manualmente. A plataforma também desconta taxas administrativas variáveis por produto.",
  },
  {
    q: "Posso ser afiliado em mais de uma plataforma ao mesmo tempo?",
    a: "Sim, e a maioria dos afiliados profissionais opera em pelo menos duas. Não há exclusividade contratual entre as plataformas, e diversificar reduz risco de queda de receita quando um produto sai do ar. O desafio é gerenciar o caixa de cada uma, e é aí que ferramentas como o Comizy fazem diferença.",
  },
  {
    q: "Como organizar comissões de várias plataformas?",
    a: "A forma manual é planilha, mas ela quebra rápido quando você passa de duas plataformas ou cinquenta vendas no mês. A forma escalável é centralizar tudo num dashboard que recebe webhook de cada plataforma e mostra vendas, reembolsos e saldo a receber em tempo real, sem precisar abrir oito abas todo dia.",
  },
];

/**
 * Texto de prosa longa. Mantido aqui para facilitar edição.
 * Cada string é um parágrafo. A página renderiza com espaçamento entre eles.
 */
export const INTRO_PARAGRAPHS: string[] = [
  "Escolher entre Hotmart, Kiwify, Monetizze e Braip não é uma decisão de marca. É uma decisão de modelo de negócio. Cada plataforma foi desenhada para um tipo de produto, um perfil de vendedor e um ritmo de saque diferente, e a diferença no resultado final do mês para o afiliado é grande. Quem promove curso de ticket alto numa plataforma que cobra taxa fixa por boleto pode estar deixando dinheiro na mesa sem perceber. Quem precisa de fluxo de caixa rápido e está numa plataforma com saque D+30 acaba dependendo de adiantamento bancário para pagar tráfego.",
  "A Hotmart, fundada em Belo Horizonte, é a maior em catálogo e a única com presença internacional relevante. Tem mais de 500 mil produtos cadastrados, uma rede ativa de afiliados em vários países e ferramentas próprias como o Hotleads para captura de e-mail. A taxa de comissão típica para o afiliado vai de zero a oitenta por cento, definida pelo produtor. O saque, no Brasil, é D+30 a partir da liberação financeira de cada venda, prazo que costuma ser confortável para produtores grandes mas longo para iniciantes.",
  "A Kiwify nasceu com a proposta oposta. Catálogo menor, foco no Brasil, taxa baixa e saque entre D+2 e D+15, dependendo do método de pagamento. O checkout é leve, converte bem em mobile e cresceu rápido em nichos de infoproduto digital. Para quem está começando, é geralmente a porta de entrada mais amigável. Já a Monetizze ocupa um espaço próprio: é a única das quatro grandes que permite produto físico, incluindo gestão de envio, e por isso atrai afiliados que querem misturar e-book e suplemento no mesmo painel. A Braip, por fim, ficou conhecida pela força em nichos específicos como saúde, relacionamento e finanças, com ferramentas de scarcity, order bump e upsell embutidas no próprio checkout.",
  "A escolha errada custa caro, mas a escolha certa não é fixa. Um afiliado iniciante de infoproduto digital provavelmente começa na Kiwify pelo saque rápido, migra parcialmente para Hotmart quando quer testar produtos internacionais, adiciona Monetizze se entrar em e-commerce físico e usa Braip quando atua em saúde. Esse caminho é o normal, não a exceção. A parte difícil não é escolher uma. É manter visibilidade do que está acontecendo em todas elas ao mesmo tempo, sem perder venda, reembolso ou prazo de saque.",
];

export const LONG_CONTENT: {
  intro: string;
  sections: { h3: string; paragraphs: string[] }[];
} = {
  intro:
    "Existem três critérios que pesam mais que qualquer outro na hora de escolher uma plataforma de afiliado, e quase todos os outros são derivados desses três. Antes de comparar checkout, painel ou cor do botão, vale entender o que realmente muda o resultado no fim do mês.",
  sections: [
    {
      h3: "Os critérios que de fato importam",
      paragraphs: [
        "O primeiro critério é o ajuste entre o produto e a plataforma. Curso de inglês com ticket de quatrocentos reais funciona bem em Hotmart e Kiwify. Suplemento físico com recorrência só faz sentido em Monetizze. Produto de relacionamento com funil de scarcity está mais em casa na Braip. Forçar o produto na plataforma errada significa converter menos, lidar com restrições de anúncio e arriscar suspensão de conta.",
        "O segundo critério é o ciclo financeiro. Plataforma com saque D+30 e taxa baixa, como Hotmart, costuma ser melhor para quem já tem reserva. Plataforma com saque rápido, como a Kiwify, sustenta operação de tráfego pago sem precisar de capital de giro. A diferença entre receber em três dias e receber em trinta e cinco é o que define se o seu anúncio de Google Ads continua ativo na semana seguinte.",
        "O terceiro critério é o ecossistema de afiliados. Catálogo grande, como o da Hotmart, dá variedade. Catálogo curado, como o da Braip em nichos específicos, dá especialização. Não é certo ou errado, é estratégia. Se você vai operar em três ou quatro produtos diferentes, o catálogo amplo ganha. Se você quer dominar um nicho com cinco produtos no funil, o catálogo curado entrega mais.",
      ],
    },
    {
      h3: "Mitos comuns que custam dinheiro",
      paragraphs: [
        "O primeiro mito é o de que existe uma plataforma campeã. Não existe. Existe ajuste de plataforma a perfil. O segundo mito é o de que taxa baixa é sempre melhor. Não é. Uma plataforma com taxa um pouco maior, mas com infraestrutura de prevenção a chargeback mais sofisticada, devolve a diferença em menos perda. O terceiro mito é o de que mudar de plataforma é simples. Não é. Cada plataforma tem regras próprias de checkout, política de reembolso e prazos, e migrar exige refazer link, recriar pixel e reeducar a base.",
        "Outro ponto que confunde iniciantes é a taxa de comissão divulgada. Quando uma plataforma anuncia comissão de até oitenta por cento, isso significa que o produtor pode oferecer até aquele teto. Não significa que todos os produtos pagam isso. Os produtos com comissão alta são geralmente os mais saturados e disputados, e os produtos com comissão menor podem converter muito mais. Olhar só o percentual é uma armadilha clássica.",
      ],
    },
    {
      h3: "Quando vale operar em mais de uma plataforma",
      paragraphs: [
        "A resposta é simples: quando você cruza a faixa de cinquenta vendas por mês. Abaixo disso, focar em uma plataforma reduz fricção operacional e acelera aprendizado. Acima disso, depender de uma única plataforma vira risco. Plataforma que mudou regra de anúncio, produto que saiu do ar, instabilidade no checkout, qualquer evento desses derruba a receita do mês inteiro. Diversificar entre duas ou três plataformas espalha esse risco e abre portas para produtos que só existem em uma.",
        "O problema é que diversificar tem um custo escondido: visibilidade. Cada plataforma tem painel próprio, com regras próprias de exibição, prazos próprios e definições próprias de venda confirmada. Acompanhar tudo manualmente em três abas diferentes consome uma hora por dia e ainda assim deixa coisa passar. Reembolso entrou e você não viu, chargeback caiu e o painel não destacou, saque foi liberado e você esqueceu de solicitar. Esses pequenos atritos somam.",
        'É exatamente aí que ferramentas de unificação entram. O <a href="/" class="text-brand-700 underline underline-offset-2 hover:text-brand-600">Comizy</a> faz isso: você conecta cada plataforma por webhook em dois minutos e passa a ver toda a sua receita, todas as vendas e todos os reembolsos num único painel. Não é planilha automatizada. É infraestrutura que recebe o evento da plataforma no instante em que ele acontece e mostra na tela em tempo real.',
      ],
    },
    {
      h3: "Como começar do jeito certo",
      paragraphs: [
        "Se você está começando hoje, comece em uma plataforma só. Faça o caminho completo: cadastro, solicitação de afiliação, geração de link, criação de campanha, primeira venda, primeiro saque. Esse ciclo inteiro ensina mais sobre como o jogo funciona do que qualquer treinamento. A escolha da plataforma para começar é geralmente Kiwify, pelo saque rápido e curva curta, ou Hotmart, se você já tem público formado e quer variedade de produto desde o primeiro dia.",
        'Quando bater a primeira faixa de cinquenta vendas mensais consistentes, comece a olhar a segunda plataforma. Não migre, adicione. O perfil ideal de afiliado em 2026 não é o que defende uma plataforma. É o que opera duas ou três com fluidez e mantém um painel unificado por cima delas. Se você quer ver como esse painel funciona na prática, dá pra <a href="/#precos" class="text-brand-700 underline underline-offset-2 hover:text-brand-600">conhecer o Comizy</a> e configurar a primeira integração ainda hoje.',
        'Independente da plataforma que você escolher, três coisas fazem mais diferença do que a escolha em si: ter um sistema claro de mensuração de campanha, manter uma reserva de seis semanas de despesa de tráfego para sobreviver a saque longo, e nunca depender de uma plataforma só. Plataforma é canal de distribuição. Seu negócio é o público e a oferta. Comizy existe pra que a parte chata de juntar os canais não seja sua, e você possa <a href="/" class="text-brand-700 underline underline-offset-2 hover:text-brand-600">focar onde realmente importa</a>.',
      ],
    },
  ],
};

/**
 * Justificativa textual gerada a partir das respostas do quiz.
 * Mantida em função pura para que o componente Result não precise de estado.
 */
export interface QuizAnswers {
  product: ProductTypeId;
  volume: VolumeId;
  importance: ImportanceId;
}

export interface QuizResult {
  primary: PlatformId;
  alternatives: PlatformId[];
  justification: string;
  showComizyCallout: boolean;
}

export function computeQuizResult(answers: QuizAnswers): QuizResult {
  const totals = PLATFORM_ORDER.map((id) => {
    const score =
      PLATFORM_SCORES.product[answers.product][id] +
      PLATFORM_SCORES.volume[answers.volume][id] +
      PLATFORM_SCORES.importance[answers.importance][id];
    return { id, score };
  });

  totals.sort((a, b) => b.score - a.score);

  const primary = totals[0].id;
  const alternatives = totals.slice(1, 3).map((t) => t.id);

  return {
    primary,
    alternatives,
    justification: buildJustification(primary, answers),
    showComizyCallout: answers.volume === "50-200" || answers.volume === "200+",
  };
}

function buildJustification(primary: PlatformId, answers: QuizAnswers): string {
  const platform = PLATFORMS[primary];

  const productPhrase = {
    curso: "Como você quer promover curso ou infoproduto, ",
    software: "Como o foco é software ou SaaS, ",
    fisico: "Como você vai trabalhar com produto físico, ",
    indeciso: "Como você ainda está decidindo o tipo de produto, ",
  }[answers.product];

  const importancePhrase = {
    comissao:
      "ela tem boa flexibilidade de comissão e atrai produtos de ticket alto.",
    saque:
      "ela tem um dos prazos de saque mais curtos do mercado nacional, o que ajuda no fluxo de caixa.",
    catalogo:
      "ela oferece o catálogo mais amplo e variado entre as opções comparadas.",
    suporte:
      "ela oferece um dos suportes mais responsivos ao afiliado, com documentação clara.",
  }[answers.importance];

  const volumePhrase = {
    "0-10":
      "Pra quem ainda está validando os primeiros números, é a opção com menor curva de aprendizado.",
    "10-50":
      "Nessa faixa de vendas, a escolha tende a estabilizar e te dá margem pra escalar.",
    "50-200": "Nesse volume, dá pra extrair valor real dos diferenciais dela.",
    "200+": "Operando nesse volume, ela aguenta o ritmo sem virar gargalo.",
  }[answers.volume];

  return `${productPhrase}a ${platform.name} faz sentido porque ${importancePhrase} ${volumePhrase}`;
}
