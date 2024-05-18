import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalenderDateComponent } from '../../../components/calender-date/calender-date.component';
import { CalenderDateQueryDto } from '../../../components/calender-date/dto/canlender-date-queryDto';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers: [CalenderDateQueryDto]
})
export class CalenderComponent {
  classReference: any = CalenderComponent;
  open: boolean = false;
  date: Date;
  selectedDate: Date;
  weatherInformation: string = "";
  viewType: string = 'm';
  displayDate: Date;
  displayView: Array<Date> = [];
  preMonth: Array<Date> = [];
  curMonth: Array<Date> = [];
  nextMonth: Array<Date> = [];

  static totalDisplay = 42;

  private readonly data: CalenderDateQueryDto

  static weekDays: Array<string> = ["Su","Mo","Tu", "We", "Th", "Fr", "Sa"];
  @Output()
  openDrawer = new EventEmitter<any>();

    
  constructor(_data: CalenderDateQueryDto){
    this.data = _data;
    this.date = new Date(Date.now())
    this.selectedDate = new Date();  
    this.displayDate = this.date; 
    this.setupDisplay();
  }

  public getData(): CalenderDateQueryDto {
    return this.data;
  } 
  
  toggle() {
    this.openDrawer.emit(null);
  }

  passData(event: any) {
    console.log(event)
  }

  setSelectedDate(event: any): void {
    this.selectedDate = event;
  }

  public getToday() {
    return Date.now();
  }

  getFirstDayOfMonth(): Date {
    return new Date(this.displayDate.getFullYear(), this.displayDate.getMonth(),1);
  }

  getLastDayOfMonth(): Date {
    const tmp = new Date(this.displayDate.getFullYear(), this.displayDate.getMonth()+1,1);
    tmp.setDate(tmp.getDate() - 1);
    return tmp;
  }

  setNextMonth() {
    this.displayDate = new Date(this.date.setMonth(this.date.getMonth()+1));
    this.setupDisplay();
  }

  setPreMonth() {
    this.displayDate = new Date(this.date.setMonth(this.date.getMonth()-1));
    this.setupDisplay();
  }

  setupDisplay(){
    const preMonthArea: Array<number> = Array.from(Array(this.getFirstDayOfMonth().getDay()).keys()).reverse();
    this.preMonth = preMonthArea.map(o => {
      const tmp:Date = new Date(this.date);
      tmp.setDate(this.getFirstDayOfMonth().getDate() - o - 1);
      return tmp;
    });

    const curMonthArea: Array<number> = Array.from(Array(this.getLastDayOfMonth().getDate()).keys());
    this.curMonth =  curMonthArea.map(o => {
      const tmp:Date = new Date(this.date.getFullYear(), this.date.getMonth(), o + 1);
      return tmp;
    });

    const nextMonthArea: Array<number> = Array.from(Array(CalenderComponent.totalDisplay - this.preMonth.length - this.curMonth.length).keys());
    this.nextMonth =  nextMonthArea.map(o => {
      const tmp:Date = new Date(this.date.getFullYear(), this.date.getMonth()+1, o + 1);
      return tmp;
    });
  }
  
  getEachMonthDisplayView(): Array<Date> {
    return [...this.preMonth, ...this.curMonth, ...this.nextMonth];
  }

  getLastDateView(): Date {
    return this.nextMonth.length > 0 ? this.nextMonth[-1] : this.curMonth[-1]; 
  }

  getFirstDateView(): Date {
    return this.preMonth.length > 0 ? this.nextMonth[0] : this.curMonth[0]; 
  }

  appendPreWeek(): void {
    const firstView: Date = this.getFirstDateView();
    let newWeek: Array<Date> = Array(7).map<Date>( 
      (_: Date,index: number): Date => {
          const tmp:Date = new Date();
          tmp.setDate(tmp.getDate() - 7 + index);
          return tmp;
        })
    
    newWeek.push(...this.displayView.slice(0,-7));
    this.displayView = newWeek;
  }

  appendNextWeek(): void {
    const firstView: Date = this.getLastDateView();
    let newWeek: Array<Date> = Array(7).map<Date>( 
      (_: Date,index: number): Date => {
          const tmp:Date = new Date();
          tmp.setDate(tmp.getDate()+ 1 + index);
          return tmp;
        })
    const tmp: Array<Date> = this.displayView.slice(7);
    tmp.push(...newWeek);
    this.displayView = tmp;
  }

  getSelectedDate(): Date {
    return this.selectedDate;
  }

  
}
