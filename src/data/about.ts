/**
 * Informações sobre o advogado — somente dados confirmados pelo cliente.
 * Para acrescentar instituições de ensino, anos de conclusão ou membros da equipe,
 * edite este arquivo. [TODO — CONFIRMAR COM CLIENTE] instituições e anos de formação.
 */

export const education = [
  { title: 'Pós-graduação em Direito e Processo do Trabalho', area: 'direito-trabalhista' },
  { title: 'Pós-graduação em Direito e Processo Civil', area: 'direito-civil' },
  { title: 'Pós-graduação em Criminologia', area: 'direito-criminal' },
  { title: 'Pós-graduação em Direito Digital', area: null },
  { title: 'MBA em Reforma Tributária', area: 'direito-tributario' },
] as const;

export const lawyerFacts = [
  'Mais de 20 anos de experiência jurídica',
  'Empresário',
] as const;

/**
 * Douglas Marcolino — dados fornecidos pelo cliente.
 * Apresentado como Bacharel em Direito (sem inscrição na OAB informada):
 * não chamá-lo de "advogado" nem vinculá-lo à condução de casos.
 */
export const partner = {
  id: 'douglas-marcolino',
  name: 'Douglas Marcolino',
  credential: 'Bacharel em Direito',
  focus: 'Estudos em Ciências Criminais',
  /** Frase de destaque e resumo usados na Home. */
  highlight: 'Estudos dedicados às Ciências Criminais.',
  summary:
    'Com aperfeiçoamento voltado ao Direito Penal e ao Tribunal do Júri, busca compreender a criminalidade sob uma perspectiva jurídica e criminológica, incluindo os aspectos comportamentais, sociais e psicológicos da prática criminosa.',
  bio: [
    'Douglas Marcolino é Bacharel em Direito, com estudos e aperfeiçoamento profissional direcionados às Ciências Criminais, especialmente ao Direito Penal e ao Tribunal do Júri.',
    'Sua formação busca compreender a criminalidade sob uma perspectiva jurídica e criminológica: não apenas a aplicação da legislação penal, mas também os aspectos comportamentais, sociais e psicológicos relacionados à prática criminosa.',
    'Mantém especial interesse pelo Tribunal do Júri, área que exige conhecimento técnico do Direito Penal e Processual Penal, capacidade de análise probatória, argumentação e compreensão aprofundada da dinâmica dos crimes dolosos contra a vida.',
  ],
  studies: ['Direito Penal', 'Criminologia', 'Mentes Criminosas e Comportamento Criminal', 'Tribunal do Júri'],
} as const;

/**
 * Equipe. O cliente informou que a DM atua com profissionais especializados por área,
 * mas nomes, fotos e inscrições ainda não foram fornecidos.
 * [TODO — CONFIRMAR COM CLIENTE] preencher para exibir a seção "Equipe" na página Sobre.
 */
export interface TeamMember {
  name: string;
  oab: string;
  areas: string[];
}

export const team: TeamMember[] = [];
