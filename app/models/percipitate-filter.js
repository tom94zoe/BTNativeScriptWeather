"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PercipitateFilter = (function () {
    function PercipitateFilter() {
        this.dualPercipitateValue = null;
        this.dayTime = DayTime.None;
        this.fromDate = null;
        this.toDate = null;
        this.dualPercipitateValueActive = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2lwaXRhdGUtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyY2lwaXRhdGUtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFBQTtRQUVTLHlCQUFvQixHQUFrQixJQUFJLENBQUM7UUFDM0MsWUFBTyxHQUFhLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDakMsYUFBUSxHQUFjLElBQUksQ0FBQztRQUMzQixXQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLCtCQUEwQixHQUFXLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDhDQUFpQjtBQVM5QjtJQUFBO0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSx3Q0FBYztBQUszQixJQUFZLE9BSVg7QUFKRCxXQUFZLE9BQU87SUFDakIsbUNBQUcsQ0FBQTtJQUNILHVDQUFLLENBQUE7SUFDTCxxQ0FBSSxDQUFBO0FBQ04sQ0FBQyxFQUpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQUlsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB0aHpvIG9uIDEwLjA4LjE3LlxuICovXG5pbXBvcnQge1RpbWVQaWNrZXJ9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyL3RpbWUtcGlja2VyXCI7XG5leHBvcnQgY2xhc3MgUGVyY2lwaXRhdGVGaWx0ZXJ7XG5cbiAgcHVibGljIGR1YWxQZXJjaXBpdGF0ZVZhbHVlOlJhbmdlRHVhbEtub2JzID0gbnVsbDtcbiAgcHVibGljIGRheVRpbWUgOiBEYXlUaW1lID0gRGF5VGltZS5Ob25lO1xuICBwdWJsaWMgZnJvbURhdGU6VGltZVBpY2tlciA9IG51bGw7XG4gIHB1YmxpYyB0b0RhdGU6VGltZVBpY2tlciA9IG51bGw7XG4gIHB1YmxpYyBkdWFsUGVyY2lwaXRhdGVWYWx1ZUFjdGl2ZTpib29sZWFuID0gZmFsc2U7IFxufVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEdWFsS25vYnN7XG4gIHB1YmxpYyBsb3dlcjpudW1iZXI7XG4gIHB1YmxpYyB1cHBlcjpudW1iZXI7XG59XG5cbmV4cG9ydCBlbnVtIERheVRpbWV7XG4gIERheSxcbiAgTmlnaHQsXG4gIE5vbmVcbn1cbiJdfQ==