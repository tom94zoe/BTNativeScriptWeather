"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PercipitateFilter = (function () {
    function PercipitateFilter() {
        this.fromDate = null;
    }
    return PercipitateFilter;
}());
exports.PercipitateFilter = PercipitateFilter;
var RangeDualKnobs = (function () {
    function RangeDualKnobs() {
    }
    return RangeDualKnobs;
}());
exports.RangeDualKnobs = RangeDualKnobs;
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Day"] = 0] = "Day";
    DayTime[DayTime["Night"] = 1] = "Night";
    DayTime[DayTime["None"] = 2] = "None";
})(DayTime = exports.DayTime || (exports.DayTime = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2lwaXRhdGUtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyY2lwaXRhdGUtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFBQTtRQUdTLGFBQVEsR0FBUSxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSw4Q0FBaUI7QUFNOUI7SUFBQTtJQUdBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksd0NBQWM7QUFLM0IsSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2pCLG1DQUFHLENBQUE7SUFDSCx1Q0FBSyxDQUFBO0lBQ0wscUNBQUksQ0FBQTtBQUNOLENBQUMsRUFKVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFJbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdGh6byBvbiAxMC4wOC4xNy5cbiAqL1xuaW1wb3J0IHtUaW1lUGlja2VyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlci90aW1lLXBpY2tlclwiO1xuZXhwb3J0IGNsYXNzIFBlcmNpcGl0YXRlRmlsdGVye1xuICBwdWJsaWMgZW5hYmxlRGF5IDogYm9vbGVhbjtcbiAgcHVibGljIGVuYWJsZU5pZ2h0OiBib29sZWFuO1xuICBwdWJsaWMgZnJvbURhdGU6RGF0ZSA9IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUR1YWxLbm9ic3tcbiAgcHVibGljIGxvd2VyOm51bWJlcjtcbiAgcHVibGljIHVwcGVyOm51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGF5VGltZXtcbiAgRGF5LFxuICBOaWdodCxcbiAgTm9uZVxufVxuIl19