/**
 * Created by thzo on 10.08.17.
 */
import {TimePicker} from "tns-core-modules/ui/time-picker/time-picker";
export class PercipitateFilter{

  public dualPercipitateValue:RangeDualKnobs = null;
  public dayTime : DayTime = DayTime.None;
  public fromDate:TimePicker = null;
  public toDate:TimePicker = null;
  public dualPercipitateValueActive:boolean = false; 
}

export class RangeDualKnobs{
  public lower:number;
  public upper:number;
}

export enum DayTime{
  Day,
  Night,
  None
}
