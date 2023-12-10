import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{
  allow: Boolean = false;
  ID: Number = 10;
  Name: String = "Hieu";
  constructor() {
    setTimeout(() => this.allow = true, 3000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onChangeName = (): void => {
    this.Name = "zxczxc";
  }



}
