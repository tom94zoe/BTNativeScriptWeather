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
        });
    };
    TemperatureComponent.prototype.initTemperature = function () {
        var _this = this;
        this.selectedCity = this.weatherService.getSelectedCity();
        this.weatherService.getTemperatureForecast(this.selectedCity.id).subscribe(function (data) {
            console.dir(data);
            _this.temperatureList = data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVtcGVyYXR1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELG1GQUF1RjtBQUl2RixzREFBbUQ7QUFPbkQsSUFBYSxvQkFBb0I7SUFJN0IsOEJBQW9CLGNBQXFDLEVBQVUsS0FBVztRQUExRCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRjlFLG9CQUFlLEdBQTJCLEVBQUUsQ0FBQztRQUd6Qzs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtRQUhsRSxpQkFXQztRQU5HLElBQUksT0FBTyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBQSxJQUFJO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUE4QjtZQUV0RyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO0tBQzlDLENBQUM7cUNBS3FDLHdDQUFzQixFQUFpQixXQUFJO0dBSnJFLG9CQUFvQixDQStCaEM7QUEvQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvd2VhdGhlci1zZXJ2aWNlL3dlYXRoZXItc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVyQ2l0eX0gZnJvbSBcIi4uLy4uL21vZGVscy93ZWF0aGVyLWNpdHlcIjtcbmltcG9ydCB7V2VhdGhlckRhdGFFbnRyeX0gZnJvbSBcIi4uLy4uL21vZGVscy93ZWF0ZXItZGF0YVwiO1xuaW1wb3J0IHtUYWJWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlldy90YWItdmlld1wiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVGVtcGVyYXR1cmVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdGVtcGVyYXR1cmUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBUZW1wZXJhdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc2VsZWN0ZWRDaXR5OldlYXRoZXJDaXR5O1xuICAgIHRlbXBlcmF0dXJlTGlzdDpBcnJheTxXZWF0aGVyRGF0YUVudHJ5PiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB3ZWF0aGVyU2VydmljZTpXZWF0aGVyU2VydmljZVByb3ZpZGVyLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIHZhciB0YWJ2aWV3ID0gPFRhYlZpZXc+IHRoaXMuX3BhZ2UuZ2V0Vmlld0J5SWQoXCJ0YWJWaWV3SWRzSWRcIik7XG4gICAgICAgIHRhYnZpZXcub24oJ3NlbGVjdGVkSW5kZXhDaGFuZ2VkJywgYXJncyA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZW1wT25JbmRleENoYW5nZScpXG4gICAgICAgICAgICB0aGlzLmluaXRUZW1wZXJhdHVyZSgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGluaXRUZW1wZXJhdHVyZSgpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2l0eSA9IHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0U2VsZWN0ZWRDaXR5KCk7XG4gICAgICAgIHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0VGVtcGVyYXR1cmVGb3JlY2FzdCh0aGlzLnNlbGVjdGVkQ2l0eS5pZCkuc3Vic2NyaWJlKChkYXRhIDogQXJyYXk8V2VhdGhlckRhdGFFbnRyeT4pID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZUxpc3QgPSBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=