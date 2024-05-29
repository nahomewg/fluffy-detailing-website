import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
          scrollPositionRestoration: 'top',
          anchorScrolling: 'enabled',
      })
    ),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
  ]
};
