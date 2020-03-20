import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phone: string; 
  result: string; 

  constructor() { }

  ngOnInit() {
  }

  OnKeyUp(event: any  ) {
    //  alert(event.target.value)  ;

    this.phone = event.target.value;
    if (this.phone.length < 4){
         this.result =  'Fail'
    } else {
         this.result =  'Pass'
    }
  }

}