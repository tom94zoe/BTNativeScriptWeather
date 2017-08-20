/**
 * Created by thzo on 10.08.17.
 */
import {TimePicker} from "tns-core-modules/ui/time-picker/time-picker";
export class PercipitateFilter{
  public enableDay : boolean;
  public enableNight: boolean;
  public fromDate:Date = null;
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
