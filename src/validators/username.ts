import { FormControl } from '@angular/forms';

export class UsernameValidator {

  static checkUsername(control: FormControl): any {

    return new Promise(resolve => {

      //Fake a slow response from server

      setTimeout(() => {
        if(control.value.toLowerCase() === "greg"){

          resolve({
            "username taken": true
          });

        } else {
          resolve(null);
        }
      }, 2000);

    });
  }
 
}