import { Attendance } from "./attendance";

export class Register {
    id?: number;
    date : string;
    day : string;
    time : string;
    tutor : string;
    attendances: Attendance[] = new Array;

  }
  