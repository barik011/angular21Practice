import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naPipe',
})
export class NaPipe implements PipeTransform {

  transform(value: any): any {
    if(value!=null && value!=undefined && value !=''){
    return value;
    }
    else{
      return '--'
    }
  }

}
