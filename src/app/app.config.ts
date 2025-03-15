import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter , withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule, ReactiveFormsModule), // ✅ Import Forms
    provideHttpClient(withInterceptorsFromDi()), // ✅ Ensure HTTP Support
    provideRouter([]), // ✅ Ensure Routing is provided
    provideRouter(routes, withComponentInputBinding())
  ]
};
