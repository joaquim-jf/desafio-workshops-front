import { ApplicationConfig, provideBrowserGlobalErrorListeners,LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
// Importações para localização brasileira
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

// Registra os dados do português (Brasil)
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
