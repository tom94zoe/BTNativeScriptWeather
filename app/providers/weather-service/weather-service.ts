import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'
import { WeatherCity} from '../../models/weather-city'
import {WeatherDataEntry, RainWeatherData} from '../../models/weater-data';
import {Subject} from "rxjs/Subject";

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


@Injectable()
export class WeatherServiceProvider {
  appID:string= '6a4d617c69c294370112b0f7174124b2';
  selectedCity: WeatherCity;


  constructor(public http:Http) {
    console.log('Hello WeatherServiceProvider Provider');
  }

  getCities():Array<WeatherCity>{
    var cityListJson = require('./cityListAustria.json');
    this.preSelectedCity(cityListJson);
    return cityListJson;
  }

  private preSelectedCity(possibleCities:Array<WeatherCity>){
    var matchingCities = possibleCities.filter((city:WeatherCity) => city.name == 'Wien');
    if(matchingCities.length > 0){
      this.selectedCity = matchingCities[0];
      console.log('preselected city')
    }
  }

  setSelectedCity(city:WeatherCity): void{
    this.selectedCity = city;
  }

  getSelectedCity(): WeatherCity{
    return this.selectedCity;
  }

  getPercipitateForecast(cityId):Observable<Array<WeatherDataEntry>>{

    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id='+cityId + '&appid=' + this.appID).map(res=>  res.json().list
      .map((entry:WeatherDataEntry) => {
        console.log(entry);
        entry.date = new Date(entry.dt * 1000);
        if(!entry.rain){
          entry.rain = new RainWeatherData();
        }
        return entry;
      }));
  }

  getTemperatureForecast(cityId): Observable<Array<WeatherDataEntry>>{

    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?id='+cityId + '&appid=' + this.appID).map(res=>  res.json().list
      .map((entry:WeatherDataEntry) => {
        entry.main.temp_celsius = entry.main.temp - 273.15;
        entry.date = new Date(entry.dt * 1000);
        this.setIconPath(entry);
        return entry;
      }));
  }

  setIconPath(entry:WeatherDataEntry){
    var path:string = '';
    switch (entry.weather[0].main) {
      case 'Clear': path = '~/weather-sunny.png'; break; 
      case 'Rain': path = '~/weather-rainy.png'; break;
      case 'Clouds': path = '~/weather-cloudy.png'; break;
    }
    entry.weather[0].iconRef = path;
  }

}
