import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export class ForbidenNameValidator implements Validator{

    constructor(private nameExp:RegExp){

    }
    validate(control: AbstractControl): ValidationErrors | null {
        const forbidden=this.nameExp.test(control.value);

        return forbidden?{forbiddenName:{value:control.value}}:null;
    }
}

//alternative implementation using functional approach
export function forbidenNameValidator(nameExp:RegExp):ValidatorFn {

     return (control: AbstractControl): ValidationErrors | null => {
        const forbidden=nameExp.test(control.value);

        return forbidden?{forbiddenName:{value:control.value}}:null;
    }
}