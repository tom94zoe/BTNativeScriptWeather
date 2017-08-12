import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TemperatureComponente } from "./temperature/temperature.component";
import { HomeComponent } from "./home/home.component";
import { PercipitateComponent } from "./percipitate/percipitate.component";
import { TabsRoutingModule } from "./tabs-routing.module";
import { TabsComponent } from "./tabs.component";
import {WeatherServiceProvider} from "../providers/weather-service/weather-service";
import {FilterServiceProvider} from "../providers/filter-service/filter-service";
import {TabView} from "tns-core-modules/ui/tab-view/tab-view";

@NgModule({
    imports: [
        NativeScriptModule,
        TabsRoutingModule

    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        PercipitateComponent,
        TemperatureComponente
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
