import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public name = 'hien'

  constructor(private common: CommonService){

  }
  public submitForm(){
    console.log('submitForm', this.name)
    this.common.submitData({name: this.name, age: 18})
  }
}
