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
        }
    };
    WeatherServiceProvider.prototype.setSelectedCity = function (city) {
        this.selectedCity = city;
    };
    WeatherServiceProvider.prototype.getSelectedCity = function () {
        return this.selectedCity;
    };
    WeatherServiceProvider.prototype.getPercipitateForecast = function (cityId) {
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + this.appID).map(function (res) { return res.json().list
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
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + this.appID).map(function (res) { return res.json().list
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
                path = './assets/icon/weather-sunny.svg';
                break;
            case 'Rain':
                path = './assets/icon/weather-rainy.svg';
                break;
            case 'Clouds':
                path = './assets/icon/weather-cloudy.svg';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyxpQ0FBK0I7QUFHL0Isd0RBQTJFO0FBRzNFOzs7OztFQUtFO0FBSUYsSUFBYSxzQkFBc0I7SUFLakMsZ0NBQW1CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSjVCLFVBQUssR0FBUyxrQ0FBa0MsQ0FBQztRQUsvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLGdEQUFlLEdBQXZCLFVBQXdCLGNBQWlDO1FBQ3ZELElBQUksY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUN0RixFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLElBQWdCO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELHVEQUFzQixHQUF0QixVQUF1QixNQUFNO1FBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsR0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSTthQUNuSSxHQUFHLENBQUMsVUFBQyxLQUFzQjtZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN2QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNkLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBZSxFQUFFLENBQUM7WUFDckMsQ0FBQztZQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsRUFSbUgsQ0FRbkgsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELHVEQUFzQixHQUF0QixVQUF1QixNQUFNO1FBQTdCLGlCQVNDO1FBUEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxHQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJO2FBQ25JLEdBQUcsQ0FBQyxVQUFDLEtBQXNCO1lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNuRCxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBTm1ILENBTW5ILENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksS0FBc0I7UUFDaEMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QixLQUFLLE9BQU87Z0JBQUUsSUFBSSxHQUFHLGlDQUFpQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUM5RCxLQUFLLE1BQU07Z0JBQUUsSUFBSSxHQUFHLGlDQUFpQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUM3RCxLQUFLLFFBQVE7Z0JBQUUsSUFBSSxHQUFHLGtDQUFrQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztRQUNsRSxDQUFDO1FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFSCw2QkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksc0JBQXNCO0lBRGxDLGlCQUFVLEVBQUU7cUNBTWEsV0FBSTtHQUxqQixzQkFBc0IsQ0FnRWxDO0FBaEVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnXG5pbXBvcnQgeyBXZWF0aGVyQ2l0eX0gZnJvbSAnLi4vLi4vbW9kZWxzL3dlYXRoZXItY2l0eSdcbmltcG9ydCB7V2VhdGhlckRhdGFFbnRyeSwgUmFpbldlYXRoZXJEYXRhfSBmcm9tICcuLi8uLi9tb2RlbHMvd2VhdGVyLWRhdGEnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5cbi8qXG4gIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFdlYXRoZXJTZXJ2aWNlUHJvdmlkZXIgcHJvdmlkZXIuXG5cbiAgU2VlIGh0dHBzOi8vYW5ndWxhci5pby9kb2NzL3RzL2xhdGVzdC9ndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbi5odG1sXG4gIGZvciBtb3JlIGluZm8gb24gcHJvdmlkZXJzIGFuZCBBbmd1bGFyIERJLlxuKi9cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2VQcm92aWRlciB7XG4gIGFwcElEOnN0cmluZz0gJzZhNGQ2MTdjNjljMjk0MzcwMTEyYjBmNzE3NDEyNGIyJztcbiAgc2VsZWN0ZWRDaXR5OiBXZWF0aGVyQ2l0eTtcblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOkh0dHApIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gV2VhdGhlclNlcnZpY2VQcm92aWRlciBQcm92aWRlcicpO1xuICB9XG5cbiAgZ2V0Q2l0aWVzKCk6QXJyYXk8V2VhdGhlckNpdHk+e1xuICAgIHZhciBjaXR5TGlzdEpzb24gPSByZXF1aXJlKCcuL2NpdHlMaXN0QXVzdHJpYS5qc29uJyk7XG4gICAgdGhpcy5wcmVTZWxlY3RlZENpdHkoY2l0eUxpc3RKc29uKTtcbiAgICByZXR1cm4gY2l0eUxpc3RKc29uO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVTZWxlY3RlZENpdHkocG9zc2libGVDaXRpZXM6QXJyYXk8V2VhdGhlckNpdHk+KXtcbiAgICB2YXIgbWF0Y2hpbmdDaXRpZXMgPSBwb3NzaWJsZUNpdGllcy5maWx0ZXIoKGNpdHk6V2VhdGhlckNpdHkpID0+IGNpdHkubmFtZSA9PSAnV2llbicpO1xuICAgIGlmKG1hdGNoaW5nQ2l0aWVzLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5zZWxlY3RlZENpdHkgPSBtYXRjaGluZ0NpdGllc1swXTtcbiAgICB9XG4gIH1cblxuICBzZXRTZWxlY3RlZENpdHkoY2l0eTpXZWF0aGVyQ2l0eSk6IHZvaWR7XG4gICAgdGhpcy5zZWxlY3RlZENpdHkgPSBjaXR5O1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRDaXR5KCk6IFdlYXRoZXJDaXR5e1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2l0eTtcbiAgfVxuXG4gIGdldFBlcmNpcGl0YXRlRm9yZWNhc3QoY2l0eUlkKTpPYnNlcnZhYmxlPEFycmF5PFdlYXRoZXJEYXRhRW50cnk+PntcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9pZD0nK2NpdHlJZCArICcmYXBwaWQ9JyArIHRoaXMuYXBwSUQpLm1hcChyZXM9PiAgcmVzLmpzb24oKS5saXN0XG4gICAgICAubWFwKChlbnRyeTpXZWF0aGVyRGF0YUVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTtcbiAgICAgICAgZW50cnkuZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmR0ICogMTAwMCk7XG4gICAgICAgIGlmKCFlbnRyeS5yYWluKXtcbiAgICAgICAgICBlbnRyeS5yYWluID0gbmV3IFJhaW5XZWF0aGVyRGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGdldFRlbXBlcmF0dXJlRm9yZWNhc3QoY2l0eUlkKTogT2JzZXJ2YWJsZTxBcnJheTxXZWF0aGVyRGF0YUVudHJ5Pj57XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/aWQ9JytjaXR5SWQgKyAnJmFwcGlkPScgKyB0aGlzLmFwcElEKS5tYXAocmVzPT4gIHJlcy5qc29uKCkubGlzdFxuICAgICAgLm1hcCgoZW50cnk6V2VhdGhlckRhdGFFbnRyeSkgPT4ge1xuICAgICAgICBlbnRyeS5tYWluLnRlbXBfY2Vsc2l1cyA9IGVudHJ5Lm1haW4udGVtcCAtIDI3My4xNTtcbiAgICAgICAgZW50cnkuZGF0ZSA9IG5ldyBEYXRlKGVudHJ5LmR0ICogMTAwMCk7XG4gICAgICAgIHRoaXMuc2V0SWNvblBhdGgoZW50cnkpO1xuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICB9KSk7XG4gIH1cblxuICBzZXRJY29uUGF0aChlbnRyeTpXZWF0aGVyRGF0YUVudHJ5KXtcbiAgICB2YXIgcGF0aDpzdHJpbmcgPSAnJztcbiAgICBzd2l0Y2ggKGVudHJ5LndlYXRoZXJbMF0ubWFpbikge1xuICAgICAgY2FzZSAnQ2xlYXInOiBwYXRoID0gJy4vYXNzZXRzL2ljb24vd2VhdGhlci1zdW5ueS5zdmcnOyBicmVhaztcbiAgICAgIGNhc2UgJ1JhaW4nOiBwYXRoID0gJy4vYXNzZXRzL2ljb24vd2VhdGhlci1yYWlueS5zdmcnOyBicmVhaztcbiAgICAgIGNhc2UgJ0Nsb3Vkcyc6IHBhdGggPSAnLi9hc3NldHMvaWNvbi93ZWF0aGVyLWNsb3VkeS5zdmcnOyBicmVhaztcbiAgICB9XG4gICAgZW50cnkud2VhdGhlclswXS5pY29uUmVmID0gcGF0aDtcbiAgfVxuXG59XG4iXX0=