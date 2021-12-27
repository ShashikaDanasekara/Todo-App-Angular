import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todos-model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:"Add Todos to the List",
        finished:false
      },
      {
        content:"Cross Out the finished Todos",
        finished:true
      }
    ]
  }

  toggleDone(id : number){
    this.todos.map((v,i)=>{
      if (i == id)v.finished = !v.finished;
      return v;
    })
  }

  deleteTodo(id : number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }

  addTodo(){
    if(this.inputTodo != ""){
      this.todos.push({
        content: this.inputTodo,
        finished: false
      });
    } 
    
    this.inputTodo = "";
  }

}
