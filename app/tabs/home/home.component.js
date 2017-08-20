"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var weather_service_1 = require("../../providers/weather-service/weather-service");
var timer_1 = require("tns-core-modules/timer/timer");
var HomeComponent = (function () {
    function HomeComponent(_page, weatherService) {
        this._page = _page;
        this.weatherService = weatherService;
        this.allCities = [];
        this.cities = [];
        this.salutation = "Hi";
        this.busy = true;
        /* ***********************************************************
        * Use the constructor to inject services.
        *************************************************************/
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
        timer_1.setTimeout(function () { return _this.busy = false; }, 1500);
        this.buildGreeting(null);
        this.promptOptions = {
            title: "Enter your name",
            defaultText: "",
            inputType: dialogs_1.inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        this.allCities = this.weatherService.getCities();
        this.filterCities(null);
    };
    HomeComponent.prototype.filterCities = function (event) {
        console.dir(event);
        if (event === null || !event.value) {
            this.cities = this.allCities.slice(0, 100);
            return;
        }
        this.cities = this.allCities.filter(function (city) {
            return city.name.toLowerCase().indexOf(event.value.toLowerCase()) > -1;
        }).slice(0, 100);
        console.log(event);
    };
    HomeComponent.prototype.buildGreeting = function (nameValue) {
        if (nameValue) {
            this.name = nameValue;
        }
        if (!this.name) {
            this.greeting = this.salutation;
        }
        else {
            this.greeting = this.salutation + ' , ' + this.name;
        }
    };
    HomeComponent.prototype.selectCity = function (city) {
        this.weatherService.setSelectedCity(city);
        var tabview = this._page.getViewById("tabViewIdsId");
        tabview.selectedIndex = 1;
    };
    HomeComponent.prototype.openAction = function () {
        var _this = this;
        dialogs_1.prompt(this.promptOptions).then(function (result) {
            _this.buildGreeting(result.text);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "Home",
        moduleId: module.id,
        templateUrl: "./home.component.html"
    }),
    __metadata("design:paramtypes", [page_1.Page, weather_service_1.WeatherServiceProvider])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBbUQ7QUFDbkQsK0RBQW1HO0FBRW5HLG1GQUF1RjtBQUV2RixzREFBd0Q7QUFPeEQsSUFBYSxhQUFhO0lBVXRCLHVCQUFvQixLQUFVLEVBQVUsY0FBc0M7UUFBMUQsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQVQ3RSxjQUFTLEdBQXVCLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUVoQyxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBRzFCLFNBQUksR0FBVyxJQUFJLENBQUM7UUFJakI7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZHOztzRUFFOEQ7UUFDOUQsa0JBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRSxLQUFLLEVBQWhCLENBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ2pCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQTtRQUNWLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSTtZQUN4QyxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBL0QsQ0FBK0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQWEsR0FBYixVQUFlLFNBQVM7UUFDcEIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFHRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RCxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFJQztRQUhHLGdCQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQW9CO1lBQ2pELEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXZFWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTTtRQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtLQUN2QyxDQUFDO3FDQVc0QixXQUFJLEVBQTBCLHdDQUFzQjtHQVZyRSxhQUFhLENBdUV6QjtBQXZFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQge3Byb21wdCwgUHJvbXB0UmVzdWx0LCBpbnB1dFR5cGUsIFByb21wdE9wdGlvbnN9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9nc1wiO1xuaW1wb3J0IHtXZWF0aGVyQ2l0eX0gZnJvbSBcIi4uLy4uL21vZGVscy93ZWF0aGVyLWNpdHlcIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2VQcm92aWRlcn0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy93ZWF0aGVyLXNlcnZpY2Uvd2VhdGhlci1zZXJ2aWNlXCI7XG5pbXBvcnQge1RhYlZpZXd9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3L3RhYi12aWV3XCI7XG5pbXBvcnQge3NldFRpbWVvdXR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyL3RpbWVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICBhbGxDaXRpZXM6IEFycmF5PFdlYXRoZXJDaXR5PiA9IFtdO1xuICAgICBjaXRpZXM6IEFycmF5PFdlYXRoZXJDaXR5PiA9IFtdO1xuICAgICBuYW1lOiBzdHJpbmc7XG4gICAgIHNhbHV0YXRpb246IHN0cmluZyA9IFwiSGlcIjtcbiAgICAgZ3JlZXRpbmc6IHN0cmluZztcbiAgICAgcHJvbXB0T3B0aW9uczogUHJvbXB0T3B0aW9ucztcbiAgICAgYnVzeTpib29sZWFuID0gdHJ1ZTtcbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6UGFnZSwgcHJpdmF0ZSB3ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2VQcm92aWRlcikge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmJ1c3k9IGZhbHNlLCAxNTAwKTtcbiAgICAgICAgdGhpcy5idWlsZEdyZWV0aW5nKG51bGwpO1xuICAgICAgICB0aGlzLnByb21wdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogXCJFbnRlciB5b3VyIG5hbWVcIixcbiAgICAgICAgICAgIGRlZmF1bHRUZXh0OiBcIlwiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBpbnB1dFR5cGUudGV4dCxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9O1xuXG4gICAgICAgICB0aGlzLmFsbENpdGllcyA9IHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0Q2l0aWVzKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyQ2l0aWVzKG51bGwpO1xuICAgIH1cblxuICAgIGZpbHRlckNpdGllcyhldmVudCkge1xuICAgICAgICBjb25zb2xlLmRpcihldmVudCk7XG4gICAgICAgIGlmIChldmVudCA9PT0gbnVsbCB8fCAhZXZlbnQudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2l0aWVzID0gdGhpcy5hbGxDaXRpZXMuc2xpY2UoMCwxMDApO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaXRpZXMgPSB0aGlzLmFsbENpdGllcy5maWx0ZXIoY2l0eSA9PlxuICAgICAgICBjaXR5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGV2ZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpLnNsaWNlKDAsMTAwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgfVxuXG4gICAgYnVpbGRHcmVldGluZyAobmFtZVZhbHVlKXtcbiAgICAgICAgaWYobmFtZVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lVmFsdWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCF0aGlzLm5hbWUpe1xuICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IHRoaXMuc2FsdXRhdGlvbjtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmVldGluZyA9IHRoaXMuc2FsdXRhdGlvbiArICcgLCAnICsgdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0Q2l0eShjaXR5KXtcbiAgICAgICAgdGhpcy53ZWF0aGVyU2VydmljZS5zZXRTZWxlY3RlZENpdHkoY2l0eSk7XG4gICAgICAgIHZhciB0YWJ2aWV3ID0gPFRhYlZpZXc+IHRoaXMuX3BhZ2UuZ2V0Vmlld0J5SWQoXCJ0YWJWaWV3SWRzSWRcIik7XG4gICAgICAgIFxuICAgICAgICB0YWJ2aWV3LnNlbGVjdGVkSW5kZXggPSAxO1xuICAgIH1cblxuICAgIG9wZW5BY3Rpb24oKXtcbiAgICAgICAgcHJvbXB0KHRoaXMucHJvbXB0T3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRHcmVldGluZyhyZXN1bHQudGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==