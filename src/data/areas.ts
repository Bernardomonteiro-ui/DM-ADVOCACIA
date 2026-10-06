/**
 * Áreas de atuação — fonte única para Home, /areas-de-atuacao, páginas individuais,
 * menu, rodapé, Schema.org e categorias de artigos.
 *
 * Diretrizes de conteúdo (publicidade da advocacia — Provimento 205/2021 OAB):
 * - linguagem informativa, sem promessa de resultado;
 * - "situações" descrevem quando o visitante pode buscar orientação, não serviços inventados;
 * - referências legais restritas a dispositivos amplamente consolidados.
 * Revisar com o cliente antes da publicação. [TODO — CONFIRMAR COM CLIENTE]
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface InfoBlock {
  title: string;
  body: string;
}

export interface Area {
  slug: string;
  number: string;
  name: string;
  short: string;
  /** Palavra-assinatura usada como elemento tipográfico. */
  signature: string;
  seoTitle: string;
  metaDescription: string;
  /** Subtítulo do hero da página da área. */
  lead: string;
  /** Uma linha para listagens (Home, menu). */
  summary: string;
  intro: string[];
  situations: string[];
  approach: string;
  info: InfoBlock[];
  faq: FaqItem[];
  related: string[];
  whatsappMessage: string;
}

const msg = (area: string) =>
  `Olá! Gostaria de conversar com a DM Advocacia sobre uma questão de ${area}.`;

export const areas: Area[] = [
  {
    slug: 'direito-trabalhista',
    number: '01',
    name: 'Direito Trabalhista',
    short: 'Trabalhista',
    signature: 'Trabalho',
    seoTitle: 'Advogado Trabalhista em Porto Alegre',
    metaDescription:
      'Advogado trabalhista em Porto Alegre: rescisão, horas extras, vínculo de emprego, assédio e acidente de trabalho. Atendimento presencial ou por vídeo.',
    lead: 'Orientação clara para quem enfrenta uma questão na relação de trabalho — do fim do contrato às condições do dia a dia.',
    summary: 'Rescisão, jornada, vínculo de emprego, assédio e acidente de trabalho.',
    intro: [
      'Questões trabalhistas costumam envolver prazos, documentos e cálculos que fazem diferença no resultado da análise. Por isso, o primeiro passo é entender com precisão o que aconteceu durante o contrato e como ele terminou.',
      'Na DM Advocacia, casos trabalhistas são conduzidos por profissional dedicado à área, que analisa a documentação, explica os caminhos possíveis e acompanha cada etapa — extrajudicial ou judicial.',
    ],
    situations: [
      'Verbas rescisórias não pagas ou calculadas de forma incorreta',
      'Horas extras, intervalos e jornada de trabalho',
      'Trabalho sem carteira assinada e reconhecimento de vínculo',
      'Assédio moral ou sexual no ambiente de trabalho',
      'Acidente de trabalho e doença ocupacional',
      'FGTS, férias e 13º salário',
      'Adicionais de insalubridade e periculosidade',
    ],
    approach:
      'O profissional responsável analisa contrato, holerites, registros de jornada e comunicações, organiza a linha do tempo do caso e apresenta, de forma objetiva, quais medidas são cabíveis e quais são os riscos de cada caminho.',
    info: [
      {
        title: 'Atenção aos prazos',
        body: 'Pela Constituição Federal (art. 7º, XXIX), a ação trabalhista deve ser proposta em até dois anos após o fim do contrato, podendo alcançar créditos dos últimos cinco anos. Buscar orientação cedo evita a perda de direitos pelo decurso do tempo.',
      },
      {
        title: 'Documentos que ajudam na análise',
        body: 'Carteira de trabalho, contrato, holerites, termo de rescisão, extrato do FGTS, registros de ponto e mensagens ou e-mails relacionados ao trabalho. Não é preciso ter tudo para a primeira conversa — o profissional indica o que é relevante.',
      },
    ],
    faq: [
      {
        q: 'Existe prazo para entrar com uma ação trabalhista?',
        a: 'Sim. Em regra, a ação deve ser proposta em até dois anos após o término do contrato de trabalho, e pode abranger os direitos dos últimos cinco anos (art. 7º, XXIX, da Constituição Federal). Cada situação deve ser avaliada individualmente.',
      },
      {
        q: 'Quais documentos devo separar antes do atendimento?',
        a: 'Carteira de trabalho, contrato, holerites, termo de rescisão, extrato do FGTS e quaisquer mensagens ou registros relacionados. Se você não tiver algum deles, o profissional orienta sobre como obtê-los.',
      },
      {
        q: 'Posso ser atendido por chamada de vídeo?',
        a: 'Sim. O atendimento pode ser presencial, no escritório em Porto Alegre, ou por chamada de vídeo, com horário marcado.',
      },
    ],
    related: ['direito-previdenciario', 'direito-civil'],
    whatsappMessage: msg('Direito Trabalhista'),
  },
  {
    slug: 'direito-criminal',
    number: '02',
    name: 'Direito Criminal',
    short: 'Criminal',
    signature: 'Defesa',
    seoTitle: 'Advogado Criminalista em Porto Alegre',
    metaDescription:
      'Advogado criminalista em Porto Alegre: defesa em inquérito, prisão em flagrante, audiência de custódia e processo criminal. Atendimento sigiloso.',
    lead: 'Defesa técnica, sigilosa e atenta a cada etapa — da fase de investigação ao processo.',
    summary: 'Inquérito, flagrante, audiência de custódia, processo e recursos.',
    intro: [
      'Em matéria criminal, decisões tomadas nas primeiras horas podem influenciar todo o desenrolar do caso. Ter orientação técnica desde o início ajuda a garantir que os direitos do investigado ou acusado sejam respeitados.',
      'Na DM Advocacia, casos criminais são acompanhados por profissional dedicado à área, com comunicação direta, sigilo e atenção a prazos e audiências.',
    ],
    situations: [
      'Prisão em flagrante e audiência de custódia',
      'Intimação para prestar depoimento',
      'Inquérito policial em andamento',
      'Defesa em processo criminal',
      'Medidas protetivas',
      'Crimes de trânsito',
      'Recursos e execução penal',
    ],
    approach:
      'O profissional responsável analisa o procedimento, verifica a regularidade de cada ato, orienta o cliente e a família sobre o que esperar e conduz a defesa técnica com comunicação clara em todas as fases.',
    info: [
      {
        title: 'Direitos de quem é investigado',
        body: 'A Constituição Federal assegura à pessoa presa o direito de permanecer calada e de ter assistência de advogado (art. 5º, LXIII). A presença de um defensor desde a fase de investigação contribui para que essas garantias sejam observadas.',
      },
      {
        title: 'Sigilo profissional',
        body: 'Tudo o que é conversado com o advogado está protegido pelo sigilo profissional, previsto no Estatuto da Advocacia. O atendimento pode ser feito de forma reservada, presencialmente ou por vídeo.',
      },
    ],
    faq: [
      {
        q: 'Recebi uma intimação para depor. Preciso de advogado?',
        a: 'Ter orientação antes de prestar depoimento é recomendável: o advogado explica em que condição você está sendo ouvido, quais são seus direitos e pode acompanhá-lo no ato.',
      },
      {
        q: 'O que é a audiência de custódia?',
        a: 'É a apresentação da pessoa presa a um juiz, em regra em até 24 horas, para que se avalie a legalidade da prisão e a necessidade de mantê-la. A presença da defesa técnica é obrigatória nesse ato.',
      },
      {
        q: 'O atendimento é sigiloso?',
        a: 'Sim. As informações compartilhadas com o advogado estão protegidas pelo sigilo profissional.',
      },
    ],
    related: ['direito-das-familias', 'direito-civil'],
    whatsappMessage:
      'Olá! Gostaria de conversar com a DM Advocacia sobre uma questão relacionada ao Direito Criminal.',
  },
  {
    slug: 'direito-civil',
    number: '03',
    name: 'Direito Civil',
    short: 'Civil',
    signature: 'Contratos',
    seoTitle: 'Advogado Civil em Porto Alegre',
    metaDescription:
      'Advogado civil em Porto Alegre: contratos, indenizações, cobranças, imóveis, inventário e sucessões. Orientação preventiva e atuação judicial.',
    lead: 'Contratos, patrimônio e responsabilidade: orientação para prevenir conflitos e conduzir os que já existem.',
    summary: 'Contratos, indenizações, cobranças, imóveis e sucessões.',
    intro: [
      'O Direito Civil está presente em grande parte das relações do dia a dia: contratos, compra e venda, aluguel, dívidas, danos e heranças. Muitas vezes, uma orientação no momento certo evita um litígio.',
      'Na DM Advocacia, demandas civis são conduzidas por profissional dedicado à área, tanto na prevenção — análise e elaboração de documentos — quanto na solução de conflitos.',
    ],
    situations: [
      'Elaboração, revisão ou descumprimento de contratos',
      'Indenização por danos materiais e morais',
      'Cobranças e dívidas',
      'Locação, compra e venda de imóveis',
      'Posse, propriedade e usucapião',
      'Inventário, partilha e testamentos',
      'Conflitos entre vizinhos e condomínios',
    ],
    approach:
      'O profissional responsável estuda os documentos e o histórico da relação, avalia as alternativas — negociação, notificação, acordo ou ação judicial — e recomenda o caminho mais adequado ao objetivo do cliente.',
    info: [
      {
        title: 'Prazos também existem no Direito Civil',
        body: 'O Código Civil estabelece prazos de prescrição que variam conforme o tipo de pretensão. A reparação civil, por exemplo, prescreve em regra em três anos (art. 206, § 3º, V). Por isso, vale buscar orientação assim que o problema surgir.',
      },
      {
        title: 'Prevenir costuma ser mais simples',
        body: 'Ler um contrato antes de assinar, registrar acordos por escrito e guardar comprovantes reduzem significativamente as chances de conflito. A análise prévia de documentos é uma das formas mais eficientes de proteção.',
      },
    ],
    faq: [
      {
        q: 'Vale a pena consultar um advogado antes de assinar um contrato?',
        a: 'Sim, especialmente em contratos de valor relevante ou de longa duração, como compra e venda de imóveis, locações e contratos empresariais. A análise prévia ajuda a identificar cláusulas desequilibradas e riscos.',
      },
      {
        q: 'Toda questão civil precisa ir à Justiça?',
        a: 'Não. Muitas situações podem ser resolvidas por negociação, notificação extrajudicial ou acordo. O profissional avalia qual alternativa é mais adequada ao caso.',
      },
      {
        q: 'O inventário pode ser feito em cartório?',
        a: 'Em determinadas situações, sim — quando há consenso entre os herdeiros e os requisitos legais são atendidos, o inventário pode ser feito por escritura pública, sempre com assistência de advogado.',
      },
    ],
    related: ['direito-do-consumidor', 'direito-das-familias', 'direito-bancario'],
    whatsappMessage: msg('Direito Civil'),
  },
  {
    slug: 'direito-das-familias',
    number: '04',
    name: 'Direito das Famílias',
    short: 'Famílias',
    signature: 'Família',
    seoTitle: 'Advogado de Família em Porto Alegre',
    metaDescription:
      'Advogado de família em Porto Alegre: divórcio, guarda, pensão alimentícia, união estável e partilha de bens. Atendimento reservado e humanizado.',
    lead: 'Momentos delicados pedem escuta, discrição e orientação firme. Cuidamos de questões familiares com seriedade e humanidade.',
    summary: 'Divórcio, guarda, pensão alimentícia, união estável e partilha.',
    intro: [
      'Questões familiares envolvem emoções, filhos e patrimônio ao mesmo tempo. Ter um profissional que explique com clareza as alternativas ajuda a tomar decisões mais seguras em um momento difícil.',
      'Na DM Advocacia, casos de família são conduzidos por profissional dedicado à área, priorizando — sempre que possível — soluções consensuais, sem abrir mão da defesa dos interesses do cliente.',
    ],
    situations: [
      'Divórcio consensual ou litigioso',
      'Guarda dos filhos e regime de convivência',
      'Pensão alimentícia: fixação, revisão e cobrança',
      'Reconhecimento e dissolução de união estável',
      'Partilha de bens',
      'Investigação ou reconhecimento de paternidade',
    ],
    approach:
      'O profissional responsável escuta a história da família, explica direitos e deveres de cada parte, avalia a possibilidade de acordo e conduz o caso com discrição — em cartório, em mediação ou judicialmente.',
    info: [
      {
        title: 'Quando há consenso',
        body: 'O Código de Processo Civil (art. 733) permite que o divórcio e a dissolução de união estável consensuais sejam feitos em cartório, por escritura pública, em determinadas situações — sempre com assistência de advogado.',
      },
      {
        title: 'O interesse dos filhos em primeiro lugar',
        body: 'Pelo Código Civil, a guarda compartilhada é a regra quando ambos os genitores estão aptos a exercer o poder familiar. Decisões sobre guarda, convivência e alimentos consideram, antes de tudo, o melhor interesse da criança.',
      },
    ],
    faq: [
      {
        q: 'O divórcio pode ser feito sem processo judicial?',
        a: 'Em determinadas situações, sim. Quando há consenso e os requisitos legais são atendidos, o divórcio pode ser realizado em cartório, com assistência de advogado. O profissional avalia se o seu caso se enquadra.',
      },
      {
        q: 'A pensão alimentícia pode ser revista?',
        a: 'Sim. Quando há mudança na necessidade de quem recebe ou na possibilidade de quem paga, é possível pedir a revisão do valor.',
      },
      {
        q: 'O atendimento é reservado?',
        a: 'Sim. As conversas com o advogado são protegidas pelo sigilo profissional, e o atendimento pode ser presencial ou por vídeo.',
      },
    ],
    related: ['direito-civil', 'direito-previdenciario'],
    whatsappMessage: msg('Direito das Famílias'),
  },
  {
    slug: 'direito-do-consumidor',
    number: '05',
    name: 'Direito do Consumidor',
    short: 'Consumidor',
    signature: 'Consumo',
    seoTitle: 'Advogado do Consumidor em Porto Alegre',
    metaDescription:
      'Advogado do consumidor em Porto Alegre: cobrança indevida, nome negativado, produtos com defeito, voos e planos de saúde. Atendimento por vídeo.',
    lead: 'Cobranças, produtos, serviços e contratos: orientação para quem teve seus direitos de consumidor desrespeitados.',
    summary: 'Cobrança indevida, negativação, defeitos, voos e planos de saúde.',
    intro: [
      'O Código de Defesa do Consumidor reconhece que, na relação de consumo, o consumidor é a parte mais vulnerável. Ainda assim, muitas pessoas não sabem quais são seus direitos nem como exercê-los.',
      'Na DM Advocacia, questões de consumo são conduzidas por profissional dedicado à área, que analisa o caso, orienta sobre as alternativas e atua quando necessário.',
    ],
    situations: [
      'Cobranças indevidas',
      'Nome negativado indevidamente',
      'Produtos com defeito ou serviços não prestados',
      'Atraso, cancelamento de voo e extravio de bagagem',
      'Negativa de cobertura por plano de saúde',
      'Problemas com compras pela internet',
    ],
    approach:
      'O profissional responsável reúne comprovantes, protocolos e comunicações com a empresa, avalia a possibilidade de solução extrajudicial e, quando necessário, conduz a demanda judicialmente.',
    info: [
      {
        title: 'Compras fora da loja física',
        body: 'Nas compras feitas fora do estabelecimento comercial — pela internet ou por telefone, por exemplo — o consumidor pode desistir em até sete dias a contar do recebimento (art. 49 do Código de Defesa do Consumidor).',
      },
      {
        title: 'Guarde tudo',
        body: 'Notas fiscais, contratos, protocolos de atendimento, e-mails e capturas de tela são fundamentais. Registrar cada contato com a empresa facilita a análise e eventual comprovação dos fatos.',
      },
    ],
    faq: [
      {
        q: 'Paguei uma cobrança indevida. Tenho direito à devolução?',
        a: 'O Código de Defesa do Consumidor prevê a devolução em dobro do valor pago indevidamente, salvo hipótese de engano justificável (art. 42, parágrafo único). A aplicação depende das circunstâncias de cada caso.',
      },
      {
        q: 'Quanto tempo tenho para reclamar de um produto com defeito?',
        a: 'Em regra, 30 dias para produtos não duráveis e 90 dias para produtos duráveis, contados da entrega ou, no caso de vício oculto, de quando o defeito se manifestar (art. 26 do CDC).',
      },
      {
        q: 'Preciso tentar resolver com a empresa antes?',
        a: 'É recomendável registrar a reclamação e guardar os protocolos. Isso documenta a tentativa de solução e ajuda na análise do caso.',
      },
    ],
    related: ['direito-bancario', 'direito-civil'],
    whatsappMessage: msg('Direito do Consumidor'),
  },
  {
    slug: 'direito-bancario',
    number: '06',
    name: 'Direito Bancário',
    short: 'Bancário',
    signature: 'Crédito',
    seoTitle: 'Advogado Bancário em Porto Alegre',
    metaDescription:
      'Advogado bancário em Porto Alegre: revisão de contratos, superendividamento, golpes e fraudes bancárias, consignados e busca e apreensão.',
    lead: 'Contratos de crédito, dívidas e fraudes: orientação técnica para equilibrar a relação com instituições financeiras.',
    summary: 'Contratos de crédito, superendividamento, fraudes e consignados.',
    intro: [
      'Contratos bancários costumam ser extensos e técnicos, e as consequências de juros, tarifas e encargos nem sempre ficam claras no momento da assinatura.',
      'Na DM Advocacia, questões bancárias são conduzidas por profissional dedicado à área, que analisa os contratos e a situação financeira do cliente para indicar as alternativas disponíveis.',
    ],
    situations: [
      'Revisão de contratos de empréstimo e financiamento',
      'Juros, tarifas e encargos questionáveis',
      'Superendividamento',
      'Golpes, fraudes e transações não reconhecidas',
      'Empréstimo consignado não contratado',
      'Busca e apreensão de veículo financiado',
    ],
    approach:
      'O profissional responsável examina contratos, extratos e comunicações com a instituição, identifica pontos que merecem questionamento e orienta sobre negociação, medidas administrativas ou ação judicial.',
    info: [
      {
        title: 'Superendividamento',
        body: 'A Lei nº 14.181/2021 alterou o Código de Defesa do Consumidor para prevenir e tratar o superendividamento, prevendo, entre outros instrumentos, a possibilidade de repactuação das dívidas preservando o mínimo existencial.',
      },
      {
        title: 'Fraudes e golpes',
        body: 'Segundo entendimento consolidado do Superior Tribunal de Justiça (Súmula 479), instituições financeiras podem responder por danos decorrentes de fraudes praticadas por terceiros no âmbito de operações bancárias. A análise depende das circunstâncias de cada caso.',
      },
    ],
    faq: [
      {
        q: 'Fui vítima de golpe envolvendo minha conta. O que fazer primeiro?',
        a: 'Comunique imediatamente o banco pelos canais oficiais, registre boletim de ocorrência e guarde todos os comprovantes e protocolos. Em seguida, busque orientação para avaliar as medidas cabíveis.',
      },
      {
        q: 'É possível revisar um contrato de financiamento já assinado?',
        a: 'Depende do contrato e das cláusulas envolvidas. O profissional analisa juros, tarifas e encargos para verificar se há fundamentos para questionamento.',
      },
      {
        q: 'O que é superendividamento?',
        a: 'É a impossibilidade manifesta de a pessoa física, de boa-fé, pagar suas dívidas de consumo sem comprometer o mínimo necessário à sua subsistência, conforme definido no Código de Defesa do Consumidor.',
      },
    ],
    related: ['direito-do-consumidor', 'direito-civil'],
    whatsappMessage: msg('Direito Bancário'),
  },
  {
    slug: 'direito-previdenciario',
    number: '07',
    name: 'Direito Previdenciário',
    short: 'Previdenciário',
    signature: 'Previdência',
    seoTitle: 'Advogado Previdenciário em Porto Alegre',
    metaDescription:
      'Advogado previdenciário em Porto Alegre: aposentadoria, BPC/LOAS, auxílio por incapacidade, pensão por morte e benefício negado pelo INSS.',
    lead: 'Aposentadoria, benefícios e revisões: orientação para planejar o futuro e garantir o que é devido.',
    summary: 'Aposentadorias, BPC/LOAS, incapacidade, pensão por morte e revisões.',
    intro: [
      'As regras previdenciárias mudaram de forma significativa com a Reforma da Previdência (Emenda Constitucional nº 103/2019), que criou regras de transição. Entender qual regra se aplica a cada pessoa é essencial.',
      'Na DM Advocacia, questões previdenciárias são conduzidas por profissional dedicado à área, desde o planejamento da aposentadoria até a contestação de benefícios negados.',
    ],
    situations: [
      'Aposentadorias e regras de transição',
      'Benefício negado ou cessado pelo INSS',
      'Auxílio por incapacidade temporária',
      'Aposentadoria por incapacidade permanente',
      'Benefício assistencial (BPC/LOAS)',
      'Pensão por morte',
      'Revisão de benefícios e planejamento previdenciário',
    ],
    approach:
      'O profissional responsável analisa o histórico contributivo (CNIS), os documentos e laudos disponíveis, simula cenários quando cabível e orienta sobre o melhor momento e o caminho mais adequado — administrativo ou judicial.',
    info: [
      {
        title: 'Planejamento previdenciário',
        body: 'Com as regras de transição, a escolha do momento e da regra de aposentadoria pode influenciar o valor do benefício. Uma análise prévia do histórico contributivo ajuda a tomar essa decisão com mais segurança.',
      },
      {
        title: 'Prazo para revisão',
        body: 'Em regra, o prazo para pedir a revisão do ato de concessão de um benefício é de dez anos (art. 103 da Lei nº 8.213/1991). Cada situação deve ser analisada individualmente.',
      },
    ],
    faq: [
      {
        q: 'Meu benefício foi negado pelo INSS. Ainda posso fazer algo?',
        a: 'Sim. É possível recorrer administrativamente ou buscar a via judicial, conforme o caso. O profissional analisa o motivo da negativa e os documentos para indicar o caminho mais adequado.',
      },
      {
        q: 'O que é o CNIS?',
        a: 'É o Cadastro Nacional de Informações Sociais, que reúne o histórico de vínculos e contribuições do segurado. É o ponto de partida para qualquer análise previdenciária.',
      },
      {
        q: 'Atendem pessoas de fora de Porto Alegre?',
        a: 'Sim. O atendimento pode ser realizado por chamada de vídeo, para clientes de todo o Brasil.',
      },
    ],
    related: ['direito-trabalhista', 'direito-das-familias'],
    whatsappMessage: msg('Direito Previdenciário'),
  },
  {
    slug: 'direito-tributario',
    number: '08',
    name: 'Direito Tributário',
    short: 'Tributário',
    signature: 'Tributos',
    seoTitle: 'Advogado Tributário em Porto Alegre',
    metaDescription:
      'Advogado tributário em Porto Alegre: Reforma Tributária, planejamento, defesa em autuações, execução fiscal e restituição de tributos.',
    lead: 'Tributos, dívidas fiscais e a Reforma Tributária: orientação técnica para pessoas e empresas.',
    summary: 'Planejamento, Reforma Tributária, autuações e execuções fiscais.',
    intro: [
      'A carga tributária brasileira é complexa e está em transformação. A Reforma Tributária sobre o consumo (Emenda Constitucional nº 132/2023 e Lei Complementar nº 214/2025) institui novos tributos e um período de transição que exige atenção de empresas e profissionais.',
      'Na DM Advocacia, questões tributárias são conduzidas por profissional dedicado à área, tanto na prevenção quanto na defesa diante do Fisco.',
    ],
    situations: [
      'Adequação à Reforma Tributária (IBS, CBS e Imposto Seletivo)',
      'Planejamento tributário',
      'Defesa em autuações e processos administrativos fiscais',
      'Execução fiscal',
      'Parcelamentos e transação tributária',
      'Restituição ou compensação de tributos pagos indevidamente',
    ],
    approach:
      'O profissional responsável analisa a situação fiscal, os documentos e as notificações recebidas, avalia riscos e oportunidades e orienta sobre defesa, regularização ou planejamento — sempre dentro da legalidade.',
    info: [
      {
        title: 'Reforma Tributária em transição',
        body: 'A substituição de tributos como PIS, Cofins, ICMS e ISS pelos novos IBS e CBS ocorre de forma gradual, com período de transição previsto até 2033. Acompanhar as etapas ajuda a evitar surpresas operacionais e financeiras.',
      },
      {
        title: 'Tributo pago a mais',
        body: 'O Código Tributário Nacional (art. 168) prevê, em regra, o prazo de cinco anos para pedir a restituição de tributo pago indevidamente. A análise depende do tributo e da situação concreta.',
      },
    ],
    faq: [
      {
        q: 'A Reforma Tributária já está em vigor?',
        a: 'A Reforma foi aprovada pela Emenda Constitucional nº 132/2023 e regulamentada pela Lei Complementar nº 214/2025, com implantação gradual em um período de transição que se estende até 2033.',
      },
      {
        q: 'Recebi uma notificação do Fisco. O que fazer?',
        a: 'Verifique o prazo indicado no documento e busque orientação o quanto antes. Muitas defesas administrativas têm prazos curtos.',
      },
      {
        q: 'Atendem pessoas físicas e empresas?',
        a: 'A área tributária pode envolver tanto pessoas físicas quanto empresas. Entre em contato para que o caso seja avaliado.',
      },
    ],
    related: ['direito-civil', 'direito-trabalhista'],
    whatsappMessage: msg('Direito Tributário'),
  },
];

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);

export const areaSlugs = areas.map((a) => a.slug) as [string, ...string[]];
