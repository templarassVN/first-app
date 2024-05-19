import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalenderDateQueryDto } from './dto/canlender-date-queryDto';

@Component({
  selector: 'app-calender-date',
  templateUrl: './calender-date.component.html',
  styleUrls: ['./calender-date.component.css'],
})
export class CalenderDateComponent {
  @Input()
  date: Date = new Date();
  
  @Input()
  tasks: Array<CalenderDateQueryDto> = [];

  @Output()
  eventSendDate: EventEmitter<Date> = new EventEmitter();

  constructor(){
  }

  sendDate() :void{
    
    this.eventSendDate.emit(this.date);
  }
}
