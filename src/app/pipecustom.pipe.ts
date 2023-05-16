import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecustom'
})
export class PipecustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('pipe custom', value);
    args.forEach(
      value => {
        console.log('args', value)
      }
    )
    if(value){
      return value
    }
    return 'value is false';
  }

}
