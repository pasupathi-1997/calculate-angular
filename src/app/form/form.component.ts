import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Item } from '../model/item';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
//   items: Item[] = [
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
// //  if(this.selectedItem && this.selectedItem.price != null){
// //       this.total=this.selectedItem.price*this.quantity;
// //       console.log("selectedItem", this.selectedItem)
// //       console.log("displaydata", this.displaydata)

// //       const alreadyExit = this.displaydata.find((data:any) => data.id == this.selectedItem.id);
// //       console.log("alreadyexit", alreadyExit)

// //       if(alreadyExit){
// //         alreadyExit.quantity += this.quantity;
// //         alreadyExit.totalPrice = alreadyExit.quantity * this.selectedItem.price;
// //       }else{
// //         this.displaydata.push({
// //           item: this.selectedItem,
// //           quantity: this.quantity,
// //           totalPrice: this.total
// //         });
// //       }
// //     }
// //     else{
// //       this.total=0;
// //     }

//  }
 }

