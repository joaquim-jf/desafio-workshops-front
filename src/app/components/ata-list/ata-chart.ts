import { ChartConfiguration } from 'chart.js';

// Configuração Visual do Gráfico de Pizza
export const PIE_CHART_OPTIONS: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'top' }
  }
};

// Configuração Visual do Gráfico de Barras Horizontal
export const BAR_CHART_OPTIONS: ChartConfiguration['options'] = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { beginAtZero: true, ticks: { stepSize: 1 } }
  },
  plugins: {
    legend: { display: false }
  }
};

// Cores para os gráficos
export const CHART_COLORS = [
  '#42A5F5', '#66BB6A', '#FFA726', '#26C6DA', '#7E57C2', '#EF5350'
];

// Função Helper para gerar cores dinâmicas baseadas no índice
export function generateDynamicColors(count: number) {
  return Array.from({ length: count }, (_, i) => `hsla(${i * 45}, 70%, 50%, 0.8)`);
}