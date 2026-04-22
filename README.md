# 📊 Sistema de Gestão de Atas - Workshop Manager

Desafio técnico desenvolvido em **[Angular CLI](https://github.com/angular/angular-cli) version 21.2.2
**, focado na gestão, filtragem e análise visual de atas de workshops corporativos.

## 🚀 Tecnologias Utilizadas

- **Angular 21+**Uso de Standalone Components e Signals para alta performance.
- **Angular Material**: Interface moderna baseada em Material Design com efeitos de *Glassmorphism*.
- **Chart.js & ng2-charts**Visualização de dados dinâmicos (Gráficos de Pizza e Barras).
- **TypeScript**: Tipagem estrita para maior segurança do código.
- **Localização (PT-BR)**Sistema totalmente adaptado para o padrão brasileiro (datas e formatos).

## ✨ Diferenciais Técnicos

* **Arquitetura Limpa**Separação de responsabilidades entre lógica de dados (`Services`), configurações visuais (`Configs`) e interface (`Components`).
* **Análise de Engajamento**: O sistema calcula dinamicamente o histórico de participações de cada colaborador em toda a base de dados ao selecionar um workshop.
* **UX Otimizada**: 
    * Filtros simultâneos (Colaborador, Workshop e Data).
    * Gráficos horizontais para melhor leitura de nomes longos.
    * Animações suaves de entrada e feedback visual de lista vazia.

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/joaquim-jf/desafio-workshops-front.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

4.  **Acesse no navegador:**
    `http://localhost:4200`

## 📂 Estrutura de Pastas Principal

- `src/app/pages/ata-list`: Componente principal da aplicação.
- `src/app/services/data-mock`: Serviço que centraliza a lógica de dados (Mock API).
- `src/app/models`: Interfaces TypeScript para garantir a integridade dos dados.

---

