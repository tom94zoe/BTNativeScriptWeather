import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {FilterServiceProvider} from "./providers/filter-service/filter-service";
import {WeatherServiceProvider} from "./providers/weather-service/weather-service";
import { NativeScriptHttpModule } from "nativescript-angular";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        WeatherServiceProvider ,
        FilterServiceProvider
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
