import { Routes } from '@angular/router';
import { AtaListComponent } from './components/ata-list/ata-list';

export const routes: Routes = [
  // Tela inicial Atas
  { path: '', component: AtaListComponent }, 
  { path: 'atas', component: AtaListComponent }
];