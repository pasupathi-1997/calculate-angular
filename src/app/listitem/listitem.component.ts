import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Item } from '../model/item';
import { ListitemService } from '../service/listitem.service';

@Component({
  selector: 'app-listitem',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './listitem.component.html',
  styleUrl: './listitem.component.scss'
})
export class ListitemComponent implements OnInit{
  constructor(private router:Router, private api:ListitemService){}
  items : Item[]=[
    {id:1, name:'mobile', price:10000},
    {id:2, name:'Bike',   price:150000},
    {id:3, name:'Laptop', price:50000},
    {id:4, name:'car', price:500000},
    {id:5, name:'LCDTV', price:30000},
  ];
  selectedItem :any =[];
  quantity:any;
  total:any;
  addTotal:any;
  displaydata: { item: Item, quantity: number, totalPrice: any }[] = [];
  cardObj:any={};
  ngOnInit(): void {
  }
//  selectItem(item: Item){
//  this.selectedItem = item;
//  }

addPrice() :void{
if (this.selectedItem && this.selectedItem.price != null) {
  this.total = this.selectedItem.price * this.quantity;
  console.log("selectedItem", this.selectedItem);
  console.log("cardObj", this.cardObj);

  const itemId = this.selectedItem.id.toString();


  if (this.cardObj[itemId]) {
    this.cardObj[itemId].quantity += this.quantity;
    this.cardObj[itemId].totalPrice = this.cardObj[itemId].quantity * this.selectedItem.price;
  } else {
    this.cardObj[itemId] = {
      item: this.selectedItem,
      quantity: this.quantity,
      totalPrice: this.total
    };
  }
  this.displaydata = Object.values(this.cardObj);
  this.addTotal = this.displaydata.reduce((add1,add2) => add1+add2.totalPrice, 0);
  console.log(this.addTotal);
  this.selectedItem = null;
  this.quantity = null;
} else {
  this.total = 0;
}
// items: Item[] = [
  //     { id: 1, name: 'Item 1', price: 10 },
  //     { id: 2, name: 'Item 2', price: 20 },
  //     { id: 3, name: 'Item 3', price: 30 }
  //   ];
  //   selectedItem :any =[];
  //   displaydata: { item: Item, quantity: number, totalPrice: any }[] = [];
  //   //cardObj: { [key: string]: { item: Item; quantity: number; totalPrice: any } } = {};
  //   cardObj :any = {
  //     // itemId: '',
  //     // itemName: '',
  //     // quantity: '',
  //     // cost: '',
  //   };

  //   total:any;
  //   quantity:any;
  //   addTotal:any;
  //   constructor(){}
  //   ngOnInit(): void {
  // }
  //  selectItem(item: Item){
  //  this.selectedItem = item;
  //  }
  //  calculateTotal(){
  //   if (this.selectedItem && this.selectedItem.price != null) {
  //     this.total = this.selectedItem.price * this.quantity;
  //     console.log("selectedItem", this.selectedItem);
  //     console.log("cardObj", this.cardObj);

  //           const itemId = this.selectedItem.id.toString();

  //           if (this.cardObj[itemId]) {
  //             this.cardObj[itemId].quantity += this.quantity;
  //             console.log(this.cardObj[itemId].quantity);
  //             this.cardObj[itemId].totalPrice = this.cardObj[itemId].quantity * this.selectedItem.price;
  //             console.log(this.cardObj[itemId].totalPrice);
  //           } else {
  //             this.cardObj[itemId] = {
  //               item: this.selectedItem,
  //               quantity: this.quantity,
  //               totalPrice: this.total
  //             };
  //           }
  //           this.displaydata = Object.values(this.cardObj);
  //           console.log("displaydata",this.displaydata);
  //           this.addTotal = this.displaydata.reduce((sum, entry) => sum + entry.totalPrice, 0);
  //           console.log(this.addTotal);
  //           this.selectedItem = null;
  //           this.quantity = null;
  //   }

  //   else {
  //     this.total = 0;
  //  }
//if(this.selectedItem && this.selectedItem.price != null){
  //     this.total=this.selectedItem.price*this.quantity;
  //     console.log("selectedItem", this.selectedItem)
  //     console.log("displaydata", this.displaydata)
  //  if(this.selectedItem && this.selectedItem.price != null){
  //     const alreadyExit = this.displaydata.find((data:any) => data.id == this.selectedItem.id);
  //     console.log("alreadyexit", alreadyExit)

  //     if(alreadyExit){
  //       alreadyExit.quantity += this.quantity;
  //       alreadyExit.totalPrice = alreadyExit.quantity * alreadyExit.item.price;
  //     }else{
  //       this.displaydata.push({
  //         item: this.selectedItem,
  //         quantity: this.quantity,
  //         totalPrice: this.total
  //       });
  //     }
  //   }
  //   else{
  //     this.total=0;
  //   }
}
logout(){
this.api.signout();
}
}
