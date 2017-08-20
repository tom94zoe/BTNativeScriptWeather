"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var temperature_component_1 = require("./temperature/temperature.component");
var home_component_1 = require("./home/home.component");
var percipitate_component_1 = require("./percipitate/percipitate.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var forms_1 = require("nativescript-angular/forms");
var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            tabs_routing_module_1.TabsRoutingModule,
            forms_1.NativeScriptFormsModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFFOUUsNkVBQTJFO0FBQzNFLHdEQUFzRDtBQUN0RCw2RUFBMkU7QUFDM0UsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUlqRCxvREFBbUU7QUFtQm5FLElBQWEsVUFBVTtJQUF2QjtJQUEwQixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsVUFBVTtJQWpCdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLHVDQUFpQjtZQUNqQiwrQkFBdUI7U0FFMUI7UUFDRCxZQUFZLEVBQUU7WUFDViw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsNENBQW9CO1lBQ3BCLDRDQUFvQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IFRlbXBlcmF0dXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vdGVtcGVyYXR1cmUvdGVtcGVyYXR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGVyY2lwaXRhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9wZXJjaXBpdGF0ZS9wZXJjaXBpdGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYnNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdGFicy1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlUHJvdmlkZXJ9IGZyb20gXCIuLi9wcm92aWRlcnMvd2VhdGhlci1zZXJ2aWNlL3dlYXRoZXItc2VydmljZVwiO1xuaW1wb3J0IHtGaWx0ZXJTZXJ2aWNlUHJvdmlkZXJ9IGZyb20gXCIuLi9wcm92aWRlcnMvZmlsdGVyLXNlcnZpY2UvZmlsdGVyLXNlcnZpY2VcIjtcbmltcG9ydCB7VGFiVmlld30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXcvdGFiLXZpZXdcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBUYWJzUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcblxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRhYnNDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIFBlcmNpcGl0YXRlQ29tcG9uZW50LFxuICAgICAgICBUZW1wZXJhdHVyZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzTW9kdWxlIHsgfVxuIl19