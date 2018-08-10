import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();
    console.log(args)
    return value.filter((item) => {
       return JSON.stringify(item).toLocaleLowerCase().includes(args);   
    })
  }

}
