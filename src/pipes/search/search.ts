// imported plugins
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

// // pipe looks for typed value (terms) and looks in specific column for value
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: string, columnname: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    if(!columnname) return [];
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it[columnname].toLowerCase().includes(terms);
    });
  }
}