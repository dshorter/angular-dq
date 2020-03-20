import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phone: string; 
  result: any; 

  constructor() { }

  ngOnInit() {
  }

  OnKeyUp(event: any  ) {
    //  alert(event.target.value)  ;

    this.phone = event.target.value;
    let regStr: any  = "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" ;
    let regexpNumber: RegExp =  regStr ;
 alert(regexpNumber )
    this.result = regexpNumber.test(this.phone) ;
    alert(regexpNumber.test(this.phone) )
    if (regexpNumber.test(this.phone) == true  ){
         this.result =  'Pass!'
    } else {
         this.result =  'Fail'
    }
    
    

  }

}