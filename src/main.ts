import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { BootstrapFn, createModeSelector } from './main.pre-bootsrap';

const bootstrap: BootstrapFn = (bootstrapMode, ngZone) => {
  if ( bootstrapMode === 'standalone' ) {
    bootstrapApplication(AppComponent, appConfig)
      .then(applicationRef => console.log(`%cSuccessfully bootstrapped standalone component. ApplicationRef:`, 'color:lightgreen', applicationRef))
      .catch((err) => console.error(`Failed to bootstrap standalone component`, err));
  } else {
    platformBrowser().bootstrapModule(AppModule, {ngZone})
      .then(ngModuleRef => console.log(`%cSuccessfully bootstrapped NgModule with "${ngZone}" zone. Module ref:`, 'color:lightgreen', ngModuleRef))
      .catch((err) => console.error(`Failed to bootstrap NgModule`, err));
  }
}

createModeSelector(bootstrap)
