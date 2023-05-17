import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public username = 'admin';
  public color = 'pink'
  public counter = 0
  constructor(private common: CommonService){
    this.counter = common.getCounter()
    common.setCounter(this.counter+1)
  }

  squareCounter(number: number){
    return this.common.square(number)
  }
}
