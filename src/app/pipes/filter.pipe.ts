import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchField: string, searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    if (!searchField) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      switch (searchField) {
        case 'id': { return it[searchField].toLowerCase().includes(searchText); }
        case 'type': { return it['attributes']['currency_type'].toLowerCase().includes(searchText); }
        default: { return it['attributes']['currency_type'].toLowerCase().includes(searchText); }
    }});
  }
}
