import {Component, OnInit} from "@angular/core";
import {WeatherServiceProvider} from "../../providers/weather-service/weather-service";
import {FilterServiceProvider} from "../../providers/filter-service/filter-service";
import {WeatherCity} from "../../models/weather-city";
import {WeatherDataEntry} from "../../models/weater-data";
import {Page} from "tns-core-modules/ui/page/page";
import {TabView} from "tns-core-modules/ui/tab-view/tab-view";
import {PercipitateFilter} from "../../models/percipitate-filter";

@Component({
    selector: "Percipitate",
    moduleId: module.id,
    templateUrl: "./percipitate.component.html"
})
export class PercipitateComponent implements OnInit {
    selectedFilter:PercipitateFilter = new PercipitateFilter;
    settingsAreActive:boolean = false;
    selectedCity:WeatherCity;
    percipitateList:Array<WeatherDataEntry> = [];
    showActionBar:boolean = false;
    customName:string = "aa";
    startingTime:Date;
    Day:boolean = true; 
    Night:boolean = true;



    constructor(private weatherService:WeatherServiceProvider, private filterService:FilterServiceProvider, private _page:Page) {
        /* ***********************************************************
         * Use the constructor to inject services.
         *************************************************************/
        this.startingTime = new Date();
    }

    ngOnInit():void {
        /* ***********************************************************
         * Use the "ngOnInit" handler to initialize data for the view.
         *************************************************************/
        var tabview = <TabView> this._page.getViewById("tabViewIdsId");
        tabview.on('selectedIndexChanged', args => {
            console.log('tempOnIndexChange');
            this.initPercipitate();
            console.dir(args);

            if (args.newIndex === 2) {
                this.showActionBar = true;
            }
        });
        this.initPercipitate();
    }

    openSearchFilter() {
        this.settingsAreActive = true;
    }

    closeSearchFilter(setSettings:boolean) {
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
    }

    initPercipitate() {
        this.selectedCity = this.weatherService.getSelectedCity();
        let currentFilter = this.filterService.getPercipitateFilter();

        this.weatherService.getPercipitateForecast(this.selectedCity.id).subscribe((data:Array<WeatherDataEntry>) => {
            if (currentFilter) {
                data = data.filter((entry:WeatherDataEntry) => {
                    let isValid:boolean = true;

                    if(currentFilter.enableDay && currentFilter.enableNight){
                    }else if (currentFilter.enableDay) {
                        isValid = isValid && this.isDay(entry.date);
                    } else if (currentFilter.enableNight) {
                        isValid = isValid && !this.isDay(entry.date);
                    }

                    if (currentFilter.fromDate) {
                        let toMinutes = this.selectedFilter.fromDate.getHours() * 60 + this.selectedFilter.fromDate.getMinutes();
                        let entryMinutes = entry.date.getHours() * 60 + entry.date.getMinutes();

                        isValid = isValid && toMinutes < entryMinutes;
                    }
                    return isValid;
                });

            }
            this.percipitateList = data;

        });


    }

    isDay(cDate:Date) {
        return cDate.getHours() >= 8 && cDate.getHours() <= 20;
    }
}
