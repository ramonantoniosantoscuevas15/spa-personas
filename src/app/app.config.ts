import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import{provideMomentDateAdapter} from '@angular/material-moment-adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMomentDateAdapter({
      parse:{
        dateInput:['DD-MM-YYYY']
      },
      display:{
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MM-YYYY',
        dateA11yLabel:'LL',
        monthYearA11yLabel:'MMMM-YYYY'
      }

    })
  ]

};
