import { Component, OnInit } from "@angular/core";
import { Component, Submit } from "@angular/core";

@Component({
  selector: "app-phone-number",
  templateUrl: "./phone-number.component.html",
  styleUrls: ["./phone-number.component.css"]
})
export class PhoneNumberComponent implements OnInit {
  phone: string;
  result: any;

  constructor() {}

  onSubmit() {
    
  }

  ngOnInit() {}

  OnKeyUp(event: any) {
    
    this.phone = event.target.value;
    let regexpNumber: RegExp = new RegExp(
      "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$"
    );
    this.result = regexpNumber.test(this.phone);
    //  alert(this.result)
    if (regexpNumber.test(this.phone) ) {
      this.result = "Pass!";
    } else {
      this.result = "Fail";
    }
  }
}
