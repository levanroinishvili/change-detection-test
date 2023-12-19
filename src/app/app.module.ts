import { ChangeDetectionStrategy, Component, NgModule, importProvidersFrom } from "@angular/core";
import { AppRootComponent } from "./app-root/app-root.component";
import { NoPreloading, RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@Component({
    selector: 'cd-root',
    template: '<cd-app-root />',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppNgModuleComponent {}

@NgModule({
    declarations: [AppNgModuleComponent],
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: NoPreloading,
            bindToComponentInputs: true,
            onSameUrlNavigation: 'reload',
        }),
        BrowserModule,
        AppRootComponent,
    ],
    providers: [
        importProvidersFrom(HttpClientModule),
    ],
    bootstrap: [AppNgModuleComponent]
})
export class AppModule {}
