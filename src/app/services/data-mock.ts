import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ata } from '../models/data.models';
import { Colaborador } from '../models/data.models';

/**
 * MOCK: Simula uma API Backend.
 */

@Injectable({ providedIn: 'root' })
export class DataMockService {

  private colaboradores: Colaborador[] = [
  { id: 1, nome: 'Ana Beatriz Silva' },
  { id: 2, nome: 'Carlos Eduardo Souza' },
  { id: 3, nome: 'Mariana Costa' },
  { id: 4, nome: 'Ricardo Oliveira' },
  { id: 5, nome: 'Juliana Ferreira' },
  { id: 6, nome: 'Fernando Santos' },
  { id: 7, nome: 'Patrícia Lima' },
  { id: 8, nome: 'Lucas Mendes' },
  { id: 9, nome: 'Beatriz Rocha' },
  { id: 10, nome: 'Gustavo Henrique' },
  { id: 11, nome: 'Letícia Xavier' },
  { id: 12, nome: 'JF_KING_083' },
  { id: 13, nome: 'Rafael Almeida' },
  { id: 14, nome: 'Camila Antunes' },
  { id: 15, nome: 'Igor Guimarães' },
  { id: 16, nome: 'Sofia Martins' },
  { id: 17, nome: 'Thiago Barbosa' },
  { id: 18, nome: 'Vanessa Duarte' },
  { id: 19, nome: 'Bruno Carvalho' },
  { id: 20, nome: 'Larissa Nunes' }
];

  private atas: Ata[] = [
  {
    id: 1,
    workshop: { id: 101, nome: 'Angular 17 Standalone', dataRealizacao: '2026-03-20', descricao: 'Migração de projetos legados para a nova arquitetura sem módulos.' },
    colaboradores: [this.colaboradores[0], this.colaboradores[11], this.colaboradores[4], this.colaboradores[19]]
  },
  {
    id: 2,
    workshop: { id: 102, nome: 'Clean Code na Prática', dataRealizacao: '2026-03-25', descricao: 'Técnicas de refatoração para escrever códigos legíveis e sustentáveis.' },
    colaboradores: [this.colaboradores[1], this.colaboradores[2], this.colaboradores[3], this.colaboradores[11]]
  },
  {
    id: 3,
    workshop: { id: 103, nome: 'SQL Server Performance', dataRealizacao: '2026-04-05', descricao: 'Otimização de queries, uso de índices e análise de planos de execução.' },
    colaboradores: [this.colaboradores[5], this.colaboradores[6], this.colaboradores[7], this.colaboradores[0]]
  },
  {
    id: 4,
    workshop: { id: 104, nome: 'UX Design para Devs', dataRealizacao: '2026-04-12', descricao: 'Princípios fundamentais de interface e experiência para programadores.' },
    colaboradores: [this.colaboradores[8], this.colaboradores[9], this.colaboradores[10], this.colaboradores[15]]
  },
  {
    id: 5,
    workshop: { id: 105, nome: 'Arquitetura de Microserviços', dataRealizacao: '2026-05-02', descricao: 'Como decompor monolitos e gerenciar comunicação entre serviços.' },
    colaboradores: [this.colaboradores[12], this.colaboradores[13], this.colaboradores[14], this.colaboradores[1]]
  },
  {
    id: 6,
    workshop: { id: 106, nome: 'Segurança em APIs .NET', dataRealizacao: '2026-05-15', descricao: 'Implementação de OAuth2, JWT e proteção contra ataques OWASP.' },
    colaboradores: [this.colaboradores[11], this.colaboradores[16], this.colaboradores[17], this.colaboradores[18]]
  },
  {
    id: 7,
    workshop: { id: 107, nome: 'Metodologias Ágeis: Além do Scrum', dataRealizacao: '2026-06-01', descricao: 'Explorando Kanban, Lean e OKRs para aumentar a produtividade.' },
    colaboradores: [this.colaboradores[2], this.colaboradores[5], this.colaboradores[8], this.colaboradores[14]]
  },
  {
    id: 8,
    workshop: { id: 108, nome: 'Docker e Kubernetes 101', dataRealizacao: '2026-06-10', descricao: 'Containerização de aplicações e orquestração em ambiente de produção.' },
    colaboradores: [this.colaboradores[3], this.colaboradores[6], this.colaboradores[9], this.colaboradores[12]]
  },
  {
    id: 9,
    workshop: { id: 109, nome: 'Inteligência Artificial Generativa', dataRealizacao: '2026-06-22', descricao: 'Workshop sobre como integrar LLMs e APIs da OpenAI em seus sistemas.' },
    colaboradores: [this.colaboradores[4], this.colaboradores[7], this.colaboradores[10], this.colaboradores[13], this.colaboradores[11]]
  },
  {
    id: 10,
    workshop: { id: 110, nome: 'Testes Automatizados com Cypress', dataRealizacao: '2026-07-05', descricao: 'Criação de testes E2E (ponta a ponta) para garantir a qualidade do Front.' },
    colaboradores: [this.colaboradores[15], this.colaboradores[16], this.colaboradores[17], this.colaboradores[19],this.colaboradores[4], this.colaboradores[7], this.colaboradores[10], this.colaboradores[13], this.colaboradores[11]]
  }
];
  
  getAtas(): Observable<Ata[]> {
    return of(this.atas);
  }
}