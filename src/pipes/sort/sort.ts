// imported plugins
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})

// pipe sorts values ascending (when clicked again descending)
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, args?: any): Array<string> {
    return array.sort(function(a, b){
      if(a[args.property] < b[args.property]){
          return -1 * args.order;
      }
      else if( a[args.property] > b[args.property]){
          return 1 * args.order;
      }
      else{
          return 0;
      }
    });
  }
}