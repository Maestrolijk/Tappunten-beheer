import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.afdeling.toLowerCase().includes(terms);
    });
  }
}

// below function should filter on assigned column but gives undefined

// export class SearchPipe implements PipeTransform {
//   transform(items: any[], terms: string, columnname: string): any[] {
//     if(!items) return [];
//     if(!terms) return items;
//     terms = terms.toLowerCase();
//     return items.filter( it => {
//       return it[columnname].toLowerCase().includes(terms);
//     });
//   }
// }