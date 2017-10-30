import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(links: any, term: any): any {
    if (!term) return links

    return links.filter(function(link){
      return link.title.toLowerCase().includes((term.toLowerCase()).replace('%20', ' ')) |
              link.url.toLowerCase().includes((term.toLowerCase()).replace('%20', ' '))
    })
  }


}
