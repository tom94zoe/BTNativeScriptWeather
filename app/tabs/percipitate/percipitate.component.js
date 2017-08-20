"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../../providers/weather-service/weather-service");
var filter_service_1 = require("../../providers/filter-service/filter-service");
var page_1 = require("tns-core-modules/ui/page/page");
var percipitate_filter_1 = require("../../models/percipitate-filter");
var PercipitateComponent = (function () {
    function PercipitateComponent(weatherService, filterService, _page) {
        this.weatherService = weatherService;
        this.filterService = filterService;
        this._page = _page;
        this.selectedFilter = new percipitate_filter_1.PercipitateFilter;
        this.settingsAreActive = false;
        this.percipitateList = [];
        this.showActionBar = false;
        this.customName = "aa";
        this.Day = true;
        this.Night = true;
        /* ***********************************************************
         * Use the constructor to inject services.
         *************************************************************/
        this.startingTime = new Date();
    }
    PercipitateComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
         * Use the "ngOnInit" handler to initialize data for the view.
         *************************************************************/
        var tabview = this._page.getViewById("tabViewIdsId");
        tabview.on('selectedIndexChanged', function (args) {
            console.log('tempOnIndexChange');
            _this.initPercipitate();
            console.dir(args);
            if (args.newIndex === 2) {
                _this.showActionBar = true;
            }
        });
        this.initPercipitate();
    };
    PercipitateComponent.prototype.openSearchFilter = function () {
        this.settingsAreActive = true;
    };
    PercipitateComponent.prototype.closeSearchFilter = function (setSettings) {
        if (setSettings) {
            console.dir(this.startingTime);
            this.selectedFilter.enableDay = this.Day;
            this.selectedFilter.enableNight = this.Night;
            this.selectedFilter.fromDate = this.startingTime;
            this.filterService.setPercipitateFilter(this.selectedFilter);
            //todo: activate Settings
        }
        this.settingsAreActive = false;
        this.initPercipitate();
    };
    PercipitateComponent.prototype.initPercipitate = function () {
        var _this = this;
        this.selectedCity = this.weatherService.getSelectedCity();
        var currentFilter = this.filterService.getPercipitateFilter();
        this.weatherService.getPercipitateForecast(this.selectedCity.id).subscribe(function (data) {
            if (currentFilter) {
                data = data.filter(function (entry) {
                    var isValid = true;
                    if (currentFilter.enableDay && currentFilter.enableNight) {
                    }
                    else if (currentFilter.enableDay) {
                        isValid = isValid && _this.isDay(entry.date);
                    }
                    else if (currentFilter.enableNight) {
                        isValid = isValid && !_this.isDay(entry.date);
                    }
                    if (currentFilter.fromDate) {
                        var toMinutes = _this.selectedFilter.fromDate.getHours() * 60 + _this.selectedFilter.fromDate.getMinutes();
                        var entryMinutes = entry.date.getHours() * 60 + entry.date.getMinutes();
                        isValid = isValid && toMinutes < entryMinutes;
                    }
                    return isValid;
                });
            }
            _this.percipitateList = data;
        });
    };
    PercipitateComponent.prototype.isDay = function (cDate) {
        return cDate.getHours() >= 8 && cDate.getHours() <= 20;
    };
    return PercipitateComponent;
}());
PercipitateComponent = __decorate([
    core_1.Component({
        selector: "Percipitate",
        moduleId: module.id,
        templateUrl: "./percipitate.component.html"
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherServiceProvider, filter_service_1.FilterServiceProvider, page_1.Page])
], PercipitateComponent);
exports.PercipitateComponent = PercipitateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2lwaXRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyY2lwaXRhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELG1GQUF1RjtBQUN2RixnRkFBb0Y7QUFHcEYsc0RBQW1EO0FBRW5ELHNFQUFrRTtBQU9sRSxJQUFhLG9CQUFvQjtJQWE3Qiw4QkFBb0IsY0FBcUMsRUFBVSxhQUFtQyxFQUFVLEtBQVU7UUFBdEcsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBSztRQVoxSCxtQkFBYyxHQUFxQixJQUFJLHNDQUFpQixDQUFDO1FBQ3pELHNCQUFpQixHQUFXLEtBQUssQ0FBQztRQUVsQyxvQkFBZSxHQUEyQixFQUFFLENBQUM7UUFDN0Msa0JBQWEsR0FBVyxLQUFLLENBQUM7UUFDOUIsZUFBVSxHQUFVLElBQUksQ0FBQztRQUV6QixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBVyxJQUFJLENBQUM7UUFLakI7O3VFQUUrRDtRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHOzt1RUFFK0Q7UUFDL0QsSUFBSSxPQUFPLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFBLElBQUk7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFR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QUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFaEMsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRUQsb0NBQUssR0FBTCxVQUFNLEtBQVU7UUFDWixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUExRkQsSUEwRkM7QUExRlksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtLQUM5QyxDQUFDO3FDQWNxQyx3Q0FBc0IsRUFBd0Isc0NBQXFCLEVBQWdCLFdBQUk7R0Fiakgsb0JBQW9CLENBMEZoQztBQTFGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtXZWF0aGVyU2VydmljZVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL3dlYXRoZXItc2VydmljZS93ZWF0aGVyLXNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyU2VydmljZVByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJzL2ZpbHRlci1zZXJ2aWNlL2ZpbHRlci1zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYXRoZXJDaXR5fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3dlYXRoZXItY2l0eVwiO1xuaW1wb3J0IHtXZWF0aGVyRGF0YUVudHJ5fSBmcm9tIFwiLi4vLi4vbW9kZWxzL3dlYXRlci1kYXRhXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHtUYWJWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlldy90YWItdmlld1wiO1xuaW1wb3J0IHtQZXJjaXBpdGF0ZUZpbHRlcn0gZnJvbSBcIi4uLy4uL21vZGVscy9wZXJjaXBpdGF0ZS1maWx0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUGVyY2lwaXRhdGVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGVyY2lwaXRhdGUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBQZXJjaXBpdGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc2VsZWN0ZWRGaWx0ZXI6UGVyY2lwaXRhdGVGaWx0ZXIgPSBuZXcgUGVyY2lwaXRhdGVGaWx0ZXI7XG4gICAgc2V0dGluZ3NBcmVBY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHNlbGVjdGVkQ2l0eTpXZWF0aGVyQ2l0eTtcbiAgICBwZXJjaXBpdGF0ZUxpc3Q6QXJyYXk8V2VhdGhlckRhdGFFbnRyeT4gPSBbXTtcbiAgICBzaG93QWN0aW9uQmFyOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdXN0b21OYW1lOnN0cmluZyA9IFwiYWFcIjtcbiAgICBzdGFydGluZ1RpbWU6RGF0ZTtcbiAgICBEYXk6Ym9vbGVhbiA9IHRydWU7IFxuICAgIE5pZ2h0OmJvb2xlYW4gPSB0cnVlO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VhdGhlclNlcnZpY2U6V2VhdGhlclNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBmaWx0ZXJTZXJ2aWNlOkZpbHRlclNlcnZpY2VQcm92aWRlciwgcHJpdmF0ZSBfcGFnZTpQYWdlKSB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgdGhpcy5zdGFydGluZ1RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6dm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cbiAgICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICAgIHZhciB0YWJ2aWV3ID0gPFRhYlZpZXc+IHRoaXMuX3BhZ2UuZ2V0Vmlld0J5SWQoXCJ0YWJWaWV3SWRzSWRcIik7XG4gICAgICAgIHRhYnZpZXcub24oJ3NlbGVjdGVkSW5kZXhDaGFuZ2VkJywgYXJncyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVtcE9uSW5kZXhDaGFuZ2UnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBlcmNpcGl0YXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihhcmdzKTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MubmV3SW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dBY3Rpb25CYXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pbml0UGVyY2lwaXRhdGUoKTtcbiAgICB9XG5cbiAgICBvcGVuU2VhcmNoRmlsdGVyKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzQXJlQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVNlYXJjaEZpbHRlcihzZXRTZXR0aW5nczpib29sZWFuKSB7XG4gICAgICAgIGlmIChzZXRTZXR0aW5ncykge1xuICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5zdGFydGluZ1RpbWUpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbHRlci5lbmFibGVEYXkgPSB0aGlzLkRheTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGaWx0ZXIuZW5hYmxlTmlnaHQgPSB0aGlzLk5pZ2h0O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZpbHRlci5mcm9tRGF0ZSA9IHRoaXMuc3RhcnRpbmdUaW1lO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJTZXJ2aWNlLnNldFBlcmNpcGl0YXRlRmlsdGVyKHRoaXMuc2VsZWN0ZWRGaWx0ZXIpO1xuICAgICAgICAgICAgLy90b2RvOiBhY3RpdmF0ZSBTZXR0aW5nc1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dGluZ3NBcmVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0UGVyY2lwaXRhdGUoKTtcbiAgICB9XG5cbiAgICBpbml0UGVyY2lwaXRhdGUoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0gdGhpcy53ZWF0aGVyU2VydmljZS5nZXRTZWxlY3RlZENpdHkoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSB0aGlzLmZpbHRlclNlcnZpY2UuZ2V0UGVyY2lwaXRhdGVGaWx0ZXIoKTtcblxuICAgICAgICB0aGlzLndlYXRoZXJTZXJ2aWNlLmdldFBlcmNpcGl0YXRlRm9yZWNhc3QodGhpcy5zZWxlY3RlZENpdHkuaWQpLnN1YnNjcmliZSgoZGF0YTpBcnJheTxXZWF0aGVyRGF0YUVudHJ5PikgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGVudHJ5OldlYXRoZXJEYXRhRW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzVmFsaWQ6Ym9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudEZpbHRlci5lbmFibGVEYXkgJiYgY3VycmVudEZpbHRlci5lbmFibGVOaWdodCl7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChjdXJyZW50RmlsdGVyLmVuYWJsZURheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdGhpcy5pc0RheShlbnRyeS5kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RmlsdGVyLmVuYWJsZU5pZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiAhdGhpcy5pc0RheShlbnRyeS5kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RmlsdGVyLmZyb21EYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9NaW51dGVzID0gdGhpcy5zZWxlY3RlZEZpbHRlci5mcm9tRGF0ZS5nZXRIb3VycygpICogNjAgKyB0aGlzLnNlbGVjdGVkRmlsdGVyLmZyb21EYXRlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRyeU1pbnV0ZXMgPSBlbnRyeS5kYXRlLmdldEhvdXJzKCkgKiA2MCArIGVudHJ5LmRhdGUuZ2V0TWludXRlcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB0b01pbnV0ZXMgPCBlbnRyeU1pbnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGVyY2lwaXRhdGVMaXN0ID0gZGF0YTtcblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgaXNEYXkoY0RhdGU6RGF0ZSkge1xuICAgICAgICByZXR1cm4gY0RhdGUuZ2V0SG91cnMoKSA+PSA4ICYmIGNEYXRlLmdldEhvdXJzKCkgPD0gMjA7XG4gICAgfVxufVxuIl19