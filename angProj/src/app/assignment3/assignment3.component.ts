import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
   valid = true;
   amount = 0;
   finalValue = [];
   print;
   showDetails = false;
   // isColor = 5;
  constructor() { }

  ngOnInit() {
  }
  // colorChange(){

  // }

colorChange(){

  // this.print = this.amount>5 ? 'red':'pink'
}

checkDetails(){
	this.showDetails =! this.showDetails;
	this.valid = false;
	this.amount=this.amount+1;
// console.log('plus is : '+this.amount)
	this.finalValue.push(this.amount);

    // console.log"hello");

  }

}
