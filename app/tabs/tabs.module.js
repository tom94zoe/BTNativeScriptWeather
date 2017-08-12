"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var temperature_component_1 = require("./temperature/temperature.component");
var home_component_1 = require("./home/home.component");
var percipitate_component_1 = require("./percipitate/percipitate.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            tabs_routing_module_1.TabsRoutingModule
        ],
        declarations: [
            tabs_component_1.TabsComponent,
            home_component_1.HomeComponent,
            percipitate_component_1.PercipitateComponent,
            temperature_component_1.TemperatureComponente
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], TabsModule);
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsNkVBQTRFO0FBQzVFLHdEQUFzRDtBQUN0RCw2RUFBMkU7QUFDM0UsNkRBQTBEO0FBQzFELG1EQUFpRDtBQXFCakQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBaEJ0QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsdUNBQWlCO1NBRXBCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLDRDQUFvQjtZQUNwQiw2Q0FBcUI7U0FDeEI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUNvbXBvbmVudGUgfSBmcm9tIFwiLi90ZW1wZXJhdHVyZS90ZW1wZXJhdHVyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQZXJjaXBpdGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3BlcmNpcGl0YXRlL3BlcmNpcGl0YXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGFic1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90YWJzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2VQcm92aWRlcn0gZnJvbSBcIi4uL3Byb3ZpZGVycy93ZWF0aGVyLXNlcnZpY2Uvd2VhdGhlci1zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbHRlclNlcnZpY2VQcm92aWRlcn0gZnJvbSBcIi4uL3Byb3ZpZGVycy9maWx0ZXItc2VydmljZS9maWx0ZXItc2VydmljZVwiO1xuaW1wb3J0IHtUYWJWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlldy90YWItdmlld1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBUYWJzUm91dGluZ01vZHVsZVxuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGFic0NvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgUGVyY2lwaXRhdGVDb21wb25lbnQsXG4gICAgICAgIFRlbXBlcmF0dXJlQ29tcG9uZW50ZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxuIl19