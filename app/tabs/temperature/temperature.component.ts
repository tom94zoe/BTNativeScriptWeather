import { Component, OnInit, ViewChild } from "@angular/core";
import {WeatherServiceProvider} from "../../providers/weather-service/weather-service";
import {WeatherCity} from "../../models/weather-city";
import {WeatherDataEntry, MainWeatherData, WeatherDescription} from "../../models/weater-data";
import {TabView, SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view/tab-view";
import {Page} from "tns-core-modules/ui/page/page";

@Component({
    selector: "Temperature",
    moduleId: module.id,
    templateUrl: "./temperature.component.html"
})
export class TemperatureComponent implements OnInit {
    selectedCity:WeatherCity;
    temperatureList:Array<WeatherDataEntry> = [];
    showActionBar:boolean = false;

    constructor(private weatherService:WeatherServiceProvider, private _page: Page) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/

        var tabview = <TabView> this._page.getViewById("tabViewIdsId");
        tabview.on('selectedIndexChanged', (args:SelectedIndexChangedEventData) =>{
            console.log('tempOnIndexChange');
            this.initTemperature();
            if(args.newIndex === 1) {
                this.showActionBar = true;
            }
            
        });
        this.initTemperature();

    }

    initTemperature(){
        this.selectedCity = this.weatherService.getSelectedCity();

        this.weatherService.getTemperatureForecast(this.selectedCity.id).subscribe((data : Array<WeatherDataEntry>) =>
        {

            this.temperatureList = data;
            console.log('set templist')
        });
    }
}
