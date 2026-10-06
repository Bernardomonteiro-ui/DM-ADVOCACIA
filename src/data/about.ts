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
  'Mais de 20 anos de atuação na área do Direito',
  'Empresário',
] as const;

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
