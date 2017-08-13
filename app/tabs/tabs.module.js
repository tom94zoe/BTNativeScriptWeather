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
            temperature_component_1.TemperatureComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], TabsModule);
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsNkVBQTJFO0FBQzNFLHdEQUFzRDtBQUN0RCw2RUFBMkU7QUFDM0UsNkRBQTBEO0FBQzFELG1EQUFpRDtBQXFCakQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBM0IsSUFBMkI7QUFBZCxVQUFVO0lBaEJ0QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsdUNBQWlCO1NBRXBCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsOEJBQWE7WUFDYiw4QkFBYTtZQUNiLDRDQUFvQjtZQUNwQiw0Q0FBb0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUNvbXBvbmVudCB9IGZyb20gXCIuL3RlbXBlcmF0dXJlL3RlbXBlcmF0dXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBlcmNpcGl0YXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vcGVyY2lwaXRhdGUvcGVyY2lwaXRhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUYWJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RhYnMtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXZWF0aGVyU2VydmljZVByb3ZpZGVyfSBmcm9tIFwiLi4vcHJvdmlkZXJzL3dlYXRoZXItc2VydmljZS93ZWF0aGVyLXNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyU2VydmljZVByb3ZpZGVyfSBmcm9tIFwiLi4vcHJvdmlkZXJzL2ZpbHRlci1zZXJ2aWNlL2ZpbHRlci1zZXJ2aWNlXCI7XG5pbXBvcnQge1RhYlZpZXd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3L3RhYi12aWV3XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFRhYnNSb3V0aW5nTW9kdWxlXG5cbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUYWJzQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBQZXJjaXBpdGF0ZUNvbXBvbmVudCxcbiAgICAgICAgVGVtcGVyYXR1cmVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cbiJdfQ==