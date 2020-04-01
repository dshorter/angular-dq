import { Validator, NG_VALIDATORS, FormControl } from "@angular/forms";
import { Directive, OnInit, forwardRef } from "@angular/core";

@Directive({
  selector: "[phoneNanp]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhoneNanpDirective, multi: true }
  ]
})
export class PhoneNanpDirective implements Validator, OnInit {
  ngOnInit() {}

  validate(c: FormControl) {
    let v: number = +c.value;

    if (isNaN(v)) {
      return { gte: true, requiredValue: 10 };
    }

    if (v <= +10) {
      return { gte: true, requiredValue: 10 };
    }

    return null;
  }
}
