import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fltrpipe'
})
export class FltrpipePipe implements PipeTransform {

  transform(value: any,searchTerm:any ): any {
    return value.filter(function(search)
    {
      return search.name.indexOf(searchTerm) > -1
    })
  }

}
