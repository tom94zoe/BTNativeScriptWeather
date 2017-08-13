import { Component, OnInit } from "@angular/core";
import {Page} from "tns-core-modules/ui/page/page";
import {prompt, PromptResult, inputType, PromptOptions} from "tns-core-modules/ui/dialogs/dialogs";
import {WeatherCity} from "../../models/weather-city";
import {WeatherServiceProvider} from "../../providers/weather-service/weather-service";
import {TabView} from "tns-core-modules/ui/tab-view/tab-view";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
     allCities: Array<WeatherCity> = [];
     cities: Array<WeatherCity> = [];
     name: string;
     salutation: string = "Hi";
     greeting: string;
     promptOptions: PromptOptions;
    

    constructor(private _page:Page, private weatherService: WeatherServiceProvider) {
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        this.buildGreeting(null);
        this.promptOptions = {
            title: "Enter your name",
            defaultText: "",
            inputType: inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };

         this.allCities = this.weatherService.getCities();
        this.filterCities(null);
    }

    filterCities(event) {
        console.dir(event);
        if (event === null || !event.value) {
            this.cities = this.allCities.slice(0,100);
            return
        }
        this.cities = this.allCities.filter(city =>
        city.name.toLowerCase().indexOf(event.value.toLowerCase()) > -1).slice(0,100);

        console.log(event);
    }

    buildGreeting (nameValue){
        if(nameValue) {
            this.name = nameValue;
        }


        if(!this.name){
            this.greeting = this.salutation;
        }else {
            this.greeting = this.salutation + ' , ' + this.name;
        }
    }

    selectCity(city){
        this.weatherService.setSelectedCity(city);
        var tabview = <TabView> this._page.getViewById("tabViewIdsId");
        
        tabview.selectedIndex = 1;
    }

    openAction(){
        prompt(this.promptOptions).then((result: PromptResult) => {
            this.buildGreeting(result.text);
        });
    }
}
