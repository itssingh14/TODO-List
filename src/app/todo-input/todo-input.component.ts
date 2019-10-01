import { Component, OnInit } from '@angular/core';
import { todoservices } from '../todo.services';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private tl:todoservices) { }
  ngOnInit() {
  }
  item
  ad(){
    this.tl.setlist(this.item);
    this.item = null;
  }
}
