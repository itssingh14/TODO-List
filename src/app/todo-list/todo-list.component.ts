import { Component, OnInit } from '@angular/core';
import { todoservices } from '../todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private tl: todoservices) { }

  ngOnInit() {
    this.list = this.tl.getlist();
  }
  list = [];
  su(k){
    this.tl.dellist(k);
  }
}
