/**
 * CONTEÚDO DA PROPOSTA — todos os textos ficam aqui.
 * Trechos entre *asteriscos* recebem destaque em ciano.
 *
 * Modelo de proposta Octus:
 *  - FIXO: hub, DRE, metodologia, próximo passo.
 *  - PERSONALIZADO: capa, oportunidade, onde ganhar mais, alavancas, plano, projeção, implantação.
 */

export const meta = {
  client: 'Villa da Praia',
  agency: 'Studio Octus',
  place: 'Aracaju · SE',
  year: '2026',
}

/** Capítulos do menu em pílula. `from`/`to` = índices das telas. */
export const chapters = [
  { label: 'Octus', from: 1, to: 2 },
  { label: 'Oportunidade', from: 3, to: 4 },
  { label: 'Estratégia', from: 5, to: 7 },
  { label: 'Execução', from: 8, to: 9 },
]

export const sections = [
  'Capa',
  'O hub Octus',
  'Crescimento no resultado',
  'A oportunidade',
  'Onde a Villa pode ganhar mais',
  'Alavancas',
  'O que vamos fazer',
  'Para onde vamos',
  'Metodologia',
  'Implantação',
  'Próximo passo',
]

export const cover = {
  tag: 'Proposta de crescimento',
  disciplines: ['Estratégia', 'Growth', 'Tecnologia'],
  title: 'Villa da Praia',
  subtitle: 'Um plano para a Villa faturar mais e lucrar melhor: mais receita por quarto, por hóspede e o ano inteiro.',
}

export const hub = {
  label: 'Quem somos',
  title: 'Um hub de *growth* e aceleração.',
  lead: 'Inteligência de negócio 360° para fazer empresas faturarem mais. Pensamos a estratégia e executamos com o mesmo time.',
  stats: [
    { value: '5', label: 'especialidades' },
    { value: '360°', label: 'visão de negócio' },
    { value: '1', label: 'time do início ao fim' },
  ],
  center: 'Inteligência de negócio',
  areas: [
    { name: 'Mercado', text: 'Demanda e concorrência' },
    { name: 'Gestão', text: 'Processos e indicadores' },
    { name: 'Publicidade', text: 'Campanhas que vendem' },
    { name: 'Tecnologia', text: 'Sistemas e automação' },
    { name: 'Marketing', text: 'Marca e conteúdo' },
  ],
  highlight: 2,
  closing: 'Do diagnóstico à execução, com foco em faturamento e lucro.',
}

export const dre = {
  label: 'Como medimos',
  title: 'Crescimento que aparece no *resultado*.',
  lead: 'Não medimos curtidas. Medimos o que muda no DRE: quanto entra, quanto sai e quanto fica.',
  cards: [
    { key: 'Faturamento', arrow: '↑', text: 'Mais ocupação, diária certa e consumo extra' },
    { key: 'Custos', arrow: '↓', text: 'Menos comissão e menos trabalho manual' },
    { key: 'Lucro', arrow: '↑', text: 'Mais dinheiro no caixa no fim do mês' },
  ],
}

export const opportunity = {
  label: 'A oportunidade',
  title: 'Aracaju recebe cada vez mais visitantes. A Villa pode transformar essa demanda em *faturamento*.',
  stats: [
    { value: '1,38', unit: 'mi', label: 'Passageiros no aeroporto em 2025' },
    { value: '+43', unit: '%', label: 'Crescimento desde 2022' },
    { value: '219', unit: 'mil', label: 'Turistas na Orla no São João' },
  ],
  chart: {
    title: 'Passageiros · Aeroporto de Aracaju',
    bars: [
      { label: '2022', value: 961575 },
      { label: '2025', value: 1377686 },
    ],
  },
  source: 'Fontes: Aena via Prefeitura de Aracaju (jan/2026) · Governo de Sergipe (mai/2026)',
}

export const gains = {
  label: 'Onde a Villa pode ganhar mais',
  title: 'Quatro oportunidades de *faturamento* já na mesa.',
  items: [
    {
      icon: 'calendar',
      title: 'Baixa temporada e dias de semana',
      today: 'Demanda concentrada em alta temporada e feriados.',
      action: 'Campanhas automáticas por demanda e foco no público local.',
      impact: ['↑ Ocupação', '↑ Faturamento'],
    },
    {
      icon: 'key',
      title: 'Reservas diretas',
      today: 'Reservas por OTAs, com comissão em cada diária.',
      action: 'Canal próprio de reserva e remarketing para ex-hóspedes.',
      impact: ['↓ Comissões', '↑ Margem'],
    },
    {
      icon: 'wine',
      title: 'Área externa e consumo',
      today: 'Balcão, geladeiras e fogão sem uso comercial.',
      action: 'Prateleira de consumo, eventos e collabs com parceiros.',
      impact: ['↑ Ticket por hóspede'],
    },
    {
      icon: 'zap',
      title: 'Operação do dia a dia',
      today: 'Check-in, cobranças e atendimento feitos à mão.',
      action: 'Check-in online, pagamentos e atendimento automatizados.',
      impact: ['↓ Custos', '↑ Lucro'],
    },
  ],
  todayLabel: 'Ponto de partida',
  actionLabel: 'O que faremos',
  note: 'Levantamento a partir da análise externa da Villa. Validamos cada ponto no diagnóstico.',
}

export type LeverChart = 'occupancy' | 'revpar' | 'ticket' | 'time'

export const levers = {
  label: 'Estratégia',
  title: 'Três alavancas de faturamento e uma base de eficiência.',
  items: [
    {
      tab: 'Ocupação',
      title: 'Quartos ocupados o ano inteiro',
      points: ['Mapa de sazonalidade e picos', 'Campanhas automáticas por demanda', 'Público local: sair da rotina sem sair da cidade'],
      insight: 'Sergipe teve 2.157 eventos no calendário de 2025: há demanda além da alta temporada.',
      tags: ['↑ Faturamento'],
      chart: 'occupancy' as LeverChart,
      chartLabel: 'Ocupação ao longo do ano',
      photo: 'poolDay',
    },
    {
      tab: 'Receita por quarto',
      title: 'Cada diária no preço certo',
      points: ['Preço dinâmico guiado pela demanda', 'Mais reservas diretas, menos comissão', 'Acompanhamento de ADR e RevPAR'],
      insight: 'Cada reserva que migra da OTA para o canal direto preserva a comissão no caixa.',
      tags: ['↑ Faturamento', '↑ Margem'],
      chart: 'revpar' as LeverChart,
      chartLabel: 'Receita por quarto disponível',
      photo: 'room',
    },
    {
      tab: 'Receita por hóspede',
      title: 'Mais valor em cada estadia',
      points: ['Prateleira de consumo', 'Gatilhos de consumo durante a estadia', 'Eventos e collabs na área externa'],
      insight: 'A área externa já tem balcão, geladeiras e fogão. Falta transformá-la em receita.',
      tags: ['↑ Ticket por hóspede'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Composição do ticket por hóspede',
      photo: 'poolNight',
    },
    {
      tab: 'Operação leve',
      title: 'Menos atrito, menos custo',
      points: ['Check-in online', 'Pagamentos e cobranças automáticos', 'Atendimento com automações'],
      insight: 'Menos tarefa manual na recepção, mais tempo para receber bem e vender mais.',
      tags: ['↓ Custos', '↑ Lucro'],
      chart: 'time' as LeverChart,
      chartLabel: 'Tempo da equipe em tarefas manuais',
      photo: 'nightBlue',
    },
  ],
}

export const plan = {
  label: 'O que vamos fazer',
  title: 'O plano de execução, frente por frente.',
  lead: 'Cada entrega tem um objetivo claro no resultado da Villa.',
  fronts: [
    {
      name: 'Aquisição',
      goal: '↑ Ocupação',
      items: ['Mapa de sazonalidade', 'Calendário de campanhas', 'Gestão de tráfego pago', 'Campanhas automáticas por demanda', 'Conteúdo para o público local'],
    },
    {
      name: 'Receita',
      goal: '↑ Faturamento por quarto',
      items: ['Política de preço dinâmico', 'Canal de reserva direta', 'Remarketing para ex-hóspedes', 'Monitoramento de ocupação, ADR e RevPAR'],
    },
    {
      name: 'Experiência',
      goal: '↑ Ticket por hóspede',
      items: ['Prateleira de consumo', 'Gatilhos de consumo na estadia', 'Agenda de eventos e collabs', 'Pós-estadia e avaliações'],
    },
    {
      name: 'Tecnologia',
      goal: '↓ Custos · ↑ Lucro',
      items: ['Check-in online', 'Pagamentos e cobranças automáticos', 'Automação de atendimento', 'Painel de indicadores e DRE'],
    },
  ],
}

export const projection = {
  label: 'Para onde vamos',
  title: 'Novas fontes de receita somadas a uma operação mais *eficiente*.',
  layers: ['Diárias', 'Reservas diretas', 'Consumo', 'Eventos'],
  profit: 'Lucro',
  x: ['Hoje', 'Ciclo 1', 'Ciclo 2', 'Ciclo 3'],
  note: 'Cenário ilustrativo. Metas e números são definidos no diagnóstico, a partir do DRE da Villa.',
}

export const method = {
  label: 'Metodologia',
  title: 'Do diagnóstico à *escala*.',
  steps: [
    { name: 'Diagnosticar', text: 'Raio-X da operação, dos canais e do DRE' },
    { name: 'Estruturar', text: 'Plano, metas e indicadores' },
    { name: 'Ativar', text: 'Campanhas, consumo e automações no ar' },
    { name: 'Otimizar', text: 'Ajustes semanais guiados por dados' },
    { name: 'Escalar', text: 'Mais do que funciona, novos mercados' },
  ],
}

export const rollout = {
  label: 'Implantação',
  title: 'Roteiro de implantação em ciclos.',
  lead: 'Cada ciclo entrega resultado e prepara o próximo.',
  cycles: [
    { name: 'Ciclo 1', sub: 'Diagnóstico', items: ['Auditoria da operação', 'DRE e indicadores base', 'Mapa de sazonalidade'], kpi: 'Linha de base definida' },
    { name: 'Ciclo 2', sub: 'Ativação', items: ['Campanhas e reserva direta', 'Check-in online', 'Prateleira de consumo'], kpi: 'Ocupação e ticket em alta' },
    { name: 'Ciclo 3', sub: 'Escala', items: ['Preço dinâmico', 'Eventos e collabs', 'Novos mercados emissores'], kpi: 'Margem e lucro em alta' },
  ],
}

export const closing = {
  title: 'O próximo estágio da Villa começa com uma operação *mais inteligente*.',
  next: 'Próximo passo',
  nextText: 'Diagnóstico da operação e do DRE.',
  receives: ['Raio-X da operação e do DRE', 'Mapa de oportunidades priorizadas', 'Plano de ação com metas'],
  signature: 'Studio Octus × Villa da Praia',
}
