import { Component, OnInit } from '@angular/core';
import { Todos } from '../model/todos';
import { TodosService } from '../service/todos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,CommonModule,NgxPaginationModule,HttpClientModule],
  providers:[TodosService],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  data: Todos[]=[];
  pageNumber:number =1;
  pageSize:number =10;
  todo:any;
  length:number=30;
  constructor(private todos:TodosService,){}
  ngOnInit(): void {
    this.getData();
  }
  getData(): void{
    this.todos.fetchData().subscribe((res:any)=>{
      this.data=res.todos;
      console.log("length",this.data.length);

     })
  }
  search(){
    if(this.todo == ""){
      this.getData();
    }else{
      this.data = this.data.filter(res =>{
        return res.todo?.toLocaleLowerCase().match(this.todo.toLocaleLowerCase());
      })
    }
    // else{
    //   console.log("invalid data");
    // }
  }
}
