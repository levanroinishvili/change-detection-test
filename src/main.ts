import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { BootstrapOptions, NgZone } from '@angular/core';

const bootstrapStandalone = false
const ngZone: Exclude<BootstrapOptions['ngZone'], NgZone | undefined > = 'zone.js'

if ( bootstrapStandalone ) {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
} else {
  platformBrowser().bootstrapModule(AppModule, {ngZone})
    .catch((err) => console.error(err));
}
