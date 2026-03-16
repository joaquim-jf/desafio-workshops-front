import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataMockService } from '../../services/data-mock';
import { Ata } from '../../models/data.models';

// Imports do Material
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// Grafico e Configurações
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { PIE_CHART_OPTIONS, BAR_CHART_OPTIONS, CHART_COLORS, generateDynamicColors } from './ata-chart';

@Component({
  selector: 'app-ata-list',
  standalone: true,
  templateUrl: './ata-list.html',
  styleUrl: './ata-list.css',
  imports: [
    CommonModule, FormsModule, MatTableModule, MatFormFieldModule, MatInputModule, 
    MatDatepickerModule, MatNativeDateModule, MatCardModule, MatButtonModule, 
    MatIconModule, MatListModule, BaseChartDirective
  ],
  providers: [provideCharts(withDefaultRegisterables())],
})
export class AtaListComponent implements OnInit {
  atas: Ata[] = [];
  atasFiltradas: Ata[] = [];
  filtroColaborador = '';
  filtroWorkshop = '';
  filtroData = '';
  workshopSelecionado: Ata | null = null;

  // Variáveis dos Gráficos 
  public pieOptions = PIE_CHART_OPTIONS;
  public pieData: ChartData<'pie', number[], string | string[]> = { labels: [], datasets: [{ data: [] }] };
  public pieType: ChartType = 'pie';

  public barOptions = BAR_CHART_OPTIONS;
  public barData: ChartData<'bar'> = { labels: [], datasets: [{ data: [] }] };
  public barType: ChartType = 'bar';

  constructor(private service: DataMockService) {}

  ngOnInit() {
    this.service.getAtas().subscribe(res => {
      this.atas = res;
      this.atasFiltradas = res;
      this.initMainChart();
    });
  }

  // Logica dos filtros
  filtrar() {
    this.atasFiltradas = this.atas.filter(a => {
      const matchColab = a.colaboradores.some(c => c.nome.toLowerCase().includes(this.filtroColaborador.toLowerCase()));
      const matchWork = a.workshop.nome.toLowerCase().includes(this.filtroWorkshop.toLowerCase());
      const dataFormatada = this.filtroData ? new Date(this.filtroData).toISOString().split('T')[0] : '';
      const matchData = this.filtroData ? a.workshop.dataRealizacao.toString().includes(dataFormatada) : true;
      return matchColab && matchWork && matchData;
    });
  }

  selecionar(ata: Ata) {
    if (this.workshopSelecionado === ata) {
      this.workshopSelecionado = null;
    } else {
      this.workshopSelecionado = ata;
      this.updateDetailChart(ata);
    }
  }

  //  Lógica dos Gráficos  
  //Inicializa o gráfico de pizza com a contagem total de participantes por evento.
  private initMainChart() {
    this.pieData = {
      labels: this.atas.map(a => a.workshop.nome),
      datasets: [{
        data: this.atas.map(a => a.colaboradores.length),
        backgroundColor: CHART_COLORS
      }]
    };
  }
// Gera o gráfico de barras comparativo para o workshop selecionado.
  private updateDetailChart(ata: Ata) {
    const nomes = ata.colaboradores.map(c => c.nome);
    const contagens = nomes.map(nome => 
      this.atas.filter(a => a.colaboradores.some(c => c.nome === nome)).length
    );

    this.barData = {
      labels: nomes,
      datasets: [{
        data: contagens,
        label: 'Workshops',
        backgroundColor: generateDynamicColors(nomes.length)
      }]
    };
  }
}