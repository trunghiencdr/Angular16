import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private counter = 0;
  setCounter(counter: number) {
    this.counter = counter
  }
  getCounter(): number {
    return this.counter
  }

  square(number: number): number {
    return number * number
  }

  submitData(name: any){
    console.log('Send data to server:', name)
  }

}
