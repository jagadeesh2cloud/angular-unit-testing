import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask'
})
export class EmailMaskPipe implements PipeTransform {

  private maskContent = '*********';
  private separator = '@';
  transform(value: any, args?: any): any {
    console.log(value);
    let emailData = 'N/A';
    if (value) {
      const maskedData = value.split(this.separator);
      emailData = maskedData[0].slice(0,1) + this.maskContent + maskedData[0].slice(-1) + this.separator + maskedData[1];
    }
    return emailData;
  }

}
