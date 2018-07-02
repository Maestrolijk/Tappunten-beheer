// imported plugins
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

// // // pipe looks for typed value (terms) and looks in specific column for value
// export class SearchPipe implements PipeTransform {
//   transform(items: any[], terms: string, columnname: string): any[] {
//     if(!items) return [];
//     if(!terms) return items;
//     // if(!columnname) return [];
//     terms = terms.toLowerCase();
//     return items.filter( it => {
//       return it.afdeling.toLowerCase().includes(terms) || it.ruimte.toLowerCase().includes(terms) || it.omschrijving.toLowerCase().includes(terms) || it.functie.toLowerCase().includes(terms) || it.gespoeld.toLowerCase().includes(terms);
//     });
//   }
// }


// // pipe looks for typed value (terms) and looks in specific column for value
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: string, columnname: string): any[] {
    if (!items) return [];
    if (!terms) return items;
    terms = terms.toLowerCase();
    return items.filter(it => {
      switch (columnname) {
        case "afdeling": {
          return it.afdeling.toLowerCase().includes(terms);
        }
        case "ruimte": {
          return it.ruimte.toLowerCase().includes(terms);
        }
        case "omschrijving": {
          return it.omschrijving.toLowerCase().includes(terms);
        }
        case "functie": {
          return it.functie.toLowerCase().includes(terms);
        }
        case "gespoeld": {
          return it.gespoeld.toLowerCase().includes(terms);
        }
        case "adnaam": {
          return it.AD_naam.toLowerCase().includes(terms);
        }
        case "naam": {
          return it.naam.toLowerCase().includes(terms);
        }
        case "telefoon": {
          return it.telefoon.toLowerCase().includes(terms);
        }
        default: {
          return [];
        }
      }
    });
  }
}