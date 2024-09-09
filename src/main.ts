import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Importa le rotte correttamente

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],  // Usa le rotte qui
}).catch((err) => console.error(err));
