/**
 * Geradores de JSON-LD (Schema.org). Somente dados reais vindos de siteConfig/areas.
 * Sem avaliações, estrelas, preços ou resultados.
 */
import { siteConfig } from '@/config/site';
import { absoluteUrl } from '@/utils/paths';
import { areas, type Area, type FaqItem } from '@/data/areas';
import { education } from '@/data/about';

const url = (path = '/') => absoluteUrl(path);

export const ids = {
  org: url('/#organizacao'),
  person: url('/sobre#deivid-marcolino'),
  website: url('/#website'),
};

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: `${siteConfig.address.street}, ${siteConfig.address.complement}`,
  addressLocality: siteConfig.address.city,
  addressRegion: siteConfig.address.state,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
});

export function organizationSchema() {
  return {
    '@type': ['LegalService', 'Organization'],
    '@id': ids.org,
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    slogan: siteConfig.tagline.join(' '),
    url: url('/'),
    logo: url('/logo-dm-advocacia.png'),
    image: url(siteConfig.seo.ogImage),
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    address: postalAddress(),
    hasMap: siteConfig.maps.link,
    areaServed: [
      { '@type': 'City', name: siteConfig.address.city },
      { '@type': 'Country', name: siteConfig.address.countryName },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: siteConfig.hours.schemaOpens,
      closes: siteConfig.hours.schemaCloses,
    },
    knowsAbout: areas.map((a) => a.name),
    founder: { '@id': ids.person },
    sameAs: [siteConfig.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Áreas de atuação',
      itemListElement: areas.map((a) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: a.name, url: url(`/${a.slug}`) },
      })),
    },
  };
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: siteConfig.lawyer.name,
    jobTitle: siteConfig.lawyer.role,
    worksFor: { '@id': ids.org },
    url: url('/sobre'),
    image: url('/og-default.jpg'),
    knowsAbout: areas.map((a) => a.name),
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Registro profissional',
        name: siteConfig.lawyer.oab,
        recognizedBy: { '@type': 'Organization', name: 'Ordem dos Advogados do Brasil, Seccional RS' },
      },
      ...education.map((e) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Pós-graduação',
        name: e.title,
      })),
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: url('/'),
    name: siteConfig.name,
    inLanguage: 'pt-BR',
    publisher: { '@id': ids.org },
  };
}

export function webPageSchema(opts: { path: string; title: string; description: string; type?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': url(opts.path) + '#webpage',
    url: url(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.org },
  };
}

export function serviceSchema(area: Area) {
  return {
    '@type': 'Service',
    '@id': url(`/${area.slug}`) + '#servico',
    name: area.name,
    serviceType: area.name,
    description: area.metaDescription,
    url: url(`/${area.slug}`),
    provider: { '@id': ids.org },
    areaServed: [
      { '@type': 'City', name: siteConfig.address.city },
      { '@type': 'Country', name: siteConfig.address.countryName },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: url(it.path),
    })),
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
}) {
  return {
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.pubDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    mainEntityOfPage: url(opts.path),
    author: { '@id': ids.person },
    publisher: { '@id': ids.org },
    inLanguage: 'pt-BR',
  };
}

/** Empacota vários nós num único @graph. */
export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
