"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var weater_data_1 = require("../../models/weater-data");
/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var WeatherServiceProvider = (function () {
    function WeatherServiceProvider(http) {
        this.http = http;
        this.appID = '6a4d617c69c294370112b0f7174124b2';
        console.log('Hello WeatherServiceProvider Provider');
    }
    WeatherServiceProvider.prototype.getCities = function () {
        var cityListJson = require('./cityListAustria.json');
        this.preSelectedCity(cityListJson);
        return cityListJson;
    };
    WeatherServiceProvider.prototype.preSelectedCity = function (possibleCities) {
        var matchingCities = possibleCities.filter(function (city) { return city.name == 'Wien'; });
        if (matchingCities.length > 0) {
            this.selectedCity = matchingCities[0];
            console.log('preselected city');
        }
    };
    WeatherServiceProvider.prototype.setSelectedCity = function (city) {
        this.selectedCity = city;
    };
    WeatherServiceProvider.prototype.getSelectedCity = function () {
        return this.selectedCity;
    };
    WeatherServiceProvider.prototype.getPercipitateForecast = function (cityId) {
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + this.appID).map(function (res) { return res.json().list
            .map(function (entry) {
            console.log(entry);
            entry.date = new Date(entry.dt * 1000);
            if (!entry.rain) {
                entry.rain = new weater_data_1.RainWeatherData();
            }
            return entry;
        }); });
    };
    WeatherServiceProvider.prototype.getTemperatureForecast = function (cityId) {
        var _this = this;
        return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + this.appID).map(function (res) { return res.json().list
            .map(function (entry) {
            entry.main.temp_celsius = entry.main.temp - 273.15;
            entry.date = new Date(entry.dt * 1000);
            _this.setIconPath(entry);
            return entry;
        }); });
    };
    WeatherServiceProvider.prototype.setIconPath = function (entry) {
        var path = '';
        switch (entry.weather[0].main) {
            case 'Clear':
                path = '~/weather-sunny.png';
                break;
            case 'Rain':
                path = '~/weather-rainy.png';
                break;
            case 'Clouds':
                path = '~/weather-cloudy.png';
                break;
        }
        entry.weather[0].iconRef = path;
    };
    return WeatherServiceProvider;
}());
WeatherServiceProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherServiceProvider);
exports.WeatherServiceProvider = WeatherServiceProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFHL0Isd0RBQTJFO0FBRzNFOzs7OztFQUtFO0FBSUYsSUFBYSxzQkFBc0I7SUFLakMsZ0NBQW1CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSjVCLFVBQUssR0FBUyxrQ0FBa0MsQ0FBQztRQUsvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLGdEQUFlLEdBQXZCLFVBQXdCLGNBQWlDO1FBQ3ZELElBQUksY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixJQUFnQjtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1REFBc0IsR0FBdEIsVUFBdUIsTUFBTTtRQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0RBQXNELEdBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUk7YUFDcEksR0FBRyxDQUFDLFVBQUMsS0FBc0I7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDZCxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksNkJBQWUsRUFBRSxDQUFDO1lBQ3JDLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBUm9ILENBUXBILENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCx1REFBc0IsR0FBdEIsVUFBdUIsTUFBTTtRQUE3QixpQkFTQztRQVBDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsR0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSTthQUNwSSxHQUFHLENBQUMsVUFBQyxLQUFzQjtZQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7WUFDbkQsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxFQU5vSCxDQU1wSCxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLEtBQXNCO1FBQ2hDLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxPQUFPO2dCQUFFLElBQUksR0FBRyxxQkFBcUIsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDbEQsS0FBSyxNQUFNO2dCQUFFLElBQUksR0FBRyxxQkFBcUIsQ0FBQztnQkFBQyxLQUFLLENBQUM7WUFDakQsS0FBSyxRQUFRO2dCQUFFLElBQUksR0FBRyxzQkFBc0IsQ0FBQztnQkFBQyxLQUFLLENBQUM7UUFDdEQsQ0FBQztRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUgsNkJBQUM7QUFBRCxDQUFDLEFBakVELElBaUVDO0FBakVZLHNCQUFzQjtJQURsQyxpQkFBVSxFQUFFO3FDQU1hLFdBQUk7R0FMakIsc0JBQXNCLENBaUVsQztBQWpFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xuaW1wb3J0IHsgV2VhdGhlckNpdHl9IGZyb20gJy4uLy4uL21vZGVscy93ZWF0aGVyLWNpdHknXG5pbXBvcnQge1dlYXRoZXJEYXRhRW50cnksIFJhaW5XZWF0aGVyRGF0YX0gZnJvbSAnLi4vLi4vbW9kZWxzL3dlYXRlci1kYXRhJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuXG4vKlxuICBHZW5lcmF0ZWQgY2xhc3MgZm9yIHRoZSBXZWF0aGVyU2VydmljZVByb3ZpZGVyIHByb3ZpZGVyLlxuXG4gIFNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvZGVwZW5kZW5jeS1pbmplY3Rpb24uaHRtbFxuICBmb3IgbW9yZSBpbmZvIG9uIHByb3ZpZGVycyBhbmQgQW5ndWxhciBESS5cbiovXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlUHJvdmlkZXIge1xuICBhcHBJRDpzdHJpbmc9ICc2YTRkNjE3YzY5YzI5NDM3MDExMmIwZjcxNzQxMjRiMic7XG4gIHNlbGVjdGVkQ2l0eTogV2VhdGhlckNpdHk7XG5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDpIdHRwKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIFdlYXRoZXJTZXJ2aWNlUHJvdmlkZXIgUHJvdmlkZXInKTtcbiAgfVxuXG4gIGdldENpdGllcygpOkFycmF5PFdlYXRoZXJDaXR5PntcbiAgICB2YXIgY2l0eUxpc3RKc29uID0gcmVxdWlyZSgnLi9jaXR5TGlzdEF1c3RyaWEuanNvbicpO1xuICAgIHRoaXMucHJlU2VsZWN0ZWRDaXR5KGNpdHlMaXN0SnNvbik7XG4gICAgcmV0dXJuIGNpdHlMaXN0SnNvbjtcbiAgfVxuXG4gIHByaXZhdGUgcHJlU2VsZWN0ZWRDaXR5KHBvc3NpYmxlQ2l0aWVzOkFycmF5PFdlYXRoZXJDaXR5Pil7XG4gICAgdmFyIG1hdGNoaW5nQ2l0aWVzID0gcG9zc2libGVDaXRpZXMuZmlsdGVyKChjaXR5OldlYXRoZXJDaXR5KSA9PiBjaXR5Lm5hbWUgPT0gJ1dpZW4nKTtcbiAgICBpZihtYXRjaGluZ0NpdGllcy5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0gbWF0Y2hpbmdDaXRpZXNbMF07XG4gICAgICBjb25zb2xlLmxvZygncHJlc2VsZWN0ZWQgY2l0eScpXG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRDaXR5KGNpdHk6V2VhdGhlckNpdHkpOiB2b2lke1xuICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0gY2l0eTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkQ2l0eSgpOiBXZWF0aGVyQ2l0eXtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZENpdHk7XG4gIH1cblxuICBnZXRQZXJjaXBpdGF0ZUZvcmVjYXN0KGNpdHlJZCk6T2JzZXJ2YWJsZTxBcnJheTxXZWF0aGVyRGF0YUVudHJ5Pj57XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2lkPScrY2l0eUlkICsgJyZhcHBpZD0nICsgdGhpcy5hcHBJRCkubWFwKHJlcz0+ICByZXMuanNvbigpLmxpc3RcbiAgICAgIC5tYXAoKGVudHJ5OldlYXRoZXJEYXRhRW50cnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xuICAgICAgICBlbnRyeS5kYXRlID0gbmV3IERhdGUoZW50cnkuZHQgKiAxMDAwKTtcbiAgICAgICAgaWYoIWVudHJ5LnJhaW4pe1xuICAgICAgICAgIGVudHJ5LnJhaW4gPSBuZXcgUmFpbldlYXRoZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgfSkpO1xuICB9XG5cbiAgZ2V0VGVtcGVyYXR1cmVGb3JlY2FzdChjaXR5SWQpOiBPYnNlcnZhYmxlPEFycmF5PFdlYXRoZXJEYXRhRW50cnk+PntcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/aWQ9JytjaXR5SWQgKyAnJmFwcGlkPScgKyB0aGlzLmFwcElEKS5tYXAocmVzPT4gIHJlcy5qc29uKCkubGlzdFxuICAgICAgLm1hcCgoZW50cnk6V2VhdGhlckRhdGFFbnRyeSkgPT4ge1xuICAgICAgICBlbnRyeS5tYWluLnRlbXBfY2Vsc2l1cyA9IGVudHJ5Lm1haW4udGVtcCAtIDI3My4xNTtcbiAgICAgICAgZW50cnkuZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmR0ICogMTAwMCk7XG4gICAgICAgIHRoaXMuc2V0SWNvblBhdGgoZW50cnkpO1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICB9KSk7XG4gIH1cblxuICBzZXRJY29uUGF0aChlbnRyeTpXZWF0aGVyRGF0YUVudHJ5KXtcbiAgICB2YXIgcGF0aDpzdHJpbmcgPSAnJztcbiAgICBzd2l0Y2ggKGVudHJ5LndlYXRoZXJbMF0ubWFpbikge1xuICAgICAgY2FzZSAnQ2xlYXInOiBwYXRoID0gJ34vd2VhdGhlci1zdW5ueS5wbmcnOyBicmVhazsgXG4gICAgICBjYXNlICdSYWluJzogcGF0aCA9ICd+L3dlYXRoZXItcmFpbnkucG5nJzsgYnJlYWs7XG4gICAgICBjYXNlICdDbG91ZHMnOiBwYXRoID0gJ34vd2VhdGhlci1jbG91ZHkucG5nJzsgYnJlYWs7XG4gICAgfVxuICAgIGVudHJ5LndlYXRoZXJbMF0uaWNvblJlZiA9IHBhdGg7XG4gIH1cblxufVxuIl19