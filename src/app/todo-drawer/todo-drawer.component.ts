import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'app-todo-drawer',
  templateUrl: './todo-drawer.component.html',
  styleUrls: ['./todo-drawer.component.css']
})
export class TodoDrawerComponent implements OnChanges  {
  @Input()
  date: Date = new Date();

  todoList: Array<string> = [];
  hidden: boolean = true;

  @Input()
  title: string = "";
  @Input()
  desciption: string = "";
  startTime: Date = new Date();

  math: Math = Math;
  constructor(){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.table(changes);
  }

  public toggle() {
    this.hidden = !this.hidden;
  }

  addTask(event:any): void{
    this.todoList.push(event.target.value);
  }
}
