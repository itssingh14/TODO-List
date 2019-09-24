import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list = [];
  item = null;
  ad(){
    this.list.push(this.item);
    this.item = null;
  }
  su(k){
    this.list.splice(this.list.indexOf(k),1);
  }
}
