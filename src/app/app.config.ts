import { ApplicationConfig, importProvidersFrom, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AppCommonModule } from './app.common.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';

export const API_URL = new InjectionToken<string>('');

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppCommonModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptorInterceptor])),
    { provide: API_URL, useValue: environment.apiUrl }
  ],
};
