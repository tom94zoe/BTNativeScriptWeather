"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../../providers/weather-service/weather-service");
var page_1 = require("tns-core-modules/ui/page/page");
var TemperatureComponent = (function () {
    function TemperatureComponent(weatherService, _page) {
        this.weatherService = weatherService;
        this._page = _page;
        this.temperatureList = [];
        this.showActionBar = false;
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }
    TemperatureComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        var _this = this;
        var tabview = this._page.getViewById("tabViewIdsId");
        tabview.on('selectedIndexChanged', function (args) {
            console.log('tempOnIndexChange');
            _this.initTemperature();
            if (args.newIndex === 1) {
                _this.showActionBar = true;
            }
        });
        this.initTemperature();
    };
    TemperatureComponent.prototype.initTemperature = function () {
        var _this = this;
        this.selectedCity = this.weatherService.getSelectedCity();
        this.weatherService.getTemperatureForecast(this.selectedCity.id).subscribe(function (data) {
            _this.temperatureList = data;
            console.log('set templist');
        });
    };
    return TemperatureComponent;
}());
TemperatureComponent = __decorate([
    core_1.Component({
        selector: "Temperature",
        moduleId: module.id,
        templateUrl: "./temperature.component.html"
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherServiceProvider, page_1.Page])
], TemperatureComponent);
exports.TemperatureComponent = TemperatureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVtcGVyYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1GQUF1RjtBQUl2RixzREFBbUQ7QUFPbkQsSUFBYSxvQkFBb0I7SUFLN0IsOEJBQW9CLGNBQXFDLEVBQVUsS0FBVztRQUExRCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSDlFLG9CQUFlLEdBQTJCLEVBQUUsQ0FBQztRQUM3QyxrQkFBYSxHQUFXLEtBQUssQ0FBQztRQUcxQjs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtRQUhsRSxpQkFnQkM7UUFYRyxJQUFJLE9BQU8sR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFVBQUMsSUFBa0M7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzlCLENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUUzQixDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTFELElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUE4QjtZQUd0RyxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBTXFDLHdDQUFzQixFQUFpQixXQUFJO0dBTHJFLG9CQUFvQixDQXVDaEM7QUF2Q1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvd2VhdGhlci1zZXJ2aWNlL3dlYXRoZXItc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVyQ2l0eX0gZnJvbSBcIi4uLy4uL21vZGVscy93ZWF0aGVyLWNpdHlcIjtcbmltcG9ydCB7V2VhdGhlckRhdGFFbnRyeSwgTWFpbldlYXRoZXJEYXRhLCBXZWF0aGVyRGVzY3JpcHRpb259IGZyb20gXCIuLi8uLi9tb2RlbHMvd2VhdGVyLWRhdGFcIjtcbmltcG9ydCB7VGFiVmlldywgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3L3RhYi12aWV3XCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJUZW1wZXJhdHVyZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90ZW1wZXJhdHVyZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFRlbXBlcmF0dXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzZWxlY3RlZENpdHk6V2VhdGhlckNpdHk7XG4gICAgdGVtcGVyYXR1cmVMaXN0OkFycmF5PFdlYXRoZXJEYXRhRW50cnk+ID0gW107XG4gICAgc2hvd0FjdGlvbkJhcjpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYXRoZXJTZXJ2aWNlOldlYXRoZXJTZXJ2aWNlUHJvdmlkZXIsIHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgdmFyIHRhYnZpZXcgPSA8VGFiVmlldz4gdGhpcy5fcGFnZS5nZXRWaWV3QnlJZChcInRhYlZpZXdJZHNJZFwiKTtcbiAgICAgICAgdGFidmlldy5vbignc2VsZWN0ZWRJbmRleENoYW5nZWQnLCAoYXJnczpTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVtcE9uSW5kZXhDaGFuZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFRlbXBlcmF0dXJlKCk7XG4gICAgICAgICAgICBpZihhcmdzLm5ld0luZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWN0aW9uQmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbml0VGVtcGVyYXR1cmUoKTtcblxuICAgIH1cblxuICAgIGluaXRUZW1wZXJhdHVyZSgpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2l0eSA9IHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0U2VsZWN0ZWRDaXR5KCk7XG5cbiAgICAgICAgdGhpcy53ZWF0aGVyU2VydmljZS5nZXRUZW1wZXJhdHVyZUZvcmVjYXN0KHRoaXMuc2VsZWN0ZWRDaXR5LmlkKS5zdWJzY3JpYmUoKGRhdGEgOiBBcnJheTxXZWF0aGVyRGF0YUVudHJ5PikgPT5cbiAgICAgICAge1xuXG4gICAgICAgICAgICB0aGlzLnRlbXBlcmF0dXJlTGlzdCA9IGRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IHRlbXBsaXN0JylcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19