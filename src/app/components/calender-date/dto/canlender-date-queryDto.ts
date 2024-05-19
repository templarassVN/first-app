import { Injectable } from "@angular/core";

@Injectable()
export class CalenderDateQueryDto {
    public startdate: Date = new Date("2023-12-01");
    public endDate: Date = new Date();

    public tasks: string = "asdsaasd";

    constructor() {
        
    }
}