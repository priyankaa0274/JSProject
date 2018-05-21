import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

 
 
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

	isAvailable = false;
	isName='';
	isValue='priyankaKLKK';
  servers = ["PRIYANKA"];

  // valCheck = false;
  constructor() 
  {
  	setTimeout(() => {
  		this.isAvailable = true},5000);
  }

  ngOnInit() {
  }

  onChangeName(){
    // this.valCheck = true;
  	this.isName ='PRIYANKA';
    this.servers.push(this.isName);
  }
  onUpdate (e: any){
  	// console.log("hello");
  	// console.log(e);
  	this.isValue = (<HTMLInputElement>e.target).value;
  }

}
