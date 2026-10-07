/**
 * Configuração central da DM Advocacia.
 *
 * Toda informação institucional (contato, endereço, OAB, redes) vive AQUI.
 * Nenhum componente deve repetir esses dados manualmente.
 *
 * Itens marcados com [TODO — CONFIRMAR COM CLIENTE] precisam de validação.
 */

export const siteConfig = {
  name: 'DM Advocacia',
  /** Nome exatamente como aparece no Perfil da Empresa no Google (consistência NAP). */
  legalName: 'DM Advocacia -lex et ordo-',
  motto: 'Lex et Ordo',

  /**
   * Tema de cores do site: 'padrao' (fundos claros, navy) ou 'invertido' (teste: fundos navy, o navy vira branco).
   * Para comparar sem rebuild: ?tema=padrao ou ?tema=invertido na URL (vale para a aba).
   */
  theme: 'invertido' as 'padrao' | 'invertido',
  tagline: ['Especialistas em cada causa.', 'Soluções em cada caso.'] as const,

  /** [TODO — CONFIRMAR COM CLIENTE] domínio definitivo. Manter igual a astro.config.mjs. */
  url: 'https://www.dmadvocacia.com.br',

  lawyer: {
    name: 'Deivid Marcolino',
    role: 'Advogado',
    oab: 'OAB/RS 141.862',
    /** Experiência jurídica (dado confirmado pelo cliente). */
    yearsOfExperience: 20,
  },

  contact: {
    /** Formato internacional, só dígitos: 55 (Brasil) + 51 (DDD) + número. */
    whatsapp: '5551981170921',
    phoneDisplay: '(51) 98117-0921',
    phoneE164: '+55 51 98117-0921',
    email: 'deividmarcolino.adv@gmail.com',
  },

  /** Endereço conforme o Perfil da Empresa no Google. */
  address: {
    street: 'Rua Engenheiro Fernando Abreu Pereira, 107',
    complement: 'Sala 205',
    neighborhood: 'Sarandi',
    city: 'Porto Alegre',
    state: 'RS',
    stateName: 'Rio Grande do Sul',
    postalCode: '91130-030',
    country: 'BR',
    countryName: 'Brasil',
  },

  /**
   * Horário de atendimento.
   * Perfil do Google: "Aberto 24 horas". Interpretação adotada (a confirmar):
   * atendimento mediante agendamento, inclusive fora do horário comercial.
   * [TODO — CONFIRMAR COM CLIENTE]
   */
  hours: {
    short: 'Atendimento com horário marcado',
    long: 'Inclusive fora do horário comercial, quando previamente agendado.',
    /** Usado no Schema.org. Coerente com o Perfil do Google (24h). */
    schemaOpens: '00:00',
    schemaCloses: '23:59',
  },

  social: {
    instagram: 'https://www.instagram.com/dm.advocacia.rs/',
    instagramHandle: '@dm.advocacia.rs',
  },

  /** Referência interna — não exibido publicamente. */
  googleBusinessProfile: 'https://share.google/bZwvZ6soFpmms8UnS',

  maps: {
    /** Link para abrir o endereço no Google Maps. */
    link: 'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('DM Advocacia, Rua Engenheiro Fernando Abreu Pereira, 107, Sarandi, Porto Alegre - RS, 91130-030'),
    embed: 'https://www.google.com/maps?output=embed&q=' +
      encodeURIComponent('Rua Engenheiro Fernando Abreu Pereira, 107, Sarandi, Porto Alegre - RS, 91130-030'),
  },

  seo: {
    defaultTitle: 'DM Advocacia | Escritório de Advocacia em Porto Alegre – RS',
    titleTemplate: '%s | DM Advocacia',
    defaultDescription:
      'Escritório de advocacia em Porto Alegre: cada caso é conduzido por profissional especializado na área. Trabalhista, criminal, civil, famílias e mais.',
    ogImage: '/og-default.jpg',
    locale: 'pt_BR',
  },
} as const;

export const fullAddress = () => {
  const a = siteConfig.address;
  return `${a.street}, ${a.complement.toLowerCase()}, ${a.neighborhood}, ${a.city}, ${a.state}, ${a.postalCode}`;
};

/* ---------------------------------------------------------------- WhatsApp */

export const whatsappMessages = {
  general: 'Olá! Gostaria de agendar um atendimento com a DM Advocacia.',
  about: 'Olá! Gostaria de agendar um atendimento com a DM Advocacia.',
  video: 'Olá! Gostaria de agendar um atendimento por chamada de vídeo com a DM Advocacia.',
} as const;

/** Gera o link wa.me com mensagem contextual. Único ponto que monta a URL do WhatsApp. */
export function whatsappLink(message: string = whatsappMessages.general): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = () => `tel:+${siteConfig.contact.whatsapp}`;
export const mailLink = () => `mailto:${siteConfig.contact.email}`;

/* -------------------------------------------------------------- Navegação */

export const mainNav = [
  { label: 'Áreas de atuação', href: '/areas-de-atuacao' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Artigos', href: '/artigos' },
  { label: 'Contato', href: '/contato' },
] as const;
